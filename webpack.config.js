var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css!sass?sourceMap'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.ejs'),
            title: 'React Template'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};