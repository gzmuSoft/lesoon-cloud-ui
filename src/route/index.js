import Vue from 'vue'
import Router from 'vue-router'
import { whiteRoutes } from './router'
import iView from 'iview'
import { setTitle } from '_utils/util'
import store from '_store'
// import store from '_store'
Vue.use(iView)
Vue.use(Router)

iView.LoadingBar.config({
  height: 3
})

const router = new Router({
  mode: 'history',
  routes: whiteRoutes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 所有的路由必须有name 利用name做路由认证
  if (to.name === null) {
    if (store.getters['auth/isAuth']) {
      if (!store.getters['router/hasGetRules']) {
        store.dispatch('auth/oauthMe').then(me => {
          // 得到的结果包含用户信息和路由规则
          let rules = me.rules
          store.dispatch('router/concatRoutes', rules).then(routers => {
            // 获取拼接完成的结果，动态添加到路由中去
            router.addRoutes(routers)
            next({ ...to, replace: true })
          })
        }).catch(() => {
          // 拉取权限失败 前往错误页面
          next({ name: 'error' })
        })
      } else {
        // 已登陆并拉取权限表 前往错误页面
        next({ name: 'error' })
      }
    } else {
      // 未登录 前往登陆页面
      next({ name: 'login' })
    }
  } else {
    console.log(to)
    setTitle(to.meta.title)
    next()
  }

  // 如果已经登录
  // if (store.getters['auth/isAuth']) {
  //   // 判断是否以及获取过了路由规则
  //   if (!store.state.router.hasGetRules) {
  //     // 如果没有获取过，就去触发 auth 的 获取用户信息的 action
  //     store.dispatch('auth/oauthMe').then(me => {
  //       // 得到的结果包含用户信息和路由规则
  //       let rules = me.rules
  //       // 拿到路由规则，去与公共路由进行合并，触发 action
  //       store.dispatch('router/concatRoutes', rules).then(routers => {
  //         // 获取拼接完成的结果，动态添加到路由中去
  //         router.addRoutes(routers)
  //         // 使用替换的方式进行替换
  //         next({ ...to, replace: true })
  //       }).catch(() => {
  //         // 异常处理
  //         next({ to: 'auth' })
  //       })
  //     })
  //   }
  // } else {
  //    next({ to: 'auth' })
  // }
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
