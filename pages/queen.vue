<template>
  <div><queenHeadline /><queenAddButton /><AddQueenModal /><QueenTable /></div>
</template>
<script>
import queenHeadline from '~/components/atoms/queen/queenHeadline.vue'

import queenAddButton from '~/components/atoms/queen/queenAddButton.vue'
import AddQueenModal from '~/components/molecules/queen/AddQueenModal.vue'
import QueenTable from '~/components/molecules/queen/QueenTable.vue'
export default {
  components: {
    queenHeadline,
    queenAddButton,
    AddQueenModal,
    QueenTable
  }
}
</script>
