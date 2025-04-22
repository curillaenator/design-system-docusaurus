const path = require('path');
const fs = require('fs-extra');
const jestConfig = require('./jest.config.js');

/** Базовый конфиг jest: используется
 *  конфигурация конфига jest которая используется при запуске теста в каждом пакете (yarn lerna run test)
 */
function getConfig() {
  // можно создавать кастомный конфиг внутри пакета
  // если уже есть конфиг внутри пакета, берем его
  if (fs.pathExistsSync('jest.config.js')) {
    return require(path.resolve('jest.config.js'));
  }

  return {
    rootDir: path.resolve('src'),
    ...jestConfig,
  };
}

module.exports = getConfig();
