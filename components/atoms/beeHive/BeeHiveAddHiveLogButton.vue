<template>
  <div>
    <b-button
      v-b-modal="'add-BeeHiveLog-modal-' + currentBeeHive._id"
      variant="outline-info"
      class="mb-2"
    >
      <b-icon icon="plus-circle" aria-hidden="true" /> Aufzeichnung
    </b-button>
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
