const TheAuth = () => import('_views/the-auth')
const TheLogin = () => import('_components/the-login')
const TheRegister = () => import('_components/the-register')
const TheFind = () => import('_components/the-find')
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
    },
    {
      name: 'find',
      path: 'find',
      component: TheFind,
      meta: {
        title: '找回密码'
      }
    }
  ]
}
