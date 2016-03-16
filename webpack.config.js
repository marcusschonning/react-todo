var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConf = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};
