<template>
  <b-row>
    <b-col sm="5">
      <label for="temperature">Temperatur</label>
    </b-col>
    <b-col sm="5">
      <b-form-input
        id="temperature"
        v-model="inputVal"
        type="range"
        min="-30"
        max="50"
      /> </b-col
    ><b-col>{{ inputVal }} °C</b-col>
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
