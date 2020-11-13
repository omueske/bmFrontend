// import vuex from 'vuex'
// import axios from 'axios'

export const state = () => ({
  configuration: Object
})

export const mutations = {
  SET_CONFIGURATION(state, configuration) {
    state.configuration = configuration
  }
}
export const actions = {
  async loadConfiguration({ commit }) {
    await this.$axios.get('/api/configurations').then((res) => {
      if (res.status === 200) {
        console.log(res.data[0])
        commit('SET_CONFIGURATION', res.data[0])
      } else {
        console.log(res.status)
      }
    })
  }
}
