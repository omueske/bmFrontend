<template>
  <div>
    <label for="beeHiveComment">Kommentar</label>
    <b-form-input class="input" v-model="inputVal" id="beeHiveComment" />
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
