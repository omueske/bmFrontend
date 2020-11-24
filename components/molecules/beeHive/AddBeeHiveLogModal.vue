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
      ><b-container fluid>
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
          <label>Gegeben und Genommen:</label>
          <buildFrame v-model="beeHiveLog.frames.buildFrame" />
          <middleWall v-model="beeHiveLog.frames.middleFrame" />
          <broodComb v-model="beeHiveLog.frames.broodComb" />
          <foodComb v-model="beeHiveLog.frames.foodComb" />
          <emptyFrame v-model="beeHiveLog.frames.emptyFrame" />
        </b-card>
        <b-card bg-variant="light">
          <label>Fütterung</label>
          <div v-for="(feed, index) in beeHiveLog.food" :key="feed">
            <feed
              v-model="feed.amountInGrammm"
              :name="feed.name"
              :amount="feed.amount"
            />
          </div>
        </b-card>
        <b-card> <meakness v-model="beeHiveLog.meakness" /></b-card>
        <b-card> <steadily v-model="beeHiveLog.steadily" /></b-card>
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
    steadily
  },
  data() {
    return {
      beeHiveLog: {
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
