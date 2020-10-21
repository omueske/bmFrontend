<template>
  <div>
    <h1>Standort {{ selectedLocation.name }}</h1>
    Anzahl Völker: {{ selectedLocation.hives.length }}

    <BeeHiveTable />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BeeHiveTable from '~/components/molecules/BeeHiveTable.vue'
export default {
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      selectedLocation: (state) => state.locations.selectedLocation
    })
  }
}
</script>