import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'

Vue.use(iView)
Vue.use(Router)

iView.LoadingBar.config({
  height: 3
})

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const state = JSON.parse(localStorage.getItem('lesson-cloud'))['lesson-cloud']
  if (state.token != null) {
    window.location.href = 'index.html'
  }
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
