<template>
  <div>
    <b-button variant="outline-info" class="mb-2" @click="showDeleteMsgBox">
      <b-icon icon="trash" aria-hidden="true" />
    </b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapGetters('locations', ['getLocationById'])
  },
  methods: {
    ...mapActions('beeHives', ['deleteBeeHive']),
    ...mapActions('locations', ['deleteBeeHiveFromLocation', 'deleteLocation']),
    showDeleteMsgBox() {
      const toDeleteLocation = this.getLocationById(this.id)
      console.log(toDeleteLocation)
      this.$bvModal
        .msgBoxConfirm(
          `Bitte Bestätigen Sie, dass der Standort mit der ID: ${toDeleteLocation._id} ${toDeleteLocation.name} gelöscht werden soll.`,
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
            console.log(toDeleteLocation)
            this.deleteLocation(toDeleteLocation._id)
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
