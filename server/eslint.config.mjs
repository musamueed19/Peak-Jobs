import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest'; // Import Jest plugin correctly

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'],
    ignores: ['coverage/**', 'node_modules/**'], // ✅ Ignore coverage reports & node_modules
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node, // ✅ Enables `process` and other Node.js globals
    },
  },
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      globals: globals.jest, // ✅ Enables Jest globals like `describe`, `it`, `expect`
    },
    plugins: { jest: pluginJest },
    rules: pluginJest.configs.recommended.rules, // ✅ Apply Jest recommended rules
  },
  pluginJs.configs.recommended,
];

// Note: The `globals` object is used to enable specific globals for each configuration.
// export default [
//   {
//     files: ["**/*.js"],
//     languageOptions: {
//       sourceType: "commonjs",
//       globals: globals.node, // ✅ Enables `process` and other Node.js globals
//     }
//   },
//   {
//     files: ["tests/**/*.test.js"],
//     languageOptions: {
//       globals: globals.jest, // ✅ Enables Jest globals like `describe`, `it`, `expect`
//     },
//     plugins: { jest: pluginJest },
//     rules: pluginJest.configs.recommended.rules, // ✅ Apply Jest recommended rules
//   },
//   pluginJs.configs.recommended,
// ];
