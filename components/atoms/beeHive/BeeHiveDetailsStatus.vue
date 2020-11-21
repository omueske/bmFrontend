<template>
  <div><b>Status: </b>{{ currentBeeHive.status }}</div>
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
