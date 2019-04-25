import Vue from 'vue'
import iView from 'iview'
import { oauthToken } from '_api/oauth'
import { Base64 } from 'js-base64'

Vue.use(iView)
const state = {
  user: null,
  token: null
}
const getters = {
  isAuth: state => {
    return state.token !== null
  }
}
const mutations = {
  SET_TOKEN (state, params) {
    state.token = params
  },
  // to-do set user data
  // SET_USER (state, username) {
  //   state.username = username
  // },

  // logout
  LOGOUT (state) {
    state.token = null
    state.user = null
  }
}
const actions = {
  oauthLogin ({ commit, dispatch }, formUser) {
    formUser.password = Base64.encode(formUser.password)
    return new Promise((resolve, reject) => {
      oauthToken(formUser).then(res => {
        let token = res.data
        if (token !== null) {
          commit('SET_TOKEN', token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout ({ commit }) {
    commit('LOGOUT')
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
