<template
  ><div>
    <div v-if="!Object.prototype.hasOwnProperty.call(selectedLocation, '_id')">
      <h1>Standort</h1>
      <b-button pill v-b-modal.add-location-modal variant="outline-secondary"
        >Neuer Standort</b-button
      >
      <LocationTable />
      <AddLocationModal id="add-location-modal" />
    </div>
    <div v-else>
      <LocationDetails />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LocationDetails from '~/components/organism/LocationDetails.vue'
import AddLocationModal from '~/components/molecules/AddLocationModal.vue'
import LocationTable from '~/components/molecules/LocationTable.vue'
export default {
  components: {
    LocationTable,
    AddLocationModal,
    LocationDetails
  },

  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      selectedLocation: (state) => state.locations.selectedLocation,
      beeHiveList: (state) => state.beeHives.beeHiveList
    })
  },
  methods: {
    ...mapActions('locations', ['loadLocations', 'setSelectedLocation']),
    ...mapActions('beeHives', [
      'loadBeeHives',
      'setCurrentBeehive',
      'loadBeeHiveLogs'
    ])
  },
  mounted() {
    // To avoid loaded Hives and Locations when the page was allready loaded
    this.setSelectedLocation(null)
    this.setCurrentBeehive({})
    this.loadBeeHiveLogs(null)
  }
}
</script>
