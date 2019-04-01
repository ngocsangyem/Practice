var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bunble.js',
		publicPath: './dist/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: [`style-loader`],
					use: 'css-loader'
				})
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('site.css'),
	]
}