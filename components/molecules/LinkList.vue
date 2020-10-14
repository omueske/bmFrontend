<template>
  <div>
    <span v-for="link in links" :key="link">
      <nuxt-link :to="link.page"> {{ link.name }} </nuxt-link>
      &nbsp; |
    </span>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>

<style scoped>
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
