const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/App/index.html",
	filename:"./index.html"
})

module.exports = {
	mode: 'development',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use:{
				loader: "babel-loader"
			}
		},
		{
			test: /\.css$/,
			use: ["style-loader","css-loader"]
		}]
	},
	plugins: [htmlPlugin],
	// entry: path.resolve(__dirname, 'src/main.js'),
	// output: {
	// 	filename: 'main.js',
	// 	path: path.resolve(__dirname, 'dist')
	// }

}
