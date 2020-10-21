<template>
  <div>
    <b-button
      variant="outline-info"
      v-b-modal="'add-BeeHive-modal-' + id"
      class="mb-2"
    >
      <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Volk
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
