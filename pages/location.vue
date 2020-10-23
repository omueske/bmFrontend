<template>
  <div>
    <h1>Standort</h1>
    <b-button pill v-b-modal.add-location-modal variant="outline-secondary"
      >Neuer Standort</b-button
    >
    <LocationTable />
    <AddLocationModal id="add-location-modal" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddLocationModal from '~/components/molecules/AddLocationModal.vue'
import LocationTable from '~/components/molecules/LocationTable.vue'
export default {
  components: {
    LocationTable,
    AddLocationModal
  },

  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      currentLocation: (state) => state.locations.currentLocation,
      beeHiveList: (state) => state.beeHives.beeHiveList
    })
  },
  methods: {
    ...mapActions('locations', ['loadLocations']),
    ...mapActions('beeHives', ['loadBeeHives'])
  }
}
</script>
