<template>
  <div>
    <b-modal
      :id="id"
      hide-backdrop
      content-class="shadow"
      title="Neuen Standort anlegen"
    >
      Name (Label + Input) Adresse Längengrade Breitengrade Kommentar
    </b-modal>
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