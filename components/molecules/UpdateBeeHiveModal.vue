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
      <BeeHiveInputFieldName v-model="beeHiveToUpdate.name" />
      <BeeHiveInputFieldNumber v-model="beeHiveToUpdate.number" />
      <BeeHiveSelectBuildType
        v-model="beeHiveToUpdate.buildType"
        name="buildType"
        class="input-field"
      />
      <BeeHiveStatusSelect
        v-model="beeHiveToUpdate.status"
        name="Status"
        class="input-field"
      />
      <BeeHiveInputFieldComment
        v-model="beeHiveToUpdate.BeeHiveInputFieldComment"
      />
    </b-modal>
    {{ beeHiveToUpdate }}
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
    },
    beeHive: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    beeHiveToUpdate: {
      get() {
        let obj = JSON.parse(JSON.stringify(this.beeHive))
        if (!obj.buildType) {
          obj.buildType = ''
        }
        return obj
      },
      set(newBeeHive) {
        return newBeeHive
      }
    }
  },
  methods: {
    ...mapActions('beeHives', ['updateBeeHive', 'loadBeeHives']),

    async handleOk() {
      await this.updateBeeHive(this.beeHiveToUpdate).then(() => {
        // now the Lists must be refreshed
        this.loadBeeHives()
      })
    },
    resetModal() {
      this.beeHiveToUpdate = {}
    }
  }
}
</script>
<style scoped>
.input-field {
  padding-bottom: 5px;
}
</style>
