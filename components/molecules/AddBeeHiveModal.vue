<template>
  <div>
    <BeeHiveAddHiveButton :id="id" />
    <b-modal
      :id="'add-BeeHive-modal-' + id"
      hide-backdrop
      content-class="shadow"
      title="Neuen Standort anlegen"
      @show="resetModal"
      @ok="handleOk"
    >
      <BeeHiveInputField
        v-model="beeHive.name"
        placeholder="Bitte Name eingeben"
        name="Name"
        class="input-field"
      />
      <BeeHiveInputField
        v-model="beeHive.number"
        placeholder="Bitte Nummer eingeben"
        name="Nummer"
        class="input-field"
      />
      <BeeHiveInputField
        v-model="beeHive.buildType"
        placeholder="Bitte Rähmchenmaß / Bauart eingeben"
        name="Bauart"
        class="input-field"
      />
      <BeeHiveStatusSelect
        v-model="beeHive.status"
        name="beeHiveStatus"
        class="input-field"
      />
      <BeeHiveInputField
        v-model="beeHive.comment"
        placeholder="Bitte Kommentar eingeben"
        name="Kommentar"
        class="input-field"
      />
      {{ beeHive }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BeeHiveInputField from '~/components/atoms/beeHive/BeeHiveInputField.vue'
import BeeHiveStatusSelect from '~/components/atoms/beeHive/BeeHiveStatusSelect.vue'
import BeeHiveAddHiveButton from '~/components/atoms/beeHive/BeeHiveAddHiveButton.vue'
export default {
  components: {
    BeeHiveAddHiveButton,
    BeeHiveInputField,
    BeeHiveStatusSelect
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
      beeHive: {}
    }
  },
  methods: {
    ...mapActions('beeHives', ['addBeeHive']),
    ...mapActions('locations', ['loadLocations']),
    async handleOk() {
      await console.log(
        await this.addBeeHive({
          beeHive: this.beeHive,
          locationID: this.id
        }).then(() => {
          this.loadLocations()
        })
      )
    },
    resetModal() {
      this.beeHive = {}
    }
  }
}
</script>
.input-field { padding-bottom: 5px; }
