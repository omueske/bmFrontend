<template>
  <div>
    ModalID: {{ 'add-BeeHiveLog-modal-' + currentBeeHive._id }}
    <b-modal
      :id="'add-BeeHiveLog-modal-' + currentBeeHive._id"
      hide-backdrop
      content-class="shadow"
      title="Neuen Eintrag anlegen"
      @show="resetModal"
      @ok="handleOk"
      >test
      <!-- <BeeHiveInputFieldName
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
      {{ beeHive }} -->
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    // BeeHiveAddHiveButton,
    // BeeHiveStatusSelect,
    // BeeHiveInputFieldName,
    // BeeHiveInputFieldNumber,
    // BeeHiveInputFieldComment,
    // BeeHiveSelectBuildType
  },
  data() {
    return {
      beeHiveLog: {}
    }
  },
  computed: {
    ...mapState({
      currentBeeHive: (state) => state.beeHives.currentBeeHive
    })
  },
  methods: {
    ...mapActions('beeHives', ['addBeeHive', 'loadBeeHives']),

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
