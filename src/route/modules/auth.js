const TheAuth = () => import('_views/the-auth')
const TheLogin = () => import('_views/the-auth/the-login')
const TheRegister = () => import('_views/the-auth/the-register')
export default {
  path: '/auth',
  name: 'auth',
  component: TheAuth,
  redirect: '/login',
  children: [
    {
      name: 'login',
      path: 'login',
      component: TheLogin,
      meta: {
        title: '欢迎登录'
      }
    },
    {
      name: 'register',
      path: 'register',
      component: TheRegister,
      meta: {
        title: '欢迎注册'
      }
    }
  ]
}
