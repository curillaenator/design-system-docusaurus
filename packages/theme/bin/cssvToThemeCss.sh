#!/bin/bash

mkdir build/cssv

function makeCss {
  source=${1}
  scss=${2}
  css=${3}
  map=${4:-"variables"}

  CACHE_TEMPLATE="
  @use '$source' as map;

  @if map.\$$map != \"undefined\" {
    .light {
      @each \$key, \$value in map-get(map.\$$map, 'theme-light') {
        #{\$key}: \$value;
      }
    }

    .dark {
      @each \$key, \$value in map-get(map.\$$map, 'theme-dark') {
        #{\$key}: \$value;
      }
    }
  }
  "

  echo $CACHE_TEMPLATE > ${scss}

  npx sass --no-source-map $scss:$css

  numOfWords=$(wc -w < $css)

  if [ $numOfWords -eq 0 ]
  then
    rm $css
  fi

  rm $scss
}

pathes=('./src/scss/theme/')

for file in "./src/scss/**/_variables.scss"; do
  pathes+=($file)
done

for path in ${pathes[@]}; do
  name=$(echo $path | cut -f4 -d'/')

  if [[ $name =~ 'style' ]]
    then
      continue
  fi

  src="../../src/scss/$name/"
  scss="build/cssv/$name.scss"
  css="build/cssv/$name.module.css"

  if [[ $name =~ 'theme' ]]
    then
      themeCss="build/cssv/global.module.css"
      makeCss $src $scss $themeCss 'themes'
    else
      makeCss $src $scss $css
  fi
done


/bin/bash ./bin/coreVariablesToCSSV.sh
/bin/bash ./bin/coreVariablesToCSSVSections.sh

exit