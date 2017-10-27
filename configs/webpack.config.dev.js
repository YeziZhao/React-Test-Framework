import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development')
};
export default {
    devtool: 'cheap-module-polyfill',
    entry: {  
        vendor: [
            'whatwg-fetch'
        ],
        index: [
            'babel-polyfill',
            'eventsource-polyfill', // necessary for hot reloading with IE
            'webpack-hot-middleware/client?reload=true',    // note that it reload the page it hot module reload    
            './src/index'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        // contentBase: './src',
        // compress: true,
        // port: 3000,
        // stats: 'erros-only',
        // open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   // enable HMR globally
        new webpack.NamedModulesPlugin(),   // prints more readable module names in the browser console on HMR updates
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['vendor', 'index'],
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name].[local]',  // [name]__[local]--[hash:base64:5] -> name: module name, local: original name
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