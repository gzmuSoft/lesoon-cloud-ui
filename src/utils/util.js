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
 * 简单的获取 url 后半部分，暂时用着
 *
 * @param link 链接
 * @returns {string} 结果
 */
export const getUrl = (link) => {
  return link.split('8080')[1]
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
/**
 * 跳转到管理员界面
 */
export const routeAdmin = () => {
  route.push('/admin')
}
