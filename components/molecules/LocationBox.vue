<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row class="box">
        <b-col sm="9">
          <h4>{{ location.name }}</h4>
          <!-- {{ location }} -->
          <b-row>
            <b-col cols="4" sm="6"
              ><AddBeeHiveModal :id="location._id"
            /></b-col>
          </b-row>
          <b-row>
            <b-col cols="8" sm="6">{{ location.address }}</b-col>
            <b-col cols="4" sm="6">{{ location.comment }}</b-col>
            <b-col cols="4" sm="6">{{ location.latitude }}</b-col>
            <b-col cols="4" sm="6">{{ location.longitude }}</b-col>
          </b-row>
          <b-row>
            <b-col
              v-for="hive in location.hives"
              :key="hive._id"
              cols="8"
              sm="6"
              ><BeeHiveBox :beeHiveId="hive.beeHiveID" class="location-box"
            /></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AddBeeHiveModal from '~/components/molecules/AddBeeHiveModal.vue'
import BeeHiveBox from '~/components/molecules/BeeHiveBox.vue'
export default {
  components: {
    AddBeeHiveModal,
    BeeHiveBox
  },
  props: {
    location: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapState({
      beeHiveList: (state) => state.beeHives.beeHiveList
    })
  }
}
</script>
<style scoped>
.box {
  background-color: #fff184;
  border-bottom: solid 2px #000000;
  margin: 25px;
}
.location-box {
  margin-bottom: 20px;
}
</style>
