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
  // pages: getPages(),
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/'))
      .set('_components', resolve('src/components'))
      .set('_plugins', resolve('src/plugins'))
      .set('_api', resolve('src/api'))
      .set('_store', resolve('src/store'))
      .set('_route', resolve('src/route'))
      .set('_lib', resolve('src/lib'))
      .set('_utils', resolve('src/utils'))
      .set('_views', resolve('src/views'))
      .set('_assets', resolve('src/assets'))
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  },

  // 打包时不生成.map文件，即生产环境下css 分离文件，减少体积，加快速度
  productionSourceMap: false,

  // 跨域配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/theme/iview-variables.less')
      ]
    }
  }
}
/**
 * 多页面配置，方案调整，暂时废弃
 */
// function getPages () {
//   return {
//     auth: {
//       // entry for the page
//       entry: 'src/auth/main.js',
//       // the source template
//       template: 'public/index.html',
//       // output as dist/index.html
//       filename: 'auth.html',
//       title: 'auth'
//     },
//     home: {
//       entry: 'src/home/main.js',
//       template: 'public/index.html',
//       filename: 'index.html',
//       title: 'home'
//     },
//     management: {
//       entry: 'src/management/main.js',
//       template: 'public/index.html',
//       filename: 'management.html',
//       title: 'management'
//     }
//   }
// }
