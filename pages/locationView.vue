<template>
  <div>
    <h1>Standort {{ selectedLocation.name }}</h1>
    Anzahl Völker: {{ getAllBeeHivesByLocId(selectedLocation._id).length }}
    <AddBeeHiveModal :id="selectedLocation._id" />
    <BeeHiveTable />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AddBeeHiveModal from '~/components/molecules/AddBeeHiveModal.vue'
import BeeHiveTable from '~/components/molecules/BeeHiveTable.vue'
export default {
  components: {
    AddBeeHiveModal,
    BeeHiveTable
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      selectedLocation: (state) => state.locations.selectedLocation
    }),
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  }
}
</script>
