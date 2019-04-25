import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'
import { setTitle } from '_utils/util'
// import { toHome } from '_api/comm'
// import store from '_store'
Vue.use(iView)
Vue.use(Router)

iView.LoadingBar.config({
  height: 3
})

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // if (store.getters.isAuth) {
  //  toHome()
  // }
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
