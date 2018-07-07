module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': "off"// process.env.NODE_ENV === 'production' ? 'error' : 'off'
    ,'no-debugger': "off"//process.env.NODE_ENV === 'production' ? 'error' : 'off'
    ,"no-mixed-spaces-and-tabs": [0]//stop lint warnings
    ,"no-tabs": 0//stop lint warnings about tabs
    ,"comma-dangle": 0
    ,"no-param-reassign": 0
    ,"comma-spacing": 0
    ,"comma-style": 0
    ,"indent": 0
    ,"no-multiple-empty-lines": 0
    ,"eol-last": 0
    ,"quotes": 0
    ,"space-before-blocks": 0
    ,"semi": 0
    ,"space-in-parens": 0
    ,"block-spacing": 0
    ,"spaced-comment": 0
    ,"max-len": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}