require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
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
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                NODE_ENV: process.env.NODE_ENV,
                BASE_URL: process.env.BASE_URL,
                CLOUDINARY_BASE_URL: process.env.CLOUDINARY_BASE_URL
            })
        }),

        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'source/index.html')
        }),

        new CopyWebpackPlugin([{
            from: 'source/static/images/events',
            to: 'static/images/events'
        }, {
            from: 'source/static/images/team',
            to: 'static/images/team'
        }, {
            from: 'source/static/images/favicon.png',
            to: 'static/images/favicon.png'
        }, {
            from: 'source/static/images/social-share.jpg',
            to: 'static/images/social-share.jpg'
        }]),

        new ImageminWebpackPlugin()
    ]
};

module.exports = webpackConfig;
