import auth from './modules/auth'
import home from './modules/home'
import exception from './modules/exception'

export const routeMap = [
  home
]

// 不需要认证的公共路由，目前没有，所以先假设 home 需要认证
export const whiteRoutes = [
  auth, exception
]
