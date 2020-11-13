<template>
  <div>
    <label for="name">Nummer</label>
    <b-form-input
      class="input"
      :value="value.number"
      @input="updateValue('number', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    async updateValue(key, value) {
      await this.$emit('input', { ...this.value, [key]: value })
    }
  }
}
</script>
