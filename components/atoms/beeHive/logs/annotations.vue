<template>
  <b-row>
    <b-col sm="3">
      <label for="annotations">Anmerkungen:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        v-model="inputVal"
        id="annotations"
        size="sm"
        placeholder="Anmerkungen..."
      />
    </b-col>
  </b-row>
</template>
<script>
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
