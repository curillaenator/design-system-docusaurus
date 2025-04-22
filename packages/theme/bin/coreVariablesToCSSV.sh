#!/bin/bash
for file in "./src/scss/style/**.scss"; do
  pathes+=($file)
done

for path in ${pathes[@]}; do
  name=$(echo $path | cut -f5 -d'/' | cut -c2- | awk '{ print substr( $0, 1, length($0)-5 ) }')
  if [ $name != 'index' ]; then
    if [ $name != 'variables' ]; then
      echo $name
      parts+="
          @each \$key, \$value in map.\$$name {
            --xyz-$name-#{\"\"+\$key}: #{\$value};
          }
      "
    fi
  fi
done

echo ${names[@]}
CACHE_TEMPLATE="
  @use '../../src/scss/style/_index.scss' as map;

  .xyz-core {
    ${parts[@]}
  }
  "

echo $CACHE_TEMPLATE >"build/cssv/core.scss"
npx sass --no-source-map build/cssv/core.scss:build/cssv/core.module.css
rm build/cssv/core.scss
