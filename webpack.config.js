const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const config = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'index.html'
        })
    ],
    devServer: {
        port: 4444,
        historyApiFallback: true,
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx|)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};
module.exports = config;