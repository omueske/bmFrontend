<template>
  <div>
    <b-table
      :items="queenList"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(beeHive)="data">
        {{ getBeeHiveIdByHiveId(data.item.beeHiveID).name }}
      </template>
      <template v-slot:cell(actions)="data">
        <b-button-group>
          <QueenDeleteButton :id="data.item._id" />
          <!-- <BeeHiveDeleteHiveButton :id="data.item._id" />
          <BeeHiveUpdateHiveButton
            :id="data.item._id"
            v-b-modal="'add-BeeHive-modal-' + data.item._id"
          />
          <UpdateBeeHiveModal
            :id="data.item._id"
            :beeHive="JSON.parse(JSON.stringify(data.item))"
          />
          <BeeHiveViewButton
            :id="data.item._id"
            @toggleBeeHiveDetails="toggleBeeHiveDetails(data.item._id)"
          /> -->
        </b-button-group>
      </template></b-table
    >
    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import QueenDeleteButton from '~/components/atoms/queen/QueenDeleteButton.vue'

export default {
  components: { QueenDeleteButton },
  props: ['value'],
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fields: [
        { key: '_id', sortable: true },
        { key: 'number', sortable: true },
        { key: 'hatchYear', label: 'Schlupfjahr', sortable: true },
        { key: 'pedigree', label: 'Abstammung', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'beeHive', label: 'Volk', sortable: true },
        { key: 'createdAt', label: 'Erstellt am', sortable: true },
        { key: 'updatedAt', label: 'letztes Update', sortable: false },
        { key: 'actions', label: 'Aktionen', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      queenList: (state) => state.queens.queenList
    }),
    ...mapGetters('beeHives', ['getBeeHiveIdByHiveId']),
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
