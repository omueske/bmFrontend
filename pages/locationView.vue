<template>
  <div>
    <h1>Standort {{ selectedLocation.name }}</h1>
    Anzahl Völker: {{ getAllBeeHivesByLocId(selectedLocation._id).length }}
    <!-- <div v-if="currentBeeHive._id == null"> -->
    <div v-if="!Object.prototype.hasOwnProperty.call(currentBeeHive, '_id')">
      <AddBeeHiveModal
        v-model="showBeeHiveDetails"
        :id="selectedLocation._id"
      />
      <BeeHiveTable />
    </div>
    <div v-else>
      {{ currentBeeHive }}
      <b-button @click="setCurrentBeehive({})">
        zurück
      </b-button>
      <BeeHiveDetails />
      <BeeHiveDetailsLogs />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AddBeeHiveModal from '~/components/molecules/AddBeeHiveModal.vue'
import BeeHiveTable from '~/components/molecules/BeeHiveTable.vue'
import BeeHiveDetails from '~/components/organism/BeeHiveDetails.vue'
import BeeHiveDetailsLogs from '~/components/organism/BeeHiveDetailsLogs.vue'
export default {
  components: {
    AddBeeHiveModal,
    BeeHiveTable,
    BeeHiveDetails,
    BeeHiveDetailsLogs
  },
  data() {
    return {
      showBeeHiveDetails: false
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      selectedLocation: (state) => state.locations.selectedLocation,
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    }),
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeehive'])
    // isEmpty(obj) {
    //   for (var key in obj) {
    //     if (obj.hasOwnProperty(key)) return false
    //   }
    //   return true
    // }
  }
}
</script>
