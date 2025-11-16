import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  //
  // 1. Base JavaScript linting (ESLint recommended)
  //
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  //
  // 2. Prettier integration (disables conflicting ESLint stylistic rules)
  //
  {
    name: "prettier-config",
    rules: {
      ...prettier.rules,
    },
  },

  //
  // 3. Allow CommonJS files to work properly
  //
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  //
  // 4. Ignore output folders
  //
  {
    ignores: ["node_modules/**", "dist/**", "build/**", ".next/**"],
  },
]);
