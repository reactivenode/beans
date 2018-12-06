// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// Webpack is just a bunch of keys on module.exports!
module.exports = {
	mode: 'production',
	// This is where our app starts. This is why we have done all this importing
	// and exporting, to get to here
	entry: './src/index.js',
	// module (I know it's a bit weird to have module.exports.module) is where we
	// define all the rules for how webpack will deal with thing.
	module: {
		// rules takes an array, each item containing the respective rules
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /public/],
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},

			// {
			// 	// I haven't used SCSS in the base example, but it's here for you if you
			// 	// want! If you want to use CSS, you can change this next like's regex to
			// 	// /\.(css|scss)$/ or even just /\.css$/
			// 	test: /\.scss$/,
			// 	use: [
			// 		// These three libraries are commonly used together to turn Sass into
			// 		// CSS, then be able to load the CSS directly with imports. From there
			// 		// It gets put in the DOM for you.
			// 		{ loader: 'style-loader' },
			// 		{ loader: 'css-loader' },
			// 		{ loader: 'sass-loader' },
			// 	],
			// },
			{
				// Some image formats so you can import images
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
	// Here we define explicitly the file types we intend to deal with
	resolve: {
		extensions: [
			'.scss',
			'.js',
			'.jsx',
			'.json',
			'.png',
			'.gif',
			'.jpg',
			'.svg',
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					warnings: false,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					output: null,
					toplevel: true,
					nameCache: null,
					ie8: false,
					keep_fnames: false,
				},
			}),
		],
	},
	output: {
		path: path.resolve(__dirname, 'build/'),
		filename: 'beans.min.js',
		libraryTarget: 'umd',
	},
};
