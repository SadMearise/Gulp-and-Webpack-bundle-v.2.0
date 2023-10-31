module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "eslint-config-airbnb-base", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  ignorePatterns: ["dist", "webpack.config.js", "config"],
  rules: {
    "import/extensions": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    quotes: ["error", "double"],
  },
};
