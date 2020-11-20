<template>
  <div>
    <b-button variant="outline-info" class="mb-2" @click="showDeleteMsgBox">
      <b-icon icon="trash" aria-hidden="true" />
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
            this.deleteBeeHiveFromLocation(toDeleteBeeHive).then(
              this.deleteBeeHive(toDeleteBeeHive)
            )
          }
        })
        .catch((err) => {
          console.log(err)
          // An error occurred
        })
    }
  }
}
</script>
