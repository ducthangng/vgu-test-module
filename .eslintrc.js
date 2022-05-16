module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'no-const-assign': 2,
      '@typescript-eslint/no-empty-function': 0,
      'react/prop-types': 0,
      'dot-location': 0,
      'new-parens': 0,
      'no-whitespace-before-property': 0,
      'rest-spread-spacing': 0,
      'unicode-bom': 0
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  