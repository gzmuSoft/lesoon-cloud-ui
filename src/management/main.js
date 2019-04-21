import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import 'babel-polyfill'
import '_common/plugins/iview.js'
import Bus from '_common/lib/bus.js'
if (process.env.NODE_ENV !== 'prod') require('_common/mock')
Vue.config.productionTip = false
// bus 组件之间通信
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
