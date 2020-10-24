<template>
  <div>
    <b-table
      :items="getAllBeeHivesByLocId(selectedLocation._id)"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(actions)="data">
        <BeeHiveDeleteHiveButton :id="data.item._id" />
      </template>
    </b-table>

    <!-- {{ beeHiveListByLoc }} -->

    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BeeHiveDeleteHiveButton from '~/components/atoms/beeHive/BeeHiveDeleteHiveButton'

export default {
  components: {
    BeeHiveDeleteHiveButton
  },
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
    ...mapGetters('beeHives', [
      'getBeeHiveIdByHiveId',
      'getAllBeeHivesByLocId'
    ]),
    beeHiveListByLoc() {
      if (
        this.selectedLocation.hives &&
        this.selectedLocation.hives.length > 0
      ) {
        let hives = []
        console.log(this.selectedLocation)
        // for (const hive of this.selectedLocation.hives) {
        //   console.log(hive)
        //   hives.push(this.getBeeHiveIdByHiveId(hive.beeHiveID))
        // }
        for (const lHive of this.selectedLocation.hives) {
          console.log(lHive)
          for (const hive of this.beeHiveList) {
            console.table(hive)
            if (hive._id == lHive.beeHiveID) {
              hives.push(hive)
            }
          }
        }
        return hives
      } else {
        return []
      }
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
