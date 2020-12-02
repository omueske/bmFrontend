export const state = () => ({
  queenList: [],
  currentQueen: {}
})

export const mutations = {
  SET_QUEEN_LIST(state, queens) {
    state.queenList = queens
  },
  ADD_QUEEN(state, queen) {
    state.queenList.push(queen)
  }
}
export const actions = {
  async loadQueens({ commit }) {
    await this.$axios.get('/api/queens').then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        commit('SET_QUEEN_LIST', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addQueen({ commit }, payload) {
    await this.$axios.post('/api/queens', payload).then((res) => {
      if (res.status == 201) {
        commit('ADD_QUEEN', payload)
      } else {
        console.log(res.status)
      }
    })
  }
}
