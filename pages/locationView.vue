<template>
  <div>
    <h1>Standort</h1>
    <b-button pill variant="outline-secondary" v-b-modal.add-location-modal
      >Neuer Standort</b-button
    >
    <LocationTable />
    <AddLocationModal id="add-location-modal" />
    <div v-for="location in locationList" :key="location.id">
      <LocationBox :location="location" />
    </div>
  </div>
</template>

<script>
</script>