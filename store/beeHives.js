import vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  currentBeeHive: String,
  beeHiveList: []
})

export const mutations = {
  SET_BEEHIVE_LIST(state, beeHives) {
    state.beeHiveList = beeHives
  },

  SET_CURRENT_BEEHIVE(state, beeHive) {
    state.currentBeeHive = beeHive._id
  },

  ADD_BEEHIVE(state, beeHive) {
    state.beeHiveList.push(beeHive)
  },

  DELETE_BEEHIVE(state, beeHiveId) {
    const delBeeHive = state.beeHiveList.findIndex((x) => x._id === beeHiveId)
    state.beeHiveList.splice(delBeeHive, 1)
  }
}
export const actions = {
  async loadBeeHives({ commit }) {
    await this.$axios.get('/api/beeHives').then((res) => {
      if (res.status === 200) {
        commit('SET_BEEHIVE_LIST', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addBeeHive({ commit }, payload) {
    // Add LocationID to Beehive
    payload.beeHive.locationId = payload.locationID
    await this.$axios.post('/api/beeHives', payload.beeHive).then((res) => {
      if (res.status == 201) {
        commit('ADD_BEEHIVE', payload)

        this.$axios
          .put(`/api/locations/${payload.locationID}/link/${res.data._id}`)
          .then((res) => {
            if (res.status !== 201) {
              console.log(res.status)
            }
          })
      } else {
        console.log(res.status)
      }
    })
  },
  async deleteBeeHive({ commit }, payload) {
    await this.$axios.delete(`/api/beeHives/${payload._id}`).then((res) => {
      if (res.status == 200) {
        commit('DELETE_BEEHIVE', payload)
      } else {
        console.log(res.status)
      }
    })
  }
  // addLocationIdToBeeHive({ commit }, payload) {
  //   commit('ADD_LOCATIONID_TO_BEEHIVE', payload)
  // }
}
export const getters = {
  getBeeHiveIdByHiveId: (state) => (id) => {
    const hive = state.beeHiveList.find((beeHive) => beeHive._id === id)

    // In Loadingphase of the Page, at can be that the getter is called before the store is filled.
    // Then it will be come to an error
    // So lets check if hives are loaded... if not set an dummy value
    if (hive == null) {
      return { number: 'not set' }
    } else {
      return state.beeHiveList.find((beeHiveId) => beeHiveId._id === id)
    }
  }
}
