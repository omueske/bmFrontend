<template>
  <div>
    <b-modal
      id="addQueenModal"
      hide-backdrop
      content-class="shadow"
      title="Neue Königin anlegen"
      @show="resetModal"
      @ok="handleOk"
      ><b-container fluid>
        <b-card bg-variant="light">
          <div v-for="type in inputTypes" :key="type.name">
            <QueenInputField :inputType="type" v-model="queen[type.name]" />
          </div>
          <label for="hatchYear">Schlupfjahr</label>
          <b-form-select
            v-model="queen['hatchYear']"
            id="hatchYear"
            :options="options"
            class="mb-3"
          >
            <!-- This slot appears above the options from 'options' prop -->
            <template v-slot:first>
              <b-form-select-option :value="null" disabled selected
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
          <label for="hive">Volk</label>
          <b-form-select v-model="queen['hive']" id="hive" class="mb-3">
            <b-form-select-option-group
              v-for="(locHive, key) in locHives"
              :label="key"
              :key="key"
            >
              <b-form-select-option
                v-for="hive of locHive"
                :key="hive.value"
                :value="hive.value"
              >
                {{ hive.text }}</b-form-select-option
              >
            </b-form-select-option-group>
          </b-form-select>
          {{ queen }}
        </b-card>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import QueenInputField from '~/components/molecules/queen/QueenInputField.vue'

export default {
  components: {
    QueenInputField
  },
  data() {
    return {
      queen: {},
      inputTypes: [
        { name: 'number', showName: 'Nummer' },
        { name: 'pedigee', showName: 'Abstammung' },
        { name: 'comment', showName: 'Bemerkung' }
      ]
    }
  },
  computed: {
    options() {
      const moment = require('moment')
      const duration = 5
      const thisYear = moment().format('YYYY')
      let startYear = parseInt(thisYear) - duration
      let timeRange = []
      for (let i = thisYear; i >= startYear; i--) {
        timeRange.push(i)
      }
      return timeRange
    },
    locHives() {
      if (this.beeHiveList.length > 0) {
        let location = {}
        for (const hive of this.beeHiveList) {
          const loc = this.getLocationById(hive.locationId).name
          if (!location[loc]) {
            location[loc] = []
          }

          location[loc].push({ value: hive._id, text: hive.name })
        }
        return location
      }
    },
    ...mapState({
      beeHiveList: (state) => state.beeHives.beeHiveList
    }),
    ...mapGetters('locations', ['getLocationById'])
  },
  methods: {
    async handleOk() {
      await this.addQueen(this.queen)
      this.resetModal()
      this.setBeeHiveObject()
    },
    resetModal() {
      this.queen = {}
    },
    ...mapActions('queens', ['addQueen'])
  }
}
</script>
<style scoped>
.input-field {
  padding-bottom: 5px;
}

.detailBox {
  margin-bottom: 1em;
}
</style>
