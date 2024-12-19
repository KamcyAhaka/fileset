import withNuxt from "./.nuxt/eslint.config.mjs";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
	eslintPluginPrettierRecommended,
	{
		files: [
			"**/*.vue",
			"**/*.js",
			"**/*.jsx",
			"**/*.cjs",
			"**/*.mjs",
			"**/*.ts",
			"**/*.tsx",
			"**/*.cts",
			"**/*.mts",
		],
	},
]);
