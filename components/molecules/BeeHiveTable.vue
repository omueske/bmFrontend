<template>
  <div>
    <b-table
      :items="beeHiveListByLoc"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
    </b-table>
    {{ beeHiveListByLoc }}

    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fields: [
        { key: '_id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'buildType', label: 'Rähmchenmaß', sortable: true },
        { key: 'number', label: 'Nummer', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'createdAt', label: 'Erstellt am', sortable: true },
        { key: 'updatedAt', label: 'letztes Update', sortable: false },
        { key: 'actions', label: 'Aktionen', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList,
      selectedLocation: (state) => state.locations.selectedLocation
    }),
    ...mapGetters('beeHives', ['getBeeHiveIdByHiveId']),
    beeHiveListByLoc() {
      let hives = []
      for (const hive of this.selectedLocation.hives) {
        console.log(hive)
        hives.push(this.getBeeHiveIdByHiveId(hive.beeHiveID))
      }
      return hives
    }
  },
  methods: {
    ...mapActions('locations', ['setSelectedLocation']),
    testmethode(locationId) {
      this.setSelectedLocation(locationId)
    }
  }
}
</script>