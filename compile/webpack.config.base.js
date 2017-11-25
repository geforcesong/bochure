const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');

module.exports = function (isDev) {
    return {
        entry: {
            home: [
                './web/views/home/client/ts/_homeController.ts'
            ]
        },
        output: {
            path: path.resolve(__dirname, '..', 'public'),
            filename: `[name].${pkg.version}.js`,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: !isDev
                            }
                        }, {
                            loader: 'sass-loader'
                        }]
                    })
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new ExtractTextPlugin({
                filename: `styles.${pkg.version}.css`,
                disable: false
            }),
            new Webpack.HotModuleReplacementPlugin(),
            new Webpack.NamedModulesPlugin(),
            new Webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                Popper: 'popper.js'
            })
        ]
    };
}