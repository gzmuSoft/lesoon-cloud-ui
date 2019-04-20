const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pages: getPages(),
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/'))
      .set('_auth', resolve('src/auth'))
      .set('_common', resolve('src/common'))
      .set('_home', resolve('src/home'))
      .set('_management', resolve('src/management'))
  },

  // 打包时不生成.map文件，即生产环境下css 分离文件，减少体积，加快速度
  productionSourceMap: false,

  // 跨域配置
  devServer: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:8000',
    //       changeOrigin: true,
    //       ws: true,
    //       pathRewrite: {
    //         '^/api': ''
    //       }
    //     }
    //   },
    disableHostCheck: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/styles/theme/global.less')
      ]
    }
  }
}
/**
 * 多页面配置
 */
function getPages () {
  return {
    auth: {
      // entry for the page
      entry: 'src/auth/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'login.html'
    },
    home: {
      entry: 'src/home/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    management: {
      entry: 'src/management/main.js',
      template: 'public/index.html',
      filename: 'management.html'
    }
  }
}
