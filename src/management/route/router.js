import Home from '../views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '管理'
    },
    beforeEnter: (to, from, next) => {
      // 路由独享守卫
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '测试'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
