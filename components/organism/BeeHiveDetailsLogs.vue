<template
  ><div>
    <BeeHiveDetailsLogsHeadline />
    <BeeHiveAddHiveLogButton />
    <AddBeeHiveLogModal /></div
></template>

<script>
import BeeHiveDetailsLogsHeadline from '~/components/atoms/beeHive/BeeHiveDetailsLogsHeadline.vue'
import BeeHiveAddHiveLogButton from '~/components/atoms/beeHive/BeeHiveAddHiveLogButton'
import AddBeeHiveLogModal from '~/components/molecules/beeHive/AddBeeHiveLogModal.vue'
export default {
  components: {
    BeeHiveDetailsLogsHeadline,
    BeeHiveAddHiveLogButton,
    AddBeeHiveLogModal
  }
}
</script>
