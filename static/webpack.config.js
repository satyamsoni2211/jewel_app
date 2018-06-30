const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const BundleTracker = require('webpack-bundle-tracker');

const debug = true;


module.exports = {
	context: __dirname,
	entry: {
		App: './src/index.js'
	},
	// devtool: debug ? 'inline-eval-cheap-source-map' : 'source-map',
	output: {
		//where you want your compiled bundle to be stored
		path: path.resolve('../static/assets/'),
		//naming convention webpack should use for your files
		filename: '[name].react-compiled[hash].js'

	},
	resolve: {

		modules: [
			"node_modules"
		]
	},
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						'env',
						'react',
						'stage-0',
					],
				}
			}, {
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
							],
						},
					},
				],
			},
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/i,
			// 	loaders: [
			// 		'file?hash=sha512&digest=hex&name=[hash].[ext]',
			// 		'image-webpack?{progressive:true, optimizationLevel: 3, interlaced: false, pngquant:{quality: "30-40", speed: 1}}'
			// 	]
			// }{
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							bypassOnDebug: true,
							publicPath: '../static/assets/'
						}
					}
				],
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({ filename: './[name].react.css', disable: false, allChunks: true }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': debug ? JSON.stringify('development') : JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			},
			output: {
				comments: false
			},
			minimize: true

		}),
		new BundleTracker({filename: './webpack-stats.json'})
		// new MinifyPlugin()
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify('production')
		//   }),
		// new webpack.optimize.UglifyJsPlugin()
	]
};
