<template>
  <div>
    <b-button v-model="inputVal" v-else variant="outline-info" class="mb-2">
      <b-icon icon="eye" aria-hidden="true" />
    </b-button>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['value'],
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
