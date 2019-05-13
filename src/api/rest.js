import axios from './index'
import { getUrl } from '_utils/util'

/**
 * 请一定写注释！格式和这个类似！
 * 获取所有资源
 *
 * @returns 响应
 */
export const getAll = (resource) => {
  return axios.request({
    url: `/${resource}`,
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

/**
 * 添加一个资源
 *
 * @param resource 资源名称
 * @param data 添加的数据
 * @returns {*} 结果
 */
export const addOne = (resource, data) => {
  return axios.request({
    url: `/${resource}`,
    method: 'post',
    data: data
  })
}

/**
 * 更新一个资源
 *
 * @param resource 资源名称
 * @param data 更新数据
 * @returns {*} 请求结果
 */
export const putOne = (resource, data) => {
  return axios.request({
    url: `/${resource}`,
    method: 'put',
    data: data
  })
}
