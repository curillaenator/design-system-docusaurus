#!/bin/bash
function makeCss {
  source=${1}
  scss=${2}
  css=${3}
  map=${4}

  CACHE_TEMPLATE="
  @use '$source' as map;

  @if map.\$$name != "undefined" {
    .xyz-$name {
      @each \$key, \$value in map.\$$name {
        --xyz-$name-#{\"\"+\$key}: #{\$value};
      }
    }
  }
  "

  echo $CACHE_TEMPLATE >${scss}

  npx sass --no-source-map $scss:$css

  numOfWords=$(wc -w <$css)

  if [ $numOfWords -eq 0 ]; then
    rm $css
  fi

  rm $scss
}

for file in "./src/scss/style/**.scss"; do
  pathes+=($file)
done

mkdir build/cssv/core

for file in ${pathes[@]}; do
  name=$(echo $file | cut -f5 -d'/' | cut -c2- | awk '{ print substr( $0, 1, length($0)-5 ) }')

  src="../../../src/scss/style/"
  scss="build/cssv/core/$name.scss"
  css="build/cssv/core/$name.module.css"

  if [ $name != 'index' ]; then
    if [ $name != 'variables' ]; then
      makeCss $src $scss $css $name
    fi
  fi
done
