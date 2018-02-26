const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProdEnv = process.env.NODE_ENV === 'production';

const webpackConfig = {
    entry: path.resolve(__dirname, 'source/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js',
        publicPath: '/',
        chunkFilename: '[name].[ext]'
    },
    mode: process.env.NODE_ENV || 'development',
    devtool: isProdEnv ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 1024 * 10 // 10 KB
            }
        } ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'source/index.html')
        })
    ]
};

module.exports = webpackConfig;
