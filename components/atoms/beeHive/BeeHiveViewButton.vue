<template>
  <div>
    <b-button @click="toggleBeeHiveDetails">
      <b-icon icon="eye" aria-hidden="true" />
    </b-button>
  </div>
</template>

<script>
/* This Button Returns an "toggleBeeHiveDetails"-event which 
have to be handled by the parent component
*/

export default {
  methods: {
    toggleBeeHiveDetails() {
      this.$emit('toggleBeeHiveDetails')
    }
  }
}
</script>
