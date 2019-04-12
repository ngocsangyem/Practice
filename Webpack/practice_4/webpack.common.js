const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/app.js",
		about: "./src/about.js"
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // 3. Inject styles into DOM
					"css-loader", // 2. Turn css into commonjs
					"sass-loader" // 1.Turn sass in to css
				]
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						ouputPath: "img"
					}
				}
			},
			,
			{
				test: /\.(otf|eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "fonts/[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: true,
			chunks: ["index"],
			filename: "index.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/about.html",
			inject: true,
			chunks: ["about"],
			filename: "about.html"
		}),
		new cleanWebpackPlugin()
	]
};
