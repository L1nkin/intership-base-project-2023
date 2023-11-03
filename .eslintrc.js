module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'import', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-use-before-define': 'error',

    'react-native/no-raw-text': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'warn',

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/deprecation': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'comma-dangle': 'off',
    'space-before-function-paren': 'off',

    'import/no-default-export': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'internal',
          ['parent', 'sibling'],
          'builtin',
          'object',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.stories.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
