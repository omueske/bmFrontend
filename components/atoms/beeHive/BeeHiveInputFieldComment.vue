<template>
  <div>
    <label for="name">Kommentar</label>
    <b-form-input
      class="input"
      :value="value.comment"
      @input="updateValue('comment', $event)"
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
