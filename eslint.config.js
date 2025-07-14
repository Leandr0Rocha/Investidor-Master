// eslint.config.js
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        jest: 'readonly',
        node: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
]; 