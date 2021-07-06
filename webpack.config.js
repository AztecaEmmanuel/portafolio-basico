const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|jpg)$/i,
                loader: "url-loader",
                options: {
                    outputPath: 'img/',
                    useRelativePath: true
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true,
                            url:true
                        }
                    },
                    {
                        loader : 'resolve-url-loader',
                        options: {
                            esModule:false
                        }
                    }, 
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true
                          }
                    }
            ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/i,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true
                        }
                    },
                    {
                
                        loader:'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                              quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: true,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                              quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/bundle.css'
        })
    ]
}