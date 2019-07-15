const path = require('path');

const merge = require('webpack-merge');

const ZipPlugin = require('zip-webpack-plugin');
// 清除目录等
const cleanWebpackPlugin = require('clean-webpack-plugin');
// 4.x之后用以压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// 4.x之后提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfigBase = require('./webpack.base.conf');
const pkg = require('../package.json');
const isProduction = process.env.NODE_ENV === 'production';

const webpackConfigProd = {
    mode: 'production', // 通过 mode 声明生产环境
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 打包多出口文件
        filename: '[name].js',
        publicPath: './',
    },
    devtool: 'none',
    plugins: [
        //删除dist目录
		new cleanWebpackPlugin({
			verbose: !isProduction, //开启在控制台输出信息
			// dry Use boolean "true" to test/emulate delete. (will not remove files).
			// Default: false - remove files
			dry: false,
		}),
		//压缩css
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		//上线压缩 去除console等信息webpack4.x之后去除了webpack.optimize.UglifyJsPlugin
		//https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
		new UglifyJSPlugin(),
		new MiniCssExtractPlugin({
			filename: './[name].min.css',
		}),
		new ZipPlugin({
			filename: `${pkg.name}_${pkg.version}.zip`,
		}),
    ],
    module: {
        rules: []
    },
}

if (process.env.npm_config_report) { // 打包后模块大小分析//npm run build --report
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(webpackConfigBase, webpackConfigProd);
