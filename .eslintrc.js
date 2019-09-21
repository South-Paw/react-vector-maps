module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error'],
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/accessible-emoji': 'off',
    'no-console': 'off',
  },
  overrides: [
    // {
    //   files: ['**/*.stories.js'],
    //   rules: { 'import/no-extraneous-dependencies': 'off' },
    // },
  ],
};
