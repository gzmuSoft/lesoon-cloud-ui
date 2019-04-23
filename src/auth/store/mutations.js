const mutations = {
  OAUTH_PASSWORD (state, params) {
    console.log(params)
    state.token = params
  }
  // SET_USER (state, username) {
  //   state.username = username
  // },
  // LOGOUT (state) {
  //   state.token = null
  //   state.username = null
  // }
}

export default mutations
