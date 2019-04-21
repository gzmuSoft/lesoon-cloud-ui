import axios from 'axios'
import { baseURL } from '../config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    console.log(this.baseUrl)
    // 请求队列
    this.queue = {}
  }
  /**
   * 请求的全局配置
   *
   * @returns {{headers: {}, baseURL: *}}
   */
  getGlobalConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  /**
   * 队列销毁
   *
   * @param url
   */
  distory (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      //
    }
  }

  /**
   * 拦截器
   *
   * @param instance 实例
   * @param url
   */
  interceptors (instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      if (Object.keys(this.queue).length) {
        //
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      this.distory(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.distory(url)
      return Promise.reject(error)
    })
  }

  /**
   * 创建请求实例
   *
   * @param options 请求参数
   * @returns {*} 结果
   */
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getGlobalConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
