const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, './src')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg)$/,
				use: ['file-loader'],
			},
		],
	},
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin({ filename: 'css/style.css' }),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	devtool: 'source-map',
	mode: 'development',
};
