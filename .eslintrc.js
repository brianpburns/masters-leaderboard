module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.server.json'],
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    camelcase: 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-shadow': ['error'],
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
};
