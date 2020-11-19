<template>
  <div>
    <BeeHiveAddHiveButton :id="id" />
    <b-modal
      :id="'add-BeeHive-modal-' + id"
      hide-backdrop
      content-class="shadow"
      title="Neues Volk anlegen"
      @show="resetModal"
      @ok="handleOk"
    >
      <BeeHiveInputFieldName
        v-model="beeHive.name"
        placeholder="Bitte Name eingeben"
        name="Name"
        class="input-field"
      />
      <BeeHiveInputFieldNumber
        v-model="beeHive.number"
        placeholder="Bitte Nummer eingeben"
        name="Nummer"
        class="input-field"
      />
      <BeeHiveSelectBuildType
        v-model="beeHive.buildType"
        name="Bauart"
        class="input-field"
      />
      <BeeHiveStatusSelect
        v-model="beeHive.status"
        name="beeHiveStatus"
        class="input-field"
      />
      <BeeHiveInputFieldComment
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
import { mapActions } from 'vuex'
import BeeHiveStatusSelect from '~/components/atoms/beeHive/BeeHiveStatusSelect.vue'
import BeeHiveAddHiveButton from '~/components/atoms/beeHive/BeeHiveAddHiveButton.vue'
import BeeHiveInputFieldName from '~/components/atoms/beeHive/BeeHiveInputFieldName.vue'
import BeeHiveInputFieldNumber from '~/components/atoms/beeHive/BeeHiveInputFieldNumber.vue'
import BeeHiveInputFieldComment from '~/components/atoms/beeHive/BeeHiveInputFieldComment.vue'
import BeeHiveSelectBuildType from '~/components/atoms/beeHive/BeeHiveSelectBuildType.vue'

export default {
  components: {
    BeeHiveAddHiveButton,
    BeeHiveStatusSelect,
    BeeHiveInputFieldName,
    BeeHiveInputFieldNumber,
    BeeHiveInputFieldComment,
    BeeHiveSelectBuildType
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
