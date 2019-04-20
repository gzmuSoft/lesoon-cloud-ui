import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createVuexAlong from 'vuex-along'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createVuexAlong({
      name: 'lesson-cloud'
    })
  ]
})

export default store
