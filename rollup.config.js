import "@babel/plugin-transform-runtime";
import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
	input: "./src/index.js",
	output: [
		{
			file: "dist/index.min.js",
			format: "cjs",
			exports: "auto",
			sourcemap: true,
		},
		{
			file: "dist/index.es.js",
			format: "es",
			exports: "auto",
			sourcemap: true,
		},
		{
			file: `dist/index.esm.js`,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		postcss({
			modules: {
				generateScopedName: "__BR_checker_[local]_[hash:base64:5]",
			},
			plugins: [],
			minimize: true,
		}),
		alias({
			entries: [
				{ find: "react", replacement: "preact/compat" },
				{ find: "react-dom/test-utils", replacement: "preact/test-utils" },
				{ find: "react-dom", replacement: "preact/compat" },
				{ find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
			],
		}),
		babel({
			babelHelpers: "runtime",
			exclude: "node_modules/**",
			presets: ["@babel/preset-react"],
			plugins: [
				"@babel/plugin-transform-runtime",
				[
					"@babel/plugin-transform-react-jsx",
					{
						runtime: "automatic",
						importSource: "preact",
					},
				],
			],
		}),
		resolve(),
		terser(),
	],
};
