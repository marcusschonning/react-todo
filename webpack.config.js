var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractCSS = new ExtractTextPlugin('style.css');

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
		path: __dirname + '/dist/',
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
				exclude: /node_modules/,
				loader: ExtractCSS.extract(["css", "sass?outputStyle=compressed"])
			}
		]
	},
	plugins: [
		ExtractCSS,
		HtmlWebpackPluginConf
	]
};
