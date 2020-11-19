<template>
  <div>
    <h1>Standort {{ selectedLocation.name }}</h1>
    Anzahl Völker: {{ getAllBeeHivesByLocId(selectedLocation._id).length }}
    <div v-if="showBeeHiveDetails">
      <AddBeeHiveModal
        v-model="showBeeHiveDetails"
        :id="selectedLocation._id"
      />
      <BeeHiveTable />
    </div>
    <div v-else>Was ganz anderes :-)</div>
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
  data() {
    return {
      showBeeHiveDetails: false
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      selectedLocation: (state) => state.locations.selectedLocation
    }),
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  },
  methods: {
    toggleHiveDetails() {
      if (this.showBeeHiveDetails) {
        this.showBeeHiveDetails = false
      } else {
        this.showBeeHiveDetails = true
      }
    }
  }
}
</script>
