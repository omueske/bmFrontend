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
    ...mapGetters('queens', ['getQueenById'])
  },
  methods: {
    ...mapActions('queens', ['deleteQueen']),
    showDeleteMsgBox() {
      const toDelete = this.getQueenById(this.id)
      this.$bvModal
        .msgBoxConfirm(
          `Bitte Bestätigen Sie, dass die Königin mit der ID: ${this.id} ${toDelete.number} gelöscht werden soll.`,
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
            this.deleteQueen(toDelete._id)
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
