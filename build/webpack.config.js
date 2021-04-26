const paths = require('./paths')

function webpackConfig() {
  return {
    mode: 'development',
    entry: paths.entryPath,
    output: {
      path: paths.outputPath,
      filename: paths.outputFilename,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|webp)$/,
          type: 'asset'
        },
        {
          test: /\.(css|less)$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.jsx?/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }
}

module.exports = webpackConfig()
