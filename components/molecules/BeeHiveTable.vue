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
        <b-button-group>
          <BeeHiveDeleteHiveButton :id="data.item._id" />
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
          />
        </b-button-group>
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
import { mapState, mapGetters, mapActions } from 'vuex'
import BeeHiveDeleteHiveButton from '~/components/atoms/beeHive/BeeHiveDeleteHiveButton'
import BeeHiveUpdateHiveButton from '~/components/atoms/beeHive/BeeHiveUpdateHiveButton'
import UpdateBeeHiveModal from '~/components/molecules/UpdateBeeHiveModal'
import BeeHiveViewButton from '~/components/atoms/beeHive/BeeHiveViewButton'
export default {
  components: {
    BeeHiveDeleteHiveButton,
    BeeHiveUpdateHiveButton,
    UpdateBeeHiveModal,
    BeeHiveViewButton
  },
  props: ['value'],
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
      ],
      beeHiveDetails: ''
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList,
      selectedLocation: (state) => state.locations.selectedLocation
    }),
    ...mapGetters('beeHives', [
      'getAllBeeHivesByLocId',
      'getBeeHiveIdByHiveId'
    ]),
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeehive']),
    toggleBeeHiveDetails(id) {
      this.beeHiveDetails = id
      this.setCurrentBeehive(this.getBeeHiveIdByHiveId(id))
    }
  }
}
</script>
