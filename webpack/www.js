var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var { VueLoaderPlugin } = require('vue-loader');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  mode: 'development',
  target: 'web',
  entry: {
    'www': './www/app.js'

  },
  output: {
    path: path.join(__dirname, '../dist/www'),
    //filename: '[name].[hash:8].js',
    filename: 'js/app.js',
    // publicPath: '../',
    //chunkFilename: '[name]-chunk.js',
    //sourceMapFilename: '[name].map'
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
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
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

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },



  devtool: '#source-map',
  // optimization:{
  //   splitChunks:{chunks: "all"}
  // },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"client"'
    }),



    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'www/index.html',
      hash: true,
      // chunks: ['www'],
      minify: {
        collapseWhitespace: true,
        // preserveLineBreaks: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true
      }

    }),



    new HtmlWebpackExternalsPlugin({
      // hash: true,
      externals: [
        {
          module: 'jquery',
          entry: 'https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.slim.min.js',
          global: 'jQuery'
        },
        {
          module: 'Popper',
          entry: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
        },
        {
          module: 'boostrap',
          entry: 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js'
        },
        {
          module: 'vue',
          global: 'Vue',
          entry: 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js'
        },
        {
          module: 'vue-router',
          global: 'VueRouter',
          entry: 'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js'
        },

        {
          module: 'vuex',
          global: 'Vuex',
          entry: 'https://cdn.jsdelivr.net/npm/vuex@3.3.0/dist/vuex.min.js'
        },

        {
          module: 'viralroll',              
          entry: 'https://cdn.viralroll.net/js/widget.js'
        },

        {

          module: 'css',
          entry: [
            // 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/morioh@1.0.9/dist/css/morioh.min.css',
           
            'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css',

          ],

        },


        // {
        //   module: 'fonts',
        //   entry: [
        //     'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css',
        //     // 'https://l.allcdn.org/fa/v5.12.2/css/fontawesome.min.css',
        //     // 'https://l.allcdn.org/fa/v5.12.2/css/regular.min.css'
        //     // 'https://cdn.jsdelivr.net/npm/@mdi/font@5.0.45/css/materialdesignicons.min.css'
        //   ],
        // },



      ]
    }),

    new MiniCssExtractPlugin({
      filename: 'css/app.css',
      allChunks: true
    }),


    new VueLoaderPlugin(),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),

  ],





}

