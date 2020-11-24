<template
  ><div>
    <BeeHiveDetailsLogsHeadline />
    <BeeHiveAddHiveLogButton />
    <AddBeeHiveLogModal />
    <BeeHiveLogTable /></div
></template>

<script>
import BeeHiveDetailsLogsHeadline from '~/components/atoms/beeHive/BeeHiveDetailsLogsHeadline.vue'
import BeeHiveAddHiveLogButton from '~/components/atoms/beeHive/BeeHiveAddHiveLogButton'
import AddBeeHiveLogModal from '~/components/molecules/beeHive/AddBeeHiveLogModal.vue'
import BeeHiveLogTable from '~/components/molecules/BeeHiveLogTable.vue'
export default {
  components: {
    BeeHiveDetailsLogsHeadline,
    BeeHiveAddHiveLogButton,
    AddBeeHiveLogModal,
    BeeHiveLogTable
  }
}
</script>
