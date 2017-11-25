const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base(false), {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
