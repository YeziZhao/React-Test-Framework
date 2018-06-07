import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    devtool: 'source-map',
    entry: {
        index: [
            'whatwg-fetch',
            'babel-polyfill',
            './src/index'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, '../dist'),   // Note: Physical files are only output by the production build
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'notice list',
        //     minify: {
        //         collapseWhitespace: true,
        //         removeComments: true
        //     },
        //     hash: true,
        //     chunks: ['index'],
        //     filename: 'index.html',
        //     template: './src/index.html'
        // }),
        new HtmlWebpackPlugin({
            title: 'notice list',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/kr/oneapp/notice/pc/list/index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'notice compose',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/kr/oneapp/notice/pc/compose/index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'update list',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/kr/oneapp/update/pc/list/index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'update compose',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/kr/oneapp/update/pc/compose/index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'all update list',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/all/oneapp/update/pc/list/index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'all update compose',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: '/ncs/all/oneapp/update/pc/compose/index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]',  // [name]__[local]--[hash:base64:5] -> name: module name, local: original name
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};