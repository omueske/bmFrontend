<template>
  <b-row>
    <b-col sm="3">
      <label for="middleFrame">Mittelwände:</label>
    </b-col>
    <b-col sm="4">
      <b-form-input
        id="middleFrame"
        v-model="inputVal"
        type="range"
        min="-100"
        max="+100"
      /> </b-col
    ><b-col>{{ inputVal }}</b-col>
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