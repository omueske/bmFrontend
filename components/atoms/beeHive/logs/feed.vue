<template>
  <b-row>
    <b-col>{{ name }}</b-col>
    <b-col sm="4">
      <b-form-input
        :id="name"
        v-model="inputVal"
        type="range"
        min="0"
        max="50000"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['value', 'name', 'amount'],
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