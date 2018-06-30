const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");

const debug = false;


module.exports = {
    context: __dirname,
    entry: {
        centersDashboard: './components/support_dashboard/main.jsx',
        planManager: './components/plan_management/planManager.jsx',
        todo: './components/todo/index.jsx',
        centersDashboardV2:'./components/accounts/accounts.jsx',
        payment: './components/Payment/index.jsx',
    },
    devtool: debug ? 'inline-eval-cheap-source-map' : 'source-map',
    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./assets/'),
        //naming convention webpack should use for your files
        filename: '[name].react-compiled.js'

    },
    resolve: {

        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', {modules: false}],
                        'react',
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
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 3, interlaced: false, pngquant:{quality: "30-40", speed: 1}}'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: './[name].react.css', disable: false, allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': debug ? JSON.stringify('development') : JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
    ]
};