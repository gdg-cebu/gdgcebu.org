const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isProdEnv = process.env.NODE_ENV === 'production';

const webpackConfig = {
    entry: path.resolve(__dirname, 'source/index.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/',
        chunkFilename: '[name].js'
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
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 1024 * 10, // 10 KB
                name: '[name].[ext]'
            }
        } ]
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'source'),
            images: path.resolve(__dirname, 'source/static/images')
        }
    },

    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'source/index.html')
        }),

        new CopyWebpackPlugin([{
            from: 'source/static/images/events',
            to: 'static/images/events'
        }])
    ]
};

module.exports = webpackConfig;
