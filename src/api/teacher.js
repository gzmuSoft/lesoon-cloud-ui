import axios from './index'
import { getUrl } from '_utils/util'
const TEACHERS = '/teachers'

/**
 * 请一定写注释！格式和这个类似！
 * 获取所有教师
 *
 * @returns 响应
 */
export const getAll = () => {
  return axios.request({
    url: TEACHERS,
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
 * 添加一个教师
 *
 * @param teacher 教师
 * @returns {*} 结果
 */
export const addOne = (teacher) => {
  return axios.request({
    url: TEACHERS,
    method: 'post',
    data: teacher
  })
}

/**
 * 更新一个教师
 *
 * @param teacher 教师
 * @returns {*} 请求结果
 */
export const putOne = (teacher) => {
  return axios.request({
    url: TEACHERS,
    method: 'put',
    data: teacher
  })
}
