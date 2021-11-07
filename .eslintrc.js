module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": 0,
    "react/react-in-jsx-scope": 0,
    "no-console": 1,
    "react/jsx-uses-vars": 2,
    "no-undef": 0,
    "": 0,
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
