const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    entry: {
        bundle: [
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './dist/web/views/common/client/ts/_main.js',
            './web/views/common/client/style/main.scss'
        ],
        about: './web/views/about/client/ts/_aboutController.ts'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `[name].${pkg.version}.js`,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: false
                        }
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './package.json',
            to: path.resolve(__dirname, 'dist')
        }], { copyUnmodified: true }),
        new Webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
        new Webpack.optimize.CommonsChunkPlugin({ name: 'bundle', chunks: ['bundle'] }),
        new ExtractTextPlugin(`styles.${pkg.version}.css`),
        // new HtmlWebpackPlugin({
        //     template: './web/views/common/_layout.pug',
        //     filename: '../web/views/common/layout.pug',
        //     filetype: 'pug',
        //     inject: true,
        //     chunks: [
        //         'common', // 0
        //         'bundle' // 1
        //     ]
        // }),
        // new HtmlWebpackPugPlugin(),
        new Webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            Popper: 'popper.js'
        })
    ]
};
