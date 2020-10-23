<template>
  <div>
    <b-modal
      :id="id"
      hide-backdrop
      content-class="shadow"
      title="Neuen Standort anlegen"
      @show="resetModal"
      @ok="handleOk"
    >
      Name (Label + Input) Adresse Längengrade Breitengrade Kommentar
      <LocationInputField
        v-model="location.name"
        placeholder="Bitte Standortname eingeben"
        name="Name"
        class="input-field"
      />
      <LocationInputField
        v-model="location.address"
        placeholder="Bitte Adresse eingeben"
        name="Adresse"
        class="input-field"
      />
      <LocationInputField
        v-model="location.longitude"
        placeholder="Bitte Breitengrade eingeben"
        name="Längengrade"
        class="input-field"
      />
      <LocationInputField
        v-model="location.latitude"
        placeholder="Bitte Längengrade eingeben"
        name="Breitengrade"
        class="input-field"
      />
      <LocationInputField
        v-model="location.comment"
        placeholder="Bitte Kommentar eingeben"
        name="Kommentar"
        class="input-field"
      />
      {{ location }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LocationInputField from '~/components/atoms/location/LocationInputField.vue'
export default {
  components: {
    LocationInputField
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      location: {}
    }
  },
  methods: {
    ...mapActions('locations', ['addLocation']),
    handleOk() {
      this.addLocation(this.location)
    },
    resetModal() {
      this.location = {}
    }
  }
}
</script>
.input-field { padding-bottom: 5px; }
