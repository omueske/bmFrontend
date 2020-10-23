<template>
  <div>
    <b-table
      :items="locationList"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
      ><template v-slot:cell(actions)="data">
        <nuxt-link
          :to="{ path: 'locationView', query: { locationId: data.item._id } }"
          @click.native="testmethode(data.item._id)"
          >Click</nuxt-link
        >
        <LocationDeleteButton :id="data.item._id" />
      </template>
    </b-table>
    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LocationDeleteButton from '~/components/atoms/location/LocationDeleteButton'
export default {
  components: {
    LocationDeleteButton
  },
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: '_id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'address', label: 'Adresse', sortable: true },
        { key: 'createdAt', label: 'Erstellt am', sortable: true },
        { key: 'updatedAt', label: 'letztes Update', sortable: false },
        { key: 'actions', label: 'Aktionen', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList
    })
  },
  methods: {
    ...mapActions('locations', ['setSelectedLocation']),
    testmethode(locationId) {
      this.setSelectedLocation(locationId)
    }
  }
}
</script>