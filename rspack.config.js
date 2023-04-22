/**
 * @type {import('@rspack/cli').Configuration}
 */
const path = require("path");
module.exports = {
	mode: "development",
	devtool: 'source-map',
	context: __dirname,
	optimization: {
		sideEffects: false,
		moduleIds: 'named',
		minimize: false
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[contenthash].bundle.js',
		cssChunkFilename: 'css/[contenthash].css',
		clean: true
	},
	entry: {
		main: "./src/main.jsx"
	},
	target: ['web', 'es5'],
	builtins: {
		presetEnv: {
			targets: ['Chrome >= 48']
		},
		html: [
			{
				template: "index.html",
				filename: "index.html"
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.js$/,
				resourceQuery: /raw/,
				type: "asset/source",
			},
			{
				test: /\.js$/,
				type: 'jsx',
			}
		]

	}
};
