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
              <b-form-select-option :value="null" disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
          {{ queen }}
        </b-card>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    }
  },
  methods: {
    async handleOk() {
      await this.addQueen(this.queen)
      this.resetModal()
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
