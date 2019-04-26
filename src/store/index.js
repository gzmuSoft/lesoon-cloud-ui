import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import auth from './modules/auth'
import router from './modules/router'
// import createVuexAlong from 'vuex-along'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // plugins: [
  //   createVuexAlong({
  //     name: 'lesson-cloud'
  //   })
  // ],
  modules: {
    auth,
    router
  }
})

export default store
