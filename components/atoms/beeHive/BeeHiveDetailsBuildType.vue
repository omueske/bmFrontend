<template>
  <div><b>Rähmchenmaß: </b>{{ currentBeeHive.buildType }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    })
  }
}
</script>
