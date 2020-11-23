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
      /><br /><br />
      <b-card bg-variant="light">
        <label for="findings">Allgemeiner Befund:</label>
        <b-form-checkbox-group
          id="checkbox-group-1"
          class="detailBox"
          v-model="beeHiveLog.findings"
          :options="options"
          name="findings"
        />
        <b-container fluid>
          <b-row>
            <b-col sm="3">
              <label for="buildFrame"> Baurahmen:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="buildFrame"
                v-model="beeHiveLog.frames.buildFrame"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.buildFrame }}</b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label for="middleFrame">Mittelwände:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="middleFrame"
                v-model="beeHiveLog.frames.middleFrame"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.middleFrame }}</b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label for="emptyCombe">Leerwaben:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="emptyCombe"
                v-model="beeHiveLog.frames.emptyComb"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.emptyComb }}</b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label for="broodComb">Brutwaben:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="broodComb"
                v-model="beeHiveLog.frames.broodComb"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.broodComb }}</b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label for="foodComb">Futterwaben:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="foodComb"
                v-model="beeHiveLog.frames.foodComb"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.foodComb }}</b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <label for="emptyFrame">Leerrahmen:</label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="emptyFrame"
                v-model="beeHiveLog.frames.emptyFrame"
                type="range"
                min="-100"
                max="+100"
              /> </b-col
            ><b-col>{{ beeHiveLog.frames.emptyFrame }}</b-col>
          </b-row>
        </b-container>
      </b-card>
      {{ beeHiveLog }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      beeHiveLog: {
        frames: {
          buildFrame: 0,
          middleFrame: 0,
          emptyComb: 0,
          broodComb: 0,
          foodComb: 0,
          emptyFrame: 0
        }
      },
      options: [
        { text: 'Eier', value: 'eggs' },
        { text: 'offen', value: 'openBreed' },
        { text: 'verdeckelt', value: 'cappedBreed' }
      ]
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

.detailBox {
  margin-bottom: 1em;
}
</style>
