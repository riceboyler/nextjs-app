import { defineConfig } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    ...js.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    extends: compat.extends(
        "eslint:recommended",
        "next",
        "plugin:react/recommended",
        "prettier",
    ),

    plugins: {
        "unused-imports": unusedImports,
    },

    rules: {
        "jsx-quotes": [1, "prefer-double"],
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "react/jsx-first-prop-new-line": ["error", "multiline"],

        "react/jsx-max-props-per-line": ["error", {
            when: "always",
            maximum: 1,
        }],

        "react/jsx-indent-props": [0, 2],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-closing-tag-location": ["error"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "react/jsx-wrap-multilines": ["error", {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
        }],

        "react/no-unescaped-entities": ["off"],
        "react/prop-types": ["off"],
        "react/self-closing-comp": ["error"],
    },
}]);