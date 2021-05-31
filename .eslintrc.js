module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  plugins: ['graphql', '@typescript-eslint', 'functional'],
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylitic'
  ],
  rules: {
    'functional/no-expression-statement': 0,
    'functional/functional-parameters': 0
  }
};
