<template>
  <div>
    <label for="name">Name</label>
    <b-form-input id="name" class="input" v-model="inputVal" />
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
