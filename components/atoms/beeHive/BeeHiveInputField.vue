<template>
  <div>
    <label :for="name">{{ name }}</label>
    <b-form-input
      v-model="inputVal"
      size="sm"
      :id="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.beeHive
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
