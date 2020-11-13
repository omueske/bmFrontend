<template>
  <div>
    <b-modal
      :id="'update-BeeHive-modal-' + id"
      hide-backdrop
      content-class="shadow"
      title="Volk bearbeiten"
      @show="resetModal"
      @ok="handleOk"
    >
      <BeeHiveInputFieldName v-model="beeHive" />
      <BeeHiveInputFieldNumber v-model="beeHive" />
      <BeeHiveStatusSelect
        v-model="beeHive.status"
        name="Status"
        class="input-field"
      />
      <BeeHiveInputFieldComment v-model="beeHive" />

      <!-- <BeeHiveInputField
        v-model="modifiedBeeHive.buildType"
        placeholder="Bitte Rähmchenmaß / Bauart eingeben"
        name="Bauart"
        class="input-field"
      /> -->
      {{ beeHive }}
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BeeHiveInputField from '~/components/atoms/beeHive/BeeHiveInputField.vue'
import BeeHiveStatusSelect from '~/components/atoms/beeHive/BeeHiveStatusSelect.vue'
import BeeHiveAddHiveButton from '~/components/atoms/beeHive/BeeHiveAddHiveButton.vue'
import BeeHiveInputFieldName from '~/components/atoms/beeHive/BeeHiveInputFieldName.vue'
import BeeHiveInputFieldNumber from '~/components/atoms/beeHive/BeeHiveInputFieldNumber.vue'
import BeeHiveInputFieldComment from '~/components/atoms/beeHive/BeeHiveInputFieldComment.vue'

export default {
  components: {
    BeeHiveAddHiveButton,
    BeeHiveInputField,
    BeeHiveStatusSelect,
    BeeHiveInputFieldName,
    BeeHiveInputFieldNumber,
    BeeHiveInputFieldComment
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null
    },
    beeHive: {
      type: Object,
      required: true,
      default: null
    }
  },
  methods: {
    ...mapActions('beeHives', ['addBeeHive', 'loadBeeHives']),
    ...mapActions('locations', [
      'loadLocations',
      'addBeeHiveToLocation',
      'setSelectedLocation'
    ]),

    async handleOk() {
      await this.addBeeHive({
        beeHive: this.beeHive,
        locationID: this.id
      }).then(() => {
        this.addBeeHiveToLocation({
          beeHive: this.beeHive,
          locationId: this.id
        })
        // now the Lists must be refreshed
        this.loadLocations()
        this.loadBeeHives()
      })
    },
    resetModal() {
      this.beeHive = {}
    }
  }
}
</script>
<style scoped>
.input-field {
  padding-bottom: 5px;
}
</style>
