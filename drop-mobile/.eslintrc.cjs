module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	rules: {
		"react/function-component-definition": 0,
		"react/react-in-jsx-scope": 0,
		"import/prefer-default-export": 0,
		"react-hooks/exhaustive-deps": 1,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
	},
	parser: require.resolve("@typescript-eslint/parser"),
	parserOptions: {
		project: require.resolve("./tsconfig.json"),
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			alias: {
				map: [["@", "./src"]],
				extensions: [".ts", ".tsx"],
			},
		},
	},
};
