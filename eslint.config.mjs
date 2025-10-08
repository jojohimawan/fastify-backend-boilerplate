import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...js.environments.node.globals,
        Bun: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "max-len": ["error", { code: 100, ignoreComments: true }],
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "array-bracket-newline": ["error", { multiline: true, minItems: 2 }],
      "array-element-newline": ["error", { multiline: true, minItems: 2 }],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-imports": ["error"],
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
