module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: [
    "jest"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      { before: true, after: true
      }
    ],
    "no-console": 0,
    "@typescript-eslint/space-infix-ops": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/semi": [
      "error"
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "always"
    ],
    "@typescript-eslint/comma-spacing": "error",
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-explicit-any": 1
  },
};
