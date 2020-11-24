<template>
  <b-row>
    <b-col sm="5">
      <label for="meakness">Sanftmut:</label>
    </b-col>
    <b-col sm="7">
      <b-form-select
        v-model="inputVal"
        :id="meakness"
        :options="options"
        class="mb-3"
    /></b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
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
    },
    ...mapState({
      options: (state) => state.configurations.configuration.meakness
    })
  }
}
</script>