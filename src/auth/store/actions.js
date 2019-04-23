import Vue from 'vue'
import iView from 'iview'
import { oauthToken } from '_common/api/oauth'
Vue.use(iView)

const actions = {
  oauthPassword ({ commit, dispatch }, user) {
    dispatch('getToken', user).then(token => {
      commit('OAUTH_PASSWORD', token)
    })
  },
  getToken ({ commit }, user) {
    return oauthToken(user).then(res => (res.data))
  }
  // the-login ({ commit, dispatch }, user) {
  //   dispatch('getToken', user).then(token => {
  //     const params = new URLSearchParams()
  //     params.append('token', token)
  //     Vue.prototype.$apiAuth('/api/oauth/check_token', params).then(response => {
  //       commit('SET_USER', response.data.user_name)
  //       location.reload()
  //     }).catch((error) => {
  //       console.log('Get User Info Failed!' + error)
  //       Message.error('Get User Info Failed!')
  //     })
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //   // Vue.prototype.$apiAuth('/api/oauth/check_token').then(response => {
  //   //   console.log(response)
  //   // })
  // },
  // getToken ({ commit }, user) {
  //   return new Promise((resolve, reject) => {
  //     const params = new URLSearchParams()
  //     params.append('scope', 'all')
  //     params.append('grant_type', 'password')
  //     params.append('username', user.username)
  //     params.append('password', user.password)
  //     Vue.prototype.$apiAuth('/api/oauth/token', params).then(response => {
  //       Message.success('Login success')
  //       commit('LOGIN', response.data)
  //       resolve(response.data.access_token)
  //     }).catch((error) => {
  //       reject(error)
  //     })
  //   })
  // },
  // logout ({ commit }) {
  //   commit('LOGOUT')
  //   Message.success('Logout success')
  // }
}

export default actions
