<template>
  <div>
    <b-button
      v-b-modal="'add-BeeHive-modal-' + id"
      variant="outline-info"
      class="mb-2"
    >
      <b-icon icon="plus-circle" aria-hidden="true" /> Volk
    </b-button>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
