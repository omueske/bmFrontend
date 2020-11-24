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
      ><b-container fluid
        ><b-row
          ><b-col> <label for="beeHiveLogdate">Datum:</label></b-col
          ><b-col>
            <Date-Picker
              v-model="beeHiveLog.date"
              class="detailBox"
              id="beeHiveLogdate"
              name="beeHiveLogdate"
              valueType="format"/></b-col></b-row
        ><b-row
          ><b-col> <weather v-model="beeHiveLog.meteorology.weather"/></b-col
        ></b-row>
        <b-row
          ><b-col>
            <temperature v-model="beeHiveLog.meteorology.temperature"/></b-col
        ></b-row>
        <b-card bg-variant="light">
          <label for="findings">Allgemeiner Befund:</label>
          <b-form-checkbox-group
            id="checkbox-group-1"
            class="detailBox"
            v-model="beeHiveLog.findings"
            :options="options"
            name="findings"
          />
          <label>Gegeben und Genommen:</label>
          <buildFrame v-model="beeHiveLog.frames.buildFrame" />
          <middleWall v-model="beeHiveLog.frames.middleFrame" />
          <broodComb v-model="beeHiveLog.frames.broodComb" />
          <foodComb v-model="beeHiveLog.frames.foodComb" />
          <emptyFrame v-model="beeHiveLog.frames.emptyFrame" />
        </b-card>
        <b-card bg-variant="light">
          <label>Fütterung</label>
          <div v-for="feed in beeHiveLog.food" :key="feed.name">
            <feed
              v-model="feed.amountInGrammm"
              :name="feed.name"
              :amount="feed.amount"
            />
          </div>
        </b-card>
        <b-card> <meakness v-model="beeHiveLog.meakness"/></b-card>
        <b-card> <steadily v-model="beeHiveLog.steadily"/></b-card>
        <b-card> <annotations v-model="beeHiveLog.annotations"/></b-card>
      </b-container>
      {{ beeHiveLog }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import buildFrame from '~/components/atoms/beeHive/logs/buildFrame.vue'
import middleWall from '~/components/atoms/beeHive/logs/middleWall.vue'
import broodComb from '~/components/atoms/beeHive/logs/broodComb.vue'
import foodComb from '~/components/atoms/beeHive/logs/foodComb.vue'
import emptyFrame from '~/components/atoms/beeHive/logs/emptyFrame.vue'
import feed from '~/components/atoms/beeHive/logs/feed.vue'
import meakness from '~/components/atoms/beeHive/logs/meakness.vue'
import steadily from '~/components/atoms/beeHive/logs/steadily.vue'
import annotations from '~/components/atoms/beeHive/logs/annotations.vue'
import weather from '~/components/atoms/beeHive/logs/weather.vue'
import temperature from '~/components/atoms/beeHive/logs/temperature.vue'

export default {
  components: {
    DatePicker,
    buildFrame,
    middleWall,
    broodComb,
    foodComb,
    emptyFrame,
    feed,
    meakness,
    steadily,
    annotations,
    temperature,
    weather
  },
  data() {
    return {
      beeHiveLog: {
        meteorology: {},
        frames: {},
        food: [
          { name: 'Sirup', amountInGrammm: 0 },
          { name: 'Futterteig', amountInGrammm: 0 }
        ]
      },
      options: [
        { text: 'Eier', value: 'eggs' },
        { text: 'offen', value: 'openBreed' },
        { text: 'verdeckelt', value: 'cappedBreed' }
      ],
      feeds: [
        { name: 'Sirup', amountInGrammm: 0 },
        { name: 'Futterteig', amountInGrammm: 0 }
      ]
    }
  },
  computed: {
    ...mapState({
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    })
  },
  methods: {
    ...mapActions('beeHives', ['addBeeHiveLog']),

    async handleOk() {
      this.beeHiveLog.beeHiveId = this.currentBeeHive._id
      await this.addBeeHiveLog(this.beeHiveLog)
      console.log(this.beeHiveLog)
      //this.beeHiveLog = {}
      this.resetModal
    },
    resetModal() {
      this.beeHiveLog = {
        meteorology: {},
        frames: {},
        food: [
          { name: 'Sirup', amountInGrammm: 0 },
          { name: 'Futterteig', amountInGrammm: 0 }
        ]
      }
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
