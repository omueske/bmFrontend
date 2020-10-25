module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/recommended',
    // 'plugin:nuxt/recommended',
    'eslint:recommended',
    // 'prettier/vue',
    'tslint-config-prettier'
    // 'plugin:prettier/recommended'
  ],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    indent: ['error', 6, { SwitchCase: 1 }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
