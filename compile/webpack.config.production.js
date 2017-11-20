const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const Webpack = require('webpack');

module.exports = merge(base(false), {
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
