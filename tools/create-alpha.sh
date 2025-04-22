#!/bin/bash

create_alpha_packages () {
   node_modules/.bin/lerna version prerelease  \
    --conventional-commits \
    --no-push \
    --no-changelog \
    --message "chore: prerelease [alpha]"
}

create_alpha_packages