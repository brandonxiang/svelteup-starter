import globals from "globals";
import pluginJs from "@eslint/js";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...sveltePlugin.configs["flat/recommended"],
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: [".svelte"],
      },
    }
  },
  {
    files: ["**/*.svelte.js", "*.svelte.js"],
    languageOptions: {
      parser: svelteParser,
    }
  },
];