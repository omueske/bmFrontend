<template>
  <div>
    <b-table
      :items="currentBeeHiveLogList"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template #table-caption
        >BR=Baurahmen, MW=Mittelwand, BW=Brutwabe, FW=Futterwabe,
        LR=Leerwabe</template
      >
    </b-table>
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
        {
          key: 'meteorology.weather',
          label: 'Witterung',
          sortable: false
        },
        {
          key: 'meteorology.temperature',
          label: 'Temperatur in °C',
          sortable: false
        },
        { key: 'frames.buildFrame', label: 'BR', sortable: false },
        { key: 'frames.middleFrame', label: 'MW', sortable: false },
        { key: 'frames.broodComb', label: 'BW', sortable: false },
        { key: 'frames.foodComb', label: 'FW', sortable: false },
        { key: 'frames.emptyFrame', label: 'LR', sortable: false },
        { key: 'meakness', label: 'Sanftmut', sortable: true },
        { key: 'steadily', label: 'Wabenstetigkeit', sortable: true },
        { key: 'food[0].amountInGramm', label: 'Sirup in g', sortable: true },
        { key: 'food[1].amountInGramm', label: 'Teig in g', sortable: true },
        { key: 'annotations', label: 'Anmerkungen', sortable: false }
      ]
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
}
</script>