const path = require('path')
const fs = require('fs')

const appProcessPath = fs.realpathSync(process.cwd())

function paths() {
  return {
    entryPath: path.resolve(appProcessPath, 'src/main.jsx'),
    outputPath: path.resolve(appProcessPath, 'dist'),
    outputFilename: 'index.js'
  }
}

module.exports = paths()
