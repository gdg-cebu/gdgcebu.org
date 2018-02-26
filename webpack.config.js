const path = require('path');

const isProdEnv = process.env.NODE_ENV === 'production';

const webpackConfig = {
    entry: path.resolve(__dirname, 'source/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js',
        publicPath: '/',
        chunkFilename: '[name].[ext]'
    },
    devtool: isProdEnv ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        } ]
    }
};

module.exports = webpackConfig;
