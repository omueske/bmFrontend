<template>
    <h1> {{ headline.text }}
</template>
<script>
export default {
  props: {
    headline: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>