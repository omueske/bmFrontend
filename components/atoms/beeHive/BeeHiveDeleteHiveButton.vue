<template>
  <div>
    <b-button variant="outline-info" class="mb-2" @click="showDeleteMsgBox">
      <b-icon icon="trash" aria-hidden="true"></b-icon>
    </b-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapGetters('beeHives', ['getBeeHiveIdByHiveId'])
  },
  methods: {
    ...mapActions('beeHives', ['deleteBeeHive']),
    ...mapActions('locations', ['deleteBeeHiveFromLocation']),
    showDeleteMsgBox() {
      const toDeleteBeeHive = this.getBeeHiveIdByHiveId(this.id)
      console.log(toDeleteBeeHive)
      this.$bvModal
        .msgBoxConfirm(
          `Bitte Bestätigen Sie, dass das Volk mit der ID: ${this.id} ${toDeleteBeeHive.name} gelöscht werden soll.`,
          {
            title: 'Bitte bestätigen',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'löschen',
            cancelTitle: 'abbrechen',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          }
        )
        .then((value) => {
          if (value) {
            console.log('DELETE....')
            console.log(toDeleteBeeHive)
            this.deleteBeeHiveFromLocation(toDeleteBeeHive)
            this.deleteBeeHive(toDeleteBeeHive)
          }
        })
        .catch((err) => {
          // An error occurred
        })
    }
  }
}
</script>
