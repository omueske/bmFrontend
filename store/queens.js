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
  },
  DELETE_QUEEN(state, payload) {
    const delQueen = state.queenList.findIndex((x) => x._id === payload)
    state.queenList.splice(delQueen, 1)
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
  },
  async deleteQueen({ commit }, payload) {
    await this.$axios.delete(`/api/queens/${payload}`).then((res) => {
      if (res.status == 200) {
        commit('DELETE_QUEEN', payload)
      } else {
        console.log(res.status)
      }
    })
  }
}
export const getters = {
  getQueensByHiveId: (state) => (id) => {
    // Todo: Statement returns queen instead of hive
    const q = state.queenList.find((queen) => queen._id === id)

    // In Loadingphase of the Page, at can be that the getter is called before the store is filled.
    // Then it will be come to an error
    // So lets check if hives are loaded... if not set an dummy value
    if (q == null) {
      return { number: 'not set' }
    } else {
      // return state.beeHiveList.find((beeHiveId) => beeHiveId._id === id)
      return q
    }
  },
  getQueenById: (state) => (id) => {
    const q = state.queenList.find((queen) => queen._id === id)
    if (q == null) {
      return { number: 'not set' }
    } else {
      // return state.beeHiveList.find((beeHiveId) => beeHiveId._id === id)
      return q
    }
  }
}
