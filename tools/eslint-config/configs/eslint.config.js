module.exports = {
  // extends: [require.resolve(`@d-sys-team/eslint-config-pnp`)],

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:prettier/recommended',
  ],

  overrides: [
    {
      files: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
      extends: ['plugin:testing-library/react'],
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'react', 'prettier'],

  rules: {
    'prettier/prettier': [
      2,
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: true,
        printWidth: 120,
        trailingComma: 'all',
        proseWrap: 'never',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/no-unstable-nested-components': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'warn',
    'no-underscore-dangle': 'off',
    'no-promise-executor-return': 'off',

    // правила для тестирования
    // 'testing-library/await-async-query': 'error',
    // 'testing-library/no-await-sync-query': 'error',
    // 'testing-library/no-debugging-utils': 'warn',
    // 'testing-library/no-dom-import': 'off',
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'warn',
    // 'jest/no-identical-title': 'error',
    // 'jest/prefer-to-have-length': 'warn',
    // 'jest/valid-expect': 'error',
  },
};
