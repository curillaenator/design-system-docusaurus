#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');

const BUILD_PATH = fs.pathExistsSync(path.resolve(__dirname, '../build')) ? 'build/' : '';

require('ts-node').register({
  transpileOnly: true,
  project: path.resolve(__dirname, `../${BUILD_PATH}configs/tsconfig.json`),
  compilerOptions: {
    module: 'CommonJS',
  },
});

require(`../${BUILD_PATH}src`);
