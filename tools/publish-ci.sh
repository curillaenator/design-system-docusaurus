#!/bin/bash

set -e
set -x

assume_unchanged () {
  git update-index --assume-unchanged "$1" || echo "can't assume unchanged $1"
}
revert_assume_unchanged () {
  git update-index --no-assume-unchanged "$1" || echo "can't no assume unchanged $1"
}

post_pack () {
  yarn postpack:packages
}

pre_pack () {
  yarn prepack:packages
}

build_packages () {
   yarn lerna:build:ci
}

prepare_publish () {
  assume_unchanged ".yarnrc.yml"
}

post_publish () {
  revert_assume_unchanged ".yarnrc.yml"
}

lerna_publish () {
    prepare_publish

    GIT_COMMIT=$(git rev-parse --verify HEAD)
    GIT_NAME=$(git --no-pager show -s --format='%an' "$GIT_COMMIT")
    GIT_EMAIL=$(git --no-pager show -s --format='%ae' "$GIT_COMMIT")
    GIT_PATCH_PREFIX=$(date +%F-%T | tr ":" "-") # было +%F-%k-%M-%S '2020-11-20- 9-45-46' появлялся пробел

    git config user.email "$GIT_EMAIL" --replace-all
    git config user.name "$GIT_NAME" --replace-all
    git config push.default simple

    git fetch origin

    # гарантируем, что master или kit4 актуальный
    git checkout -b patch_${GIT_PATCH_PREFIX}
    git branch -D ${BRANCH_NAME} || true
    git checkout -b ${BRANCH_NAME} origin/${BRANCH_NAME}
    git branch -D patch_${GIT_PATCH_PREFIX}

    git status
    git diff

    { # try
       # проставляем версии и делаем коммит
        node_modules/.bin/lerna version \
        --conventional-commits \
        --conventional-graduate \
        --yes \
        --no-push \
        --message "chore: release [ci skip]"\
        --loglevel verbose

       GIT_LERNA_COMMIT=$(git rev-parse --verify HEAD)
       # находим список тэгов, которые проставила lerna к этому моменту - это изменившиеся пакеты
       GIT_TAGS_LIST=$(git tag --points-at "$GIT_LERNA_COMMIT")

       if [[ -z $GIT_TAGS_LIST ]]; then
           echo "\e[32m  Список тэгов пуст: нет пакетов для публикации в nexus"
           exit 0
       fi

       # находим список всех пакетов в области видимости lerna
       LERNA_PACKAGES=$(node_modules/.bin/lerna list --json)

       # собираем все пакеты
       build_packages || exit 1

       # меняем пути в package.json каждого пакета на пути из publishConfig
       pre_pack

       # находим список пакетов, которые изменились и нужно опубликовать новую версию
       AFFECTED_PACKAGES=$(node ./tools/get-affected-packages --tags "$GIT_TAGS_LIST" --packages "$LERNA_PACKAGES")
       PROJECT_WORKING_DIR=$(pwd)
       echo -e "\e[32m  Публикация в npm..."

       for dir in $AFFECTED_PACKAGES;
        do
          cd "${dir}"
          yarn npm publish
        done
       
       cd $PROJECT_WORKING_DIR

       post_pack
       post_publish
    } || { # catch
       post_pack
       post_publish
       exit 1
    }

  # Чтобы теги не улетели без реальных правок
  git push origin ${GIT_BRANCH}
  git push origin ${GIT_BRANCH} --follow-tags
}


lerna_publish
