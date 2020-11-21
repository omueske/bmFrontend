<template>
  <div>
    <b>Königin(en)</b>
    <div v-if="currentBeeHive.queen && currentBeeHive.queen.length < 1">
      Keine Königin(nen) dem Volk zugeordnet
    </div>
    <div v-else>
      <div v-for="queen in currentBeeHive.queen" :key="queen._id">
        {{ queen }}
      </div>
    </div>
  </div>
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
