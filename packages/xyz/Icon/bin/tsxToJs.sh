#!/bin/bash

for var in "$@"
  do
    for file in "${var}/*.js"; do
    sed -i 's/.tsx/.js/g' $file;
  done
done
