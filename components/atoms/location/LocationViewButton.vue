<template>
  <div>
    <b-button
      variant="outline-info"
      class="mb-2"
      @click="toggleLocationDetails"
    >
      <b-icon icon="eye" aria-hidden="true" />
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLocationDetails() {
      this.$emit('toggleLocationDetails')
    }
  }
}
</script>
