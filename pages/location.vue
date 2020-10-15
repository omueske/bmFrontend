<template>
  <div>
    <h1>Standort</h1>
    <b-button pill variant="outline-secondary" v-b-modal.add-location-modal
      >Neuer Standort</b-button
    >
    <AddLocationModal id="add-location-modal" />
    <div v-for="location in locationList" :key="location.id">
      <LocationBox :location="location" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LocationBox from '~/components/molecules/LocationBox.vue'
import AddLocationModal from '~/components/molecules/AddLocationModal.vue'
export default {
  components: {
    LocationBox
  },
  async asyncData({ data, store }) {
    store.dispatch('locations/loadLocations').catch((e) => {
      console.log(e)
    })
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      currentLocation: (state) => state.locations.currentLocation
    })
  },
  methods: {
    ...mapActions('locations', ['loadLocations'])
  },
  create() {
    this.loadLocations()
  }
}
</script>
