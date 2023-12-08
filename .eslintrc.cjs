module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prefer-arrow', 'prettier'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
          object: false,
        },
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    camelcase: 'error',
    'class-methods-use-this': 'error',
    curly: 'error',
    'default-param-last': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
        cjs: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'error',
    'no-console': ['warn', { allow: ['error'] }],
    'no-param-reassign': 'error',
    'no-promise-executor-return': 'error',
    'no-restricted-exports': 'error',
    'no-shadow': 'error',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-destructuring': 'error',
    'prefer-regex-literals': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'config'],
        extensions: ['.ts', '.js', '.cjs'],
      },
    },
  },
}
