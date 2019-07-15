const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const rules = require('./webpack.rules.conf.js');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [...rules],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
            'images': path.resolve('src/images'),
            'lib': path.resolve('src/lib'),
        },
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: true,
            hash: false, // 开启hash ? [hash]
            chunks: ['app', 'vendor'],
            minify: false,
        })
    ],
    optimization: {
    	splitChunks: {
    		cacheGroups: {
    			vendor: {
    				test: path.resolve(__dirname, '../node_modules'),
    				chunks: "initial", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
    				name: "vendor", //拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
    				minChunks: 1,
    				reuseExistingChunk: true,
    				enforce: true
    			}
    		}
    	}
    },
}