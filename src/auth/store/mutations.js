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
    state.username = null
  }
}

export default mutations
