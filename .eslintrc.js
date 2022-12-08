module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: { version: 'detect' }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['**/.next/*.js'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true
      }
    ],
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/no-use-before-define': 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'error'
  }
};
