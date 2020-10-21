import vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  currentLocation: String,
  locationList: []
})

export const mutations = {
  SET_LOCATION_LIST(state, locations) {
    state.locationList = locations
  },

  SET_CURRENT_LOCATION(state, location) {
    state.currentLocation = location.locid
  },

  ADD_LOCATION(state, loc) {
    state.locationList.push(loc)
  }

  // DELETE_LOCATION(state, location) {
  //   const delLocation = state.locationList.findIndex(x => x._id === location)
  //   state.locationList.splice(delLocation, 1)
  // }
}
export const actions = {
  async loadLocations({ commit }) {
    await this.$axios.get('/api/locations').then((res) => {
      if (res.status === 200) {
        commit('SET_LOCATION_LIST', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addLocation({ commit }, payload) {
    await this.$axios.post('/api/locations', payload).then((res) => {
      if (res.status === 200) {
        commit('ADD_LOCATION', payload)
      } else {
        console.log(res.status)
      }
    })
  }
}
