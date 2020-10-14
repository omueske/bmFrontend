<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row class="box">
        <b-col sm="9">
          <h4>{{ location.name }}</h4>
          <b-row>
            <b-col cols="8" sm="6">Hive 1</b-col>
            <b-col cols="4" sm="6">Hive 2</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: { name: 'Jesingen' }
    }
  }
}
</script>
<style scoped>
.box {
  background-color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
