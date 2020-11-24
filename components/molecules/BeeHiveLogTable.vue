<template>
  <div>
    <b-table
      :items="currentBeeHiveLogList"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    />
    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['value'],
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fields: [
        // { key: '_id', sortable: true },
        { key: 'date', label: 'Datum', sortable: true },
        { key: 'frames.buildFrame', label: 'BR', sortable: true },
        { key: 'frames.middleFrame', label: 'MW', sortable: true },
        { key: 'frames.broodComb', label: 'BW', sortable: true },
        { key: 'frames.foodComb', label: 'FW', sortable: true },
        { key: 'frames.emptyFrame', label: 'LR', sortable: true },
        { key: 'food[0].amountInGramm', label: 'Sirup', sortable: true },
        { key: 'food[1].amountInGramm', label: 'Teig', sortable: true },
        { key: 'annotations', label: 'Anmerkungen', sortable: true }
      ],
      beeHiveDetails: ''
    }
  },
  computed: {
    ...mapState({
      currentBeeHiveLogList: (state) => state.beeHives.currentBeeHiveLogList
    }),
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
  // methods: {
  //   ...mapActions('beeHives', ['setCurrentBeehive', 'loadBeeHiveLogs']),
  //   toggleBeeHiveDetails(id) {
  //     this.beeHiveDetails = id
  //     this.setCurrentBeehive(this.getBeeHiveIdByHiveId(id))
  //     this.loadBeeHiveLogs(id)
  //   }
  // }
}
</script>
