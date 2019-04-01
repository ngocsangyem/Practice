const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
		lib: './src/lib.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Code Splitting'
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};