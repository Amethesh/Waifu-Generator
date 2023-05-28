module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["plugin:@next/next/recommended", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"react-refresh/only-export-components": 0,
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
		"prettier/prettier": ["error", { endOfLine: "auto" }]
	}
};
