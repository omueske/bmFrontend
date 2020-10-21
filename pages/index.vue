<template>
  <div>
    <h1>BeeManager</h1>
    <div v-for="location in locationList" :key="location.id">
      <LocationBox :location="location" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import LocationBox from '~/components/molecules/LocationBox.vue'
export default {
  components: {
    LocationBox
  },

  computed: {
    ...mapState({
      locationList: (state) => state.locations.locationList
    })
  }
}
</script>