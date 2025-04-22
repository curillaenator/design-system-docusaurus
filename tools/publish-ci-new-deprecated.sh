#!/bin/bash

set -e

assume_unchanged () {
  git update-index --assume-unchanged "$1" || echo "can't assume unchanged $1"
}

prepare_npmrc () {
   echo "registry=${NPM_PRIVATE_REGISTRY}" >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-group/:always-auth=true"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-public/:always-auth=true"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-public/:_authToken=${NPM_PRIVATE_TOKEN}"  >> "$1"
   echo "//nexus-dev.pcbltools.ru/repository/npm-group/:_authToken=${NPM_PRIVATE_TOKEN}"  >> "$1"
}

build_packages () {
   yarn lerna:build:force
}

lerna_publish () {
    echo "NPM_PRIVATE_REGISTRY: ${NPM_PRIVATE_REGISTRY}"
    echo "NPM_PRIVATE_TOKEN: ${NPM_PRIVATE_TOKEN}"

    echo -e "\e[32m  Установка git credentials..."

    GIT_COMMIT=$(git rev-parse --verify HEAD)
    GIT_NAME=$(git --no-pager show -s --format='%an' "$GIT_COMMIT")
    GIT_EMAIL=$(git --no-pager show -s --format='%ae' "$GIT_COMMIT")

    git config user.email "$GIT_EMAIL"
    git config user.name "$GIT_NAME"
    git config push.default simple

    git remote update

    git checkout master

    echo -e "\e[32m  Rebasing in release branch..."

    # делаем именно rebase так как есть вероятонсть race condition
    git pull --rebase origin master || exit 1

    for package in $(node_modules/.bin/lerna list --json | jq -r '. | map(.location) | .[]');
    do
        prepare_npmrc "${package}/.npmrc"
        assume_unchanged "${package}/.npmrc"
    done

    node_modules/.bin/lerna publish \
    --conventional-commits \
    --yes \
    --no-push \
    --message "chore: release [ci skip]"\
    --graph-type all \
    --loglevel verbose \
    --registry "${NPM_PRIVATE_REGISTRY}"

    git push origin master --follow-tags
}


lerna_publish
