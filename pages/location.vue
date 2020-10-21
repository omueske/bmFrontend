<template>
  <div>
    <h1>Standort</h1>
    <b-button pill variant="outline-secondary" v-b-modal.add-location-modal
      >Neuer Standort</b-button
    >
    <LocationTable />
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
import LocationTable from '~/components/molecules/LocationTable.vue'
export default {
  components: {
    LocationBox,
    LocationTable
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
  },
  created: function () {
    this.loadLocations()
    this.loadBeeHives()
  }
}
</script>
