<template>
  <div>
    <h1>Standort</h1>
    <LocationBox :location="location" />
  </div>
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
