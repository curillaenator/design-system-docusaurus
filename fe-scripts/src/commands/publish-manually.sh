#!/bin/bash

set -e

assume_unchanged () {
  git update-index --assume-unchanged "$1" || echo "can't assume unchanged $1"
}

revert_assume_unchanged () {
  git update-index --no-assume-unchanged "$1" || echo "can't no assume unchanged $1"
}

post_pack () {
  yarn postpack:packages
  for package in $(node_modules/.bin/lerna list --json | jq -r '. | map(.location) | .[]');
  do
    revert_assume_unchanged "${package}/package.json"
    revert_assume_unchanged "${package}/.npmrc"
  done
}

prepare_npmrc () {
   # перенести в.env файл
   NPM_PRIVATE_REGISTRY='http://nexus-dev.pcbltools.ru/repository/npm-group/'
   NPM_PRIVATE_TOKEN='NpmToken.3a5cd0ab-8288-3b91-863d-e94e6f8d9b38'
   echo "registry=${NPM_PRIVATE_REGISTRY}" >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-group/:always-auth=true"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-public/:always-auth=true"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-public/:_authToken=${NPM_PRIVATE_TOKEN}"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-group/:_authToken=${NPM_PRIVATE_TOKEN}"  >> "$1"
}

pre_pack () {
  yarn prepack:packages
  # записываем .npmrc в корень директории uikit
  # prepare_npmrc ".npmrc"

  for package in $(node_modules/.bin/lerna list --json | jq -r '. | map(.location) | .[]');
  do
      prepare_npmrc "${package}/.npmrc"
      assume_unchanged "${package}/.npmrc"
      assume_unchanged "${package}/package.json"
      assume_unchanged "${package}/package.json-backup"
  done
}

build_packages () {
   yarn lerna:build:ci
}

lerna_publish () {
  RELEASE_TYPE="$1"

  if [ "$RELEASE_TYPE" == "alpha" ]
  echo "start publish"
  then
    echo "\e[32m Релиз alpha версии"

    pre_pack

    build_packages

    GIT_LAST_COMMIT=$(git rev-parse --verify HEAD)

    { # try
      node_modules/.bin/lerna version prerelease \
        --conventional-commits \
        --yes \
        --no-push \
        --message "chore: release alpha [manually skip]" \
        --loglevel verbose \
        --force-git-tag && node_modules/.bin/lerna run setVersion

      GIT_TAGS_LIST=$(git tag --points-at HEAD)
      
      LERNA_PACKAGES=$(node_modules/.bin/lerna list --json)

      AFFECTED_PACKAGES=$(node ./tools/get-affected-packages --tags "$GIT_TAGS_LIST" --packages "$LERNA_PACKAGES")

      echo "$GIT_TAGS_LIST GIT_TAGS_LIST"
      echo "$LERNA_PACKAGES LERNA_PACKAGES"
      echo "$AFFECTED_PACKAGES AFFECTED_PACKAGES"

      if [[ -z $GIT_TAGS_LIST ]]; then
          echo "\e[32m  Список тэгов пуст: нет пакетов для публикации в nexus"
          exit 0
      fi
       echo -e "\e[32m  Публикация в npm..."

      for dir in $AFFECTED_PACKAGES;
      do
        echo "Список тэгов для публикации: $dir"

        npm publish "${dir}"
      done

      post_pack

      git reset --hard $GIT_LAST_COMMIT

    } || { # catch

      post_pack
      
      git reset --hard $GIT_LAST_COMMIT

      exit 1
    }
  fi

  if [ "$RELEASE_TYPE" == "main" ]
  then
    echo "\e[32m Ручной релиз основной версии"
    { # try
       node_modules/.bin/lerna version \
        --conventional-commits \
        --yes \
        --no-push \
        --message "chore: release [manually skip]"\
        --loglevel verbose

     GIT_TAGS_LIST=$(git tag --points-at HEAD)

     echo "Список тэгов для публикации: $GIT_TAGS_LIST"

     # меняем пути в package.json каждого пакета на пути из publishConfig
     yarn prepack:packages
     build_packages
     # записываем .npmrc в корень директории uikit
     prepare_npmrc ".npmrc"

     # Публикуем через npm, так как npm все равно на измененные package.json и незакомиченные изменения в отличие от случая, если бы и простановку версий, и публикацию пакетов делали через lerna:publish
     for package in $(node_modules/.bin/lerna list --json | jq -r '. | map(.location) | .[]');
     do
      prepare_npmrc "${package}/.npmrc"
      npm publish "${package}"
     done

     post_pack

    } || { # catch

      post_pack

      exit 1
    }
  fi
}

lerna_publish "$1"
