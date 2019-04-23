import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'
import { routeHome } from '_common/api/comm'
import store from '_auth/store'
Vue.use(iView)
Vue.use(Router)

iView.LoadingBar.config({
  height: 3
})

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (store.getters.isAuth) {
    routeHome()
  }
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
