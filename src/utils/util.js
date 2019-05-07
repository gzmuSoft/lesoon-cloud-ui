import route from '_route'
export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

/**
 * 比较当前时间与指定的时间戳
 *
 * @param time 指定时间戳
 * @returns {boolean} 是否过期，true 过期，false 未过期
 */
export const isExpired = (time) => {
  return Math.round(new Date() / 1000) - time > 0
}
/**
 * 跳转到主页
 */
export const routeHome = () => {
  route.push('/')
}
/**
 * 跳转到登陆
 */
export const routeAuth = () => {
  route.push('/auth')
}
