import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueScrollTo from 'vue-scrollto'
import router from './route'
import store from './store'
import 'babel-polyfill'
import '_plugins/iview.js'
import 'animate.css'
import _ from 'lodash'

// import { WOW } from 'wowjs'
//
// new WOW({ live: false }).init()
Vue.prototype._ = _
Vue.use(VueParticles)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
