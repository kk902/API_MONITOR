module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020
  },
  rules: {
    camelcase: 0,
    "spaced-comment": 0,
    "import/order": 0,
    "no-unused-vars": 0,
    "no-param-reassign": 0
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  }
}
