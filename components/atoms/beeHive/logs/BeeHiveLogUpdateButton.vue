<template>
  <div>
    <b-button
      v-b-modal="'update-BeeHiveLog-modal-' + id"
      variant="outline-info"
      class="mb-2"
    >
      <b-icon icon="gear" aria-hidden="true" />
    </b-button>
  </div>
</template>
<script>
export default {
  props: ['id']
}
</script>
