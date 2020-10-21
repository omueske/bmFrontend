import vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  selectedLocation: String,
  locationList: []
})

export const mutations = {
  SET_LOCATION_LIST(state, locations) {
    state.locationList = locations
  },

  SET_SELECTED_LOCATION(state, locationId) {
    const loc = state.locationList.find(
      (location) => location._id === locationId
    )
    state.selectedLocation = loc
  },

  ADD_LOCATION(state, loc) {
    state.locationList.push(loc)
  },

  ADD_BEEHIVE_TO_LOCATION(state, payload) {
    locationIndex = state.locationList.findIndex(
      (loc) => loc._id === payload.locationId
    )
    state.locationlist[index].push(payload.beeHiveId)
  },
  DELETE_BEEHIVE_FROM_LOCATION(state, beeHive) {
    console.log(beeHive)
    console.log(state.locationList.length)
    const arrLen = state.locationList.length
    for (let i = 0; i < arrLen; i++) {
      console.log(i)
      const delBeeHive = state.locationList[i].hives.findIndex(
        (x) => x.beeHiveID == beeHive._id
      )
      console.log(delBeeHive)
      state.locationList[i].hives.splice(delBeeHive, 1)
    }
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
      if (res.status === 201) {
        commit('ADD_LOCATION', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addBeeHiveToLocation({ commit }, payload) {
    if (payload.locationId != null && payload.beeHiveId != 0) {
      commit('ADD_BEEHIVE_TO_LOCATION', payload)
    } else {
      return null
    }
  },
  async setSelectedLocation({ commit }, locationId) {
    commit('SET_SELECTED_LOCATION', locationId)
  },
  async deleteBeeHiveFromLocation({ commit }, payload) {
    console.log(payload)
    await this.$axios
      .put(`/api/locations/${payload.locationId}/unlink/${payload._id}}`)
      .then((res) => {
        if (res.status === 200) {
          commit('DELETE_BEEHIVE_FROM_LOCATION', payload)
        }
      })
  }
}
