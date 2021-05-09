module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'react/prop-types': 'off',
    'quotes': [
      'error', 
      'single', 
      { avoidEscape: true }],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'semi': [
      'error',
      'never'
    ],
  },
  'settings': {
    'react': {
      version: 'detect',
    },
  },
}
