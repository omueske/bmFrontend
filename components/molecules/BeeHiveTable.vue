<template>
  <div>
    <b-table
      :items="getAllBeeHivesByLocId(selectedLocation._id)"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(actions)="{ data }">
        <BeeHiveDeleteHiveButton :id="data.item._id" />
        <BeeHiveUpdateHiveButton
          :id="data.item._id"
          v-b-modal="'add-BeeHive-modal-' + data.item._id"
        />
        <UpdateBeeHiveModal
          :id="data.item._id"
          :beeHive="JSON.parse(JSON.stringify(data.item))"
        />
        <BeeHiveViewButton @click="toggleHiveData(data.item._id)" />
        <b-button
          variant="outline-info"
          class="mb-2"
          @click="toggleHiveData(toggleDetails(data.item))"
        >
          <b-icon icon="eye" aria-hidden="true" />
        </b-button>
      </template>
      <template v-slot:row-details="{ data.item }">
        <b-card>
          bluuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuub {{ data.item }}
        </b-card>
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
import BeeHiveViewButton from '~/components/atoms/beeHive/BeeHiveViewButton'
import UpdateBeeHiveModal from '~/components/molecules/UpdateBeeHiveModal'

export default {
  components: {
    BeeHiveDeleteHiveButton,
    BeeHiveUpdateHiveButton,
    BeeHiveViewButton,
    UpdateBeeHiveModal
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
      ],
      hiveVisible: null
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList,
      selectedLocation: (state) => state.locations.selectedLocation
    }),
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeehive']),
    toggleHiveData(id) {
      console.log('--->' + id)
      if (this.hiveVisible != id) {
        this.hiveVisible = id
      } else {
        this.hiveVisible = null
      }
    },
    toggleDetails(row) {
      if (row._showDetails) {
        this.$set(row, '_showDetails', false)
      } else {
        this.currentItems.forEach((item) => {
          this.$set(item, '_showDetails', false)
        })

        this.$nextTick(() => {
          this.$set(row, '_showDetails', true)
        })
      }
    }
  }
}
</script>
