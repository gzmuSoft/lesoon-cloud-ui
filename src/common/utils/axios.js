// import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import store from '@/store'

axios.interceptors.request.use(function (config) {
  // 请求成功
  return config
}, function (error) {
  // 请求错误时弹框提示，或做些其他事
  return Promise.reject(error)
})

// 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
  // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 封装数据返回失败提示函数---------------------------------------------------------------------------
function errorState (status, response) {
  // 如果http状态码正常，则直接返回数据
  switch (status) {
    case 400:
      console.error(status + '请求参数错误：' + response.error + '——' + response.error_description)
      break
    case 401:
      break
  }
  // if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
  //   // 如果不需要除了data之外的数据，可以直接 return response.data
  //   return response
  // } else {
  //   console.log(response)
  //   Message.closeAll()
  //   Message.error('数据获取错误')
  // }
}

// 封装数据返回成功提示函数---------------------------------------------------------------------------
function successState (res) {
  // 隐藏loading
  // 统一判断后端返回的错误码(错误码与后台协商而定)
  if (res.data.code === '000000') {
    return res
  }
}

// 封装axios--------------------------------------------------------------------------------------
function apiAxios (method, url, params) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token
  let httpDefault = {
    method: method,
    url: '/api' + url,
    header: {
      'Authorization': 'Bearer ' + store.state.token
    },
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method !== 'POST' && method !== 'PUT' && method !== 'PATCH' ? params : null,
    data: method === 'POST' || method === 'PUT' || method === 'PATCH' ? params : null,
    timeout: 10000
  }
  return axiosRequest(httpDefault)
}

function apiAuth (url, params) {
  let httpDefault = {
    method: 'POST',
    url: url,
    data: params,
    timeout: 10000,
    headers: oauthClient()
  }
  return axiosRequest(httpDefault)
}

function oauthClient () {
  return {
    'Authorization': 'Basic aG9tZXdvcms6aG9td29ya193ZWJfc2VjcmV0',
    'Content-Type': 'application/x-www-form-urlencoded',
    'withCredentials': true
  }
}

function axiosRequest (httpDefault) {
  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((res) => {
        successState(res)
        resolve(res)
      }).catch((error) => {
        errorState(error.response.status, error.response.data)
        reject(error)
      })
  })
}

// 输出函数getAxios、postAxios、putAxios、delectAxios，供其他文件调用-----------------------------
// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
export default {
  install: function (Vue) {
    Vue.prototype.$getAxios = (url, params) => apiAxios('GET', url, params)
    Vue.prototype.$postAxios = (url, params) => apiAxios('POST', url, params)
    Vue.prototype.$putAxios = (url, params) => apiAxios('PUT', url, params)
    Vue.prototype.$deleteAxios = (url, params) => apiAxios('DELETE', url, params)
    Vue.prototype.$patchAxios = (url, params) => apiAxios('PATCH', url, params)
    Vue.prototype.$apiAuth = (url, params) => apiAuth(url, params)
  }
}
