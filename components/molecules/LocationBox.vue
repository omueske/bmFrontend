<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row class="box">
        <b-col sm="9">
          <h4>{{ location.name }}</h4>
          {{ location }}
          <b-row>
            <b-col cols="4" sm="6"><AddBeeHiveModal :id="location._id"/></b-col>
          </b-row>
          <b-row>
            <b-col cols="8" sm="6">{{ location.address }}</b-col>
            <b-col cols="4" sm="6">{{ location.comment }}</b-col>
            <b-col cols="4" sm="6">{{ location.latitude }}</b-col>
            <b-col cols="4" sm="6">{{ location.longitude }}</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AddBeeHiveModal from '~/components/molecules/AddBeeHiveModal.vue'
export default {
  components: {
    AddBeeHiveModal
  },
  props: {
    location: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
<style scoped>
.box {
  background-color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
