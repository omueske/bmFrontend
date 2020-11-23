<template>
  <div>
    ModalID: {{ 'add-BeeHiveLog-modal-' + currentBeeHive._id }}
    <b-modal
      :id="'add-BeeHiveLog-modal-' + currentBeeHive._id"
      hide-backdrop
      content-class="shadow"
      title="Neuen Eintrag anlegen"
      @show="resetModal"
      @ok="handleOk"
    >
      <label for="beeHiveLogdate">Datum:</label>
      <Date-Picker
        v-model="beeHiveLog.date"
        id="beeHiveLogdate"
        name="beeHiveLogdate"
        valueType="format"
      />
      -- {{ beeHiveLog.date }}--
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: {
    // BeeHiveAddHiveButton,
    // BeeHiveStatusSelect,
    // BeeHiveInputFieldName,
    // BeeHiveInputFieldNumber,
    // BeeHiveInputFieldComment,
    // BeeHiveSelectBuildType
    DatePicker
  },
  data() {
    return {
      beeHiveLog: {},
      testvm: ''
    }
  },
  computed: {
    ...mapState({
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    })
  },
  methods: {
    ...mapActions('beeHives', ['addBeeHive', 'loadBeeHives']),

    async handleOk() {
      await this.addBeeHive({
        beeHive: this.beeHive,
        locationID: this.id
      }).then(() => {
        this.addBeeHiveToLocation({
          beeHive: this.beeHive,
          locationId: this.id
        })
        // now the Lists must be refreshed
        this.loadLocations()
        this.loadBeeHives()
      })
    },
    resetModal() {
      this.beeHive = {}
    }
  }
}
</script>
<style scoped>
.input-field {
  padding-bottom: 5px;
}
</style>
