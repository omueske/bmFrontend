<template>
  <div>
    <b-button
      v-b-modal="'update-BeeHive-modal-' + id"
      variant="outline-info"
      class="mb-2"
      @click="setBeeHive()"
    >
      <b-icon icon="gear" aria-hidden="true" />
    </b-button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapGetters('beeHives', ['getAllBeeHivesByLocId'])
  },
  methods: {
    ...mapActions('beeHives', ['setCurrentBeehive', 'loadBeeHives']),
    setBeeHive() {
      this.loadBeeHives()
      const currBeeHive = this.setCurrentBeehive(this.id).then(function(
        result
      ) {
        console.log(result)
        return result
      })
      console.log(currBeeHive)
      console.log(this.id)
      return currBeeHive
    }
  }
}
</script>
