<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">Bee Manager</nuxt-link>
    <nav>
      <LinkList :links="links" />
    </nav>
  </div>
</template>
<script>
import LinkList from '~/components/molecules/LinkList.vue'
export default {
  components: {
    LinkList
  },
  data() {
    return {
      links: [
        { page: '/', name: 'Home' },
        { page: '/location', name: 'Standort' }
      ]
    }
  }
}
</script>
<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
