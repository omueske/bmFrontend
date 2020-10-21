<template>
  <div>
    <div id="hive-box">
      <p>
        {{ beeHive.number }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {},
  props: {
    beeHiveId: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList,
      beeHiveList: (state) => state.beeHives.beeHiveList
    }),
    ...mapGetters('beeHives', ['getBeeHiveIdByHiveId']),
    beeHive() {
      let hive = this.getBeeHiveIdByHiveId(this.beeHiveId)
      return hive
    }
  }
}
</script>
<style scoped>
.hive-box {
  padding-bottom: 20px;
  border: 1px solid black;
}
</style>

