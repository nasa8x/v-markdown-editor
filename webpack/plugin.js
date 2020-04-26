var path = require('path');
var webpack = require('webpack');

var { VueLoaderPlugin } = require('vue-loader');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {

    name: 'plugin',
    mode: 'development',
    target: 'web',
    devtool: '#source-map',
    entry: {
        'v-markdown-editor': './src/index.js',

    },
    output: {
        // libraryTarget: 'commonjs2',
        // libraryTarget: 'commonjs',
        libraryTarget: 'umd',
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        

    },
    module: {
        rules: [


            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        //presets: ['es2015', "stage-2"],
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    // other vue-loader options go here
                }
            },


            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: /node_modules/
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',

                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                        }
                    }
                ],
            },

            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },


        ]
    },
    //externals: [/^(?!\.|\/).+/i,],
    // externals: [nodeExternals()],
    plugins: [

        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            allChunks: true
        }),

        new OptimizeCssAssetsPlugin(),
        new VueLoaderPlugin(),
    ]
}