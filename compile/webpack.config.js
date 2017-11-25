const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const setting = require('../system.config.json');

module.exports = merge(base(true), {
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: setting.server.devServerPort
    }
});
