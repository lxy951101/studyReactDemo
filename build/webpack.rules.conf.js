const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const rules = [{
        test: /\.(css|scss)$/,
        use: [{
                loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer'),
                    ],
                },
            },
            'sass-loader',
        ],
    },
    {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ],
                plugins: [
                    [
                        "@babel/plugin-transform-runtime",
                    ],
                    'lodash',
                ],
            },
        }, ],
        exclude: '/node_modules/',
    },
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 5 * 1024,
                name: '[name].[hash:8].[ext]',
                outputPath: 'images',
            },
        }, ],
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            outputPath: 'fonts',
        },
    },
];

module.exports = rules;