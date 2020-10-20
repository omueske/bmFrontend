<template>
  <div>
    <div v-for="hive in hiveList" :key="hive._id">
      <p id="hive-box">{{ hive }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  props: {
    locationID: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList
    }),
    async hiveList() {
      let h = []
      for (const loc of this.locationList) {
        if (loc._id == this.locationID) {
          //   console.table(loc)
          for (const hive of loc.hives) {
            console.table(hive)
            console.log(hive.beeHiveID)
            const hObj = await this.getHiveByID(hive.beeHiveID)
            console.log('--> ' + hObj)
            // h.push(this.getHiveByID(hive.beeHiveID))
          }
        }
      }
      return h
    }
  },
  methods: {
    ...mapActions('beeHives', ['getHiveByID'])
  }
}
</script>
.hive-box { padding-bottom: 5px; border-bottom: 1px solid;}
