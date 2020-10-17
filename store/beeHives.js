import vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  currentBeeHive: String,
  beeHiveList: []
})

export const mutations = {
  SET_BEEHIVE_LIST(state, beeHives) {
    console.log(beeHives)
    state.beeHive = beeHives
  },

  SET_CURRENT_BEEHIVE(state, beeHive) {
    state.currentLocation = beeHive.locid
  },

  ADD_BEEHIVE(state, beeHive) {
    state.beeHiveList.push(beeHive)
  }

  // DELETE_LOCATION(state, beeHive) {
  //   const delLocation = state.locationList.findIndex(x => x._id === location)
  //   state.locationList.splice(delLocation, 1)
  // }
}
export const actions = {
  async loadBeeHives({ commit }) {
    console.log('IM STORE BH')
    await this.$axios.get('/api/beeHives').then((res) => {
      if (res.status === 200) {
        commit('SET_BEEHIVE_LIST', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addBeeHive({ commit }, payload) {
    console.log('Add BeeHive Store')
    await this.$axios.post('/api/beeHives', payload).then((res) => {
      if (res.status === 201) {
        commit('ADD_BEEHIVE', payload)
        console.log(res)
        return res.data
      } else {
        console.log(res.status)
      }
    })
  }
}
