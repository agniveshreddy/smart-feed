const path = require('path');

module.exports = {
    entry: ['webpack/hot/dev-server' , './src'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'smart-feed.bundle.js'
    },
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      open:true,
      hot: true,
      inline: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000
    },
    resolve: {
        alias: {
          sagas: path.resolve(__dirname, 'src/sagas'),
          reducers: path.resolve(__dirname, 'src/reducers'),
          services: path.resolve(__dirname, 'src/services'),
          actions: path.resolve(__dirname, 'src/actions'),
          store: path.resolve(__dirname, 'src/store'),
          components: path.resolve(__dirname, 'src/components'),
          routes: path.resolve(__dirname, 'src/routes'),
          api: path.resolve(__dirname, 'src/api'),
          resources: path.resolve(__dirname, 'public'),
        }
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /(\.s(a|c)ss$)|css/,
          exclude: /(node_modules)/,
          use:[
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    }
  };