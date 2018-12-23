module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  'rules': {
    'no-param-reassign': ['error', { 'props': false }],
    'no-underscore-dangle': 'off',
    'indent': ['error', 2]
  }
}
