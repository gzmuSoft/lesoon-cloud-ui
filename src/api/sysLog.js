import axios from './index'
import { getUrl } from '_utils/util'
const SYS_LOGS = '/sysLogs'

/**
 * 获取所有日志
 *
 * @returns 响应
 */
export const getAll = () => {
  return axios.request({
    url: SYS_LOGS,
    method: 'get'
  })
}

/**
 * 删除指定链接
 *
 * @param link self 链接
 * @returns 响应
 */
export const deleteByLink = (link) => {
  return axios.request({
    url: getUrl(link),
    method: 'delete'
  })
}
