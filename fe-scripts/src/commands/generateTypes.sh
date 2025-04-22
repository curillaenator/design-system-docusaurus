#!/bin/bash

COLOR_YELLOW="\033[33m"
COLOR_GREEN="\033[32m"
COLOR_DEFAULT="\033[0m"

# setup
COMMAND=${1}

SHEMA_PATH="$PWD/packages/theme/src/typesSchema/typesSchema.json"
EXISTING_SCHEMAS=(`cat $SHEMA_PATH | jq 'keys | .[]'`)

$PACKAGE

# проверка в каком репо запускается скрипт (для базового репо генерация типов в xyz, для дочерних темных репо - в ui)
$WORKSPACE
  
if [[ $(echo $PWD | rev | cut -f1 -d'/' | rev) =~ "docs" ]] 
  then
    WORKSPACE="xyz"
  else
    WORKSPACE="ui"
fi

# helpers

function askPackage {
  read pkg

  if [[ -z ${pkg} ]]; then
    echo -e "${COLOR_YELLOW}Нужно указать имя пакета!!!${COLOR_DEFAULT}"
    askPackage

  elif [[ ! "${EXISTING_SCHEMAS[@]}" =~ "${pkg,,}" ]]; then
    echo -e "${COLOR_YELLOW}Для указанного пакета нет схемы для генерации типов, попробуйте еще раз или завершите скрипт (CTRL+c)${COLOR_DEFAULT}"
    askPackage

  else
    PACKAGE=$pkg
  fi
}

# сценарий ручной генерации
function manual {
  echo "Укажите пакет (например Button)"
  askPackage

  packagePath="$PWD/packages/$WORKSPACE/$PACKAGE"

  if [[ ! -d $packagePath ]]
    then 
      echo -e "${COLOR_YELLOW}Пакета $PACKAGE нет в воркспейсе $WORKSPACE!!!${COLOR_DEFAULT}" 
      exit
  fi
    
  output="$packagePath/src/tokenInterfaces.ts"

  cat $SHEMA_PATH | jq -r ".${PACKAGE,,}" | json2ts -o $output --style.singleQuote

  echo -e "${COLOR_GREEN}Типы пакета $PACKAGE в $WORKSPACE успешно сгенерированы!${COLOR_DEFAULT}"

  exit
}

# сценарий при коммите
function commit {
  staged=(`git diff --staged --name-only | tr ' ' ' '`)

  # получение из всех файлов, добавленных в стейджд, уникальных имен пакетов, где нужно сгенерировать типы
  pathRegExp="^packages/$WORKSPACE/*"
  uniq_pkgs=()
  updates=0

  for path in ${staged[@]}
  do
    pkgName=$(echo $path | cut -f3 -d'/')
    pkgRegExp="^$pkgName$"

    if [[ ! $path =~ $pathRegExp ]]
      then
        continue

    elif [[ ! "${uniq_pkgs[*]}" =~ $pkgRegExp ]]
      then
        uniq_pkgs+=("$pkgName")

    fi   
  done

  # если в стейдж нет файлов целевых компонентов (лежащих по путям в матче с $pathRegExp), то скип скрипта
  if [[ ${#uniq_pkgs[*]} -eq 0 ]]
    then
      exit
  fi

  changedPkgsNames=""

  # генерация типов
  for upkg in ${uniq_pkgs[@]}
  do
    if [[ "${EXISTING_SCHEMAS[@]}" =~ "${upkg,,}" ]]; then
      changedPkgsNames="$changedPkgsNames $upkg"

      output="$PWD/packages/$WORKSPACE/$upkg/src/tokenInterfaces.ts"

      cat $SHEMA_PATH | jq -r ".${upkg,,}" | json2ts -o $output --style.singleQuote

      ((updates++))
    fi
  done

  git add ./**/tokenInterfaces.ts

  if [[ $updates -ne 0 ]]
    then
      echo -e "${COLOR_GREEN}Типы в измененых пакетах ($changedPkgsNames) воркспейса $WORKSPACE сгенерированы успешно!${COLOR_DEFAULT}"
  fi

  exit
}

# scenario
case $COMMAND in
  'manual') 
    manual
    ;;

  'commit') 
    commit
    ;;
esac
