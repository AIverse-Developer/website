/*
 * vue.config
 * @author maybe
 */
const path = require('path');
// const fs = require('fs')
const resolve = dir => {
  return path.join(__dirname, dir)
}


// const BASE_URLS = process.env.NODE_ENV === 'production'
//     ? '/h5'
//     : '/';
module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value，.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  },
  assetsDir: 'static', 
  productionSourceMap: false,
  outputDir: 'dist',

  devServer: {
    proxy: {
      "/api": {
        target: "",
        ws: true,
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        }, 
      },
    },
  },
  
  lintOnSave: process.env.NODE_ENV !== 'production',
  // lintOnSave: false,
  configureWebpack: {
    externals: {
      'echarts': 'echarts'
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",

        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}
