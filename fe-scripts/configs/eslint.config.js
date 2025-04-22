module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint', 'react-hooks', 'testing-library', 'jest'],
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:mdx/recommended'],
  settings: {
    'mdx/code-blocks': true,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.md', '**/*.mdx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': ['error', { props: false }],
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
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    curly: 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-continue': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // правила для тестирования
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
