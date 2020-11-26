<template>
  <div>
    <b-button
      v-b-modal="'update-BeeHiveLog-modal-' + id"
      variant="outline-info"
      class="mb-2"
      @click="setCurrentBeeHiveLog(getBeeHiveLogById(id))"
    >
      <b-icon icon="gear" aria-hidden="true" />
    </b-button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapGetters('beeHives', ['getBeeHiveLogById'])
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeeHiveLog'])
  }
}
</script>
