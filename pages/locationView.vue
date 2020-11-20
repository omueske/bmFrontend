<template>
  <div>
    <h1>Standort {{ selectedLocation.name }}</h1>
    Anzahl Völker: {{ getAllBeeHivesByLocId(selectedLocation._id).length }}
    <div v-if="currentBeeHive._id == null">
      <AddBeeHiveModal
        v-model="showBeeHiveDetails"
        :id="selectedLocation._id"
      />
      <BeeHiveTable />
    </div>
    <div v-else>
      Was ganz anderes :-)
      <b-button @click="unsetCurrentBeeHive()">
        <b-icon icon="eye" aria-hidden="true" />
      </b-button>
      {{ currentBeeHive }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
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
      selectedLocation: (state) => state.locations.selectedLocation,
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    }),
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeehive']),
    toggleHiveDetails() {
      if (this.showBeeHiveDetails) {
        this.showBeeHiveDetails = false
      } else {
        this.showBeeHiveDetails = true
      }
    },
    unsetCurrentBeeHive() {
      console.log('blubb')
      this.setCurrentBeehive({})
    }
  }
}
</script>
