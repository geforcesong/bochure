const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    entry: './dist/web/views/common/public/ts/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './web/views/common/_layout.pug',
            filename: '../web/views/common/layout.pug',
            filetype: 'pug'
        }),
        new HtmlWebpackPugPlugin()
    ]
};
