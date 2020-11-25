<template>
  <div>
    <b-button variant="outline-info" class="mb-2" @click="showDeleteMsgBox">
      <b-icon icon="trash" aria-hidden="true" />
    </b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: {
      required: true
    }
  },

  methods: {
    ...mapActions('beeHives', ['deleteBeeHiveLog']),
    showDeleteMsgBox() {
      this.$bvModal
        .msgBoxConfirm(
          `Bitte Bestätigen Sie, dass den Eintrag mit der ID: ${this.id} gelöscht werden soll.`,
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
            this.deleteBeeHiveLog(this.id)
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