module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:mocha/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'mocha', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': [1, 120],
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'mocha/no-setup-in-describe': 0,
  },
};
