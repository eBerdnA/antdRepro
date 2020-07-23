const path = require("path");

// npx webpack --watch
// watch issue: https://github.com/webpack/webpack/issues/2949

module.exports = {
	mode: "production",

	devtool: "source-map",

	watchOptions: {
        poll: true
    },
	resolve: {
		extensions: [".js"]
	},
	output: {
		path: path.resolve(__dirname, "wwwroot/dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	}
};