<template>
  <h2>{{ currentBeeHive.name }}</h2>
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
