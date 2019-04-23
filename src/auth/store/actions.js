import Vue from 'vue'
import iView from 'iview'
import { oauthToken } from '_common/api/oauth'
Vue.use(iView)

const actions = {
  oauthLogin ({ commit, dispatch }, formUser) {
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
