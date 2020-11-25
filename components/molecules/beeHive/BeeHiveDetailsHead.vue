<template
  >
  <div class="detailBox">
    <beeHiveDetailsHeadline />
    <beeHiveDetailsNumber />
    <beeHiveDetailsQueenInfo />
    <beeHiveDetailsBuildType />
    <beeHiveDetailsStatus />
    <beeHiveDetailsComment />
  </div>
</template>

<script>
import beeHiveDetailsHeadline from '~/components/atoms/beeHive/BeeHiveDetailsHeadline.vue'
import beeHiveDetailsQueenInfo from '~/components/atoms/beeHive/BeeHiveDetailsQueenInfo.vue'
import beeHiveDetailsNumber from '~/components/atoms/beeHive/BeeHiveDetailsNumber.vue'
import beeHiveDetailsBuildType from '~/components/atoms/beeHive/BeeHiveDetailsBuildType.vue'
import beeHiveDetailsStatus from '~/components/atoms/beeHive/BeeHiveDetailsStatus.vue'
import beeHiveDetailsComment from '~/components/atoms/beeHive/BeeHiveDetailsComment.vue'
export default {
  components: {
    beeHiveDetailsHeadline,
    beeHiveDetailsQueenInfo,
    beeHiveDetailsNumber,
    beeHiveDetailsBuildType,
    beeHiveDetailsStatus,
    beeHiveDetailsComment
  }
}
</script>

<style scoped>
.detailBox {
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  margin-bottom: 3em;
}
</style>
