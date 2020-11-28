<template>
  <div>
    <b-modal
      :id="'update-BeeHiveLog-modal-' + id"
      hide-backdrop
      content-class="shadow"
      title="Eintrag ändern"
      @show="resetModal"
      @ok="handleOk"
    >
      <b-container fluid
        ><b-row
          ><b-col> <label for="beeHiveLogdate">Datum:</label></b-col
          ><b-col>
            <Date-Picker
              v-model="beeHiveLogToUpdate.date"
              class="detailBox"
              id="beeHiveLogdate"
              name="beeHiveLogdate"
              valueType="format"/></b-col
        ></b-row>
        <b-row
          ><b-col>
            <weather v-model="beeHiveLogToUpdate.meteorology.weather"/></b-col
        ></b-row>

        <b-row
          ><b-col>
            <temperature
              v-model="beeHiveLogToUpdate.meteorology.temperature"/></b-col
        ></b-row>
        <b-card bg-variant="light">
          <label for="findings">Allgemeiner Befund:</label>
          <b-form-checkbox-group
            id="checkbox-group-1"
            class="detailBox"
            v-model="beeHiveLogToUpdate.findings"
            :options="options"
            name="findings"/>
          <label>Gegeben und Genommen:</label>
          <buildFrame v-model="beeHiveLogToUpdate.frames.buildFrame"/>
          <middleWall v-model="beeHiveLogToUpdate.frames.middleFrame"/>
          <broodComb v-model="beeHiveLogToUpdate.frames.broodComb"/>
          <foodComb v-model="beeHiveLogToUpdate.frames.foodComb"/>
          <emptyFrame v-model="beeHiveLogToUpdate.frames.emptyFrame"
        /></b-card>
        <b-card bg-variant="light">
          <label>Fütterung</label>
          <div v-for="feed in beeHiveLogToUpdate.food" :key="feed.name">
            <feed
              v-model="feed.amountInGramm"
              :name="feed.name"
              :amount="feed.amount"
            />
          </div>
        </b-card>
        <b-card> <meakness v-model="beeHiveLogToUpdate.meakness"/></b-card>
        <b-card> <steadily v-model="beeHiveLogToUpdate.steadily"/></b-card>
        <b-card>
          <annotations v-model="beeHiveLogToUpdate.annotations"
        /></b-card>
      </b-container>
      {{ beeHiveLogToUpdate }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
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
  props: ['id', 'bhive'],
  data() {
    return {
      options: [
        { text: 'Eier', value: 'eggs' },
        { text: 'offen', value: 'openBreed' },
        { text: 'verdeckelt', value: 'cappedBreed' }
      ],
      beeHiveLogToUpdate: {
        meteorology: { weather: '' },
        frames: {}
      }
    }
  },
  computed: {
    ...mapState({
      currentBeeHiveLog: (state) => state.beeHives.currentBeeHiveLog
    }),
    ...mapGetters('beeHives', ['getBeeHiveLogById'])
  },
  methods: {
    ...mapActions('beeHives', ['updateBeeHiveLog', 'loadBeeHiveLogs']),

    async handleOk() {
      await this.updateBeeHiveLog(this.beeHiveLogToUpdate)
      await this.loadBeeHiveLogs(this.beeHiveLogToUpdate.beeHiveId)
    },
    resetModal() {}
  },
  mounted: async function() {
    this.beeHiveLogToUpdate = await JSON.parse(JSON.stringify(this.bhive))
    if (!this.beeHiveLogToUpdate.meteorology) {
      this.beeHiveLogToUpdate.meteorology = {}
    }
    if (!this.beeHiveLogToUpdate.frames) {
      this.beeHiveLogToUpdate.frames = { buildFrame: 0 }
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
