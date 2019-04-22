import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
// import { setTitle } from '_common/utils/util.js'

Vue.use(Router)
const router = new Router({
  routes
})

// const HAS_LOGIN = false
/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
  // 路由元信息
  // to.meta && setTitle(to.meta.title)
  // 传递一个回调函数
  // to 即将跳转的路由对象，from 即将离开的路由对象， next 函数跳转到指定路由
  // if (to.name !== 'login') {
  // 如果跳转的不是登录页面，判断是否已经登录
  // 如果已登录，就继续
  // if (HAS_LOGIN) next()
  // 如果没有登录，就跳转到登录页面，
  // else next({ name: 'the-login' })
  // } else {
  // 如果跳转的已经是登录页面 判断是否已经登录
  // 如果已经登录，就不让他跳转到登录页面了
  // if (HAS_LOGIN) next({ name: 'home' })
  // 如果没有登录，就继续让他登录
  // else next()
  // }
  // console.log(HAS_LOGIN)
  next()
})

/**
 * 跳转后置钩子
 */
router.afterEach((to, from) => {
  //
})

/**
 * 导航被确认之前
 * 所有组件内守卫
 * 和异步路由组件之后
 */
router.beforeResolve((to, from) => {
  //
})

/**
 * 路由钩子触发规则
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

// 创建路由实例
export default router
