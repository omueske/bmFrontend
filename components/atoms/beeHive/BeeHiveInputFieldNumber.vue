<template>
  <div>
    <label for="number">Nummer</label>
    <b-form-input class="input" name="number" v-model="inputVal" />
  </div>
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
