<template>
  <div>
    <b-table
      :items="locationList"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>
    {{ locationList }}

    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: '_id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'address', label: 'Adresse', sortable: true },
        { key: 'createdAt', label: 'Erstellt am', sortable: true },
        { key: 'updatedAt', label: 'letztes Update', sortable: false }
      ]
      // items: [
      //   {
      //     isActive: true,
      //     age: 40,
      //     first_name: 'Dickerson',
      //     last_name: 'Macdonald'
      //   },
      //   { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      //   { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      //   { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      // ]
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList
    })
  }
}
</script>