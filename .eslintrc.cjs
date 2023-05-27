module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: ["react", "react-refresh", "@typescript-eslint", "prettier"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"react/react-in-jsx-scope": 0,
		"no-shadow": 0,
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true
			}
		],
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true
			}
		],
		"array-element-newline": "consistent"
	}
};
