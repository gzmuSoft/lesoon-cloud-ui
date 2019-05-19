<template lang="pug">
  #lesson-student
    the-header
      UserInfo
    Row(type="flex")#lesson-student-main
      Col(span="16", offset="4")
        Card(:bordered="false")
          .lesson-student-bg(:style="{'background-image': 'url(' + require('_assets/other/background.jpg') + ')'}")
</template>

<script>
import TheHeader from '_components/common/the-header'
import UserInfo from '_components/common/user-info'

export default {
  name: 'the-student',
  components: {
    TheHeader,
    UserInfo
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-student-bg {
  width: inherit;
  height: 240px;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
