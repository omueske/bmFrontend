<template>
  <div>
    <label for="inputType.name">{{ inputType.showName }}</label>
    <b-form-input class="input" :name="inputType.name" v-model="inputVal" />
  </div>
</template>

<script>
export default {
  props: ['value', 'inputType'],
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
