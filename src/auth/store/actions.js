import Vue from 'vue'
import iView from 'iview'
import { oauthToken } from '_common/api/oauth'
import { Base64 } from 'js-base64'
Vue.use(iView)

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
  }
}

export default actions
