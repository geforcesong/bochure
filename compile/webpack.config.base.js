const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');

module.exports = function (isDev) {
    return {
        entry: {
            about: [
                './web/views/about/client/ts/_aboutController.ts'
            ],
            home: [
                './web/views/home/client/ts/_homeController.ts',
                './web/views/common/client/style/main.scss'
            ],
            admin: [
                './web/views/admin/client/ts/_adminController.ts',
                './web/views/admin/client/style/admin.scss'
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
                filename: `styles.[name].${pkg.version}.css`,
                disable: false,
                allChunks: true
            }),
            new Webpack.HotModuleReplacementPlugin(),
            new Webpack.NamedModulesPlugin(),
            new Webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new Webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                Popper: 'popper.js'
            })
        ]
    };
}