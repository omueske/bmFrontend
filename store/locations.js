import vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  currentLocation: String,
  locationList: []
})

export const mutations = {
  SET_LOCATION_LIST(state, locations) {
    console.log(locations)
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
    console.log('IM STORE')
    await this.$axios.get('/api/locations').then((res) => {
      if (res.status === 200) {
        commit('SET_LOCATION_LIST', res.data)
      } else {
        console.log(res.status)
      }
    })
  },
  async addLocation({ commit }, payload) {
    console.log('Add Loc Store')
    await this.$axios.post('/api/locations', payload).then((res) => {
      if (res.status === 200) {
        commit('ADD_LOCATION', payload)
      } else {
        console.log(res.status)
      }
    })
  },
  async getAllHivesFromLocation(locationID) {
    let beeHiveList = []
    console.log('Given: ' + locationID)
    console.table(locationID)
    for (location in state.locationList) {
      console.log('locID: ' + location.id + ' lID: ' + locationID)
      if (location._id == locationID) {
        for (hive in location.hives) {
          const hive = await this.$axios.get(`/api/beeHives/${hive.beeHiveID}`)
          console.table(hive)
          beeHiveList.push(hive)
        }
      }
    }
    console.log(beeHiveList)
    return beeHiveList
  }
}
