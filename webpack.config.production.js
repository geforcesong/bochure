const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: [
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './dist/web/views/common/client/ts/_main.js',
            './web/views/common/client/style/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './web/views/common/_layout.pug',
            filename: '../web/views/common/layout.pug',
            filetype: 'pug'
        }),
        new HtmlWebpackPugPlugin(),
        new Webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            Popper: 'popper.js'
        })
    ]
};