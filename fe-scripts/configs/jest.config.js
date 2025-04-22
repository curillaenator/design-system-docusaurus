const path = require('path');
const babelConfigPath = require.resolve('./babel.config.js');

module.exports = {
  setupFiles: ['jest-canvas-mock', 'jest-fetch-mock'],

  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    require.resolve('./jest-match-media-mock.js'),
    require.resolve('./jest-intersection-observer-mock.js'),
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: babelConfigPath }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      require.resolve('./jest-file-transformer.js'),
  },

  testMatch: ['**/__tests__/*test.(ts|tsx|js|jsx)'],

  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: false,
      tsconfig: path.resolve('./tsconfig.json'),
      babelConfig: babelConfigPath,
    },
    'babel-jest': {
      isolatedModules: true,
      babelConfig: babelConfigPath,
    },
  },

  testEnvironment: 'jest-environment-jsdom',

  testResultsProcessor: 'jest-junit',

  testPathIgnorePatterns: ['/node_modules/', 'www', 'build', '/__tests__/mocks/.*', '/tools/templates/'],

  transformIgnorePatterns: [`/node_modules/(?!(@pcbl|@pcbl-tools|@pcbl-ui-v4|)/)`],
  // coverageReporters: ['json-summary', 'text', 'lcov'],
  // reporters: ['default', 'jest-junit'],
};
