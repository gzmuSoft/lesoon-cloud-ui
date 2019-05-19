<template lang="pug">
  #lesson-student
    the-header
      UserInfo
    Row(type="flex")
      Col(span="16", offset="4")
        Card(:bordered="false", dis-hover)
          #lesson-student-top
            #lesson-student-bg(:style="{'background-image': 'url(' + require('_assets/other/background.jpg') + ')'}")
          #lesson-student-info
            #lesson-student-info-avatar
              img(src="https://resources.echocow.cn/avatar/head.jpg")
            #lesson-student-info-detail.lesson-text-left
              #lesson-student-info-detail-name Echo
            #lesson-student-info-control
              Button 编辑个人资料
        Row#lesson-student-main(type="flex")
          Col#lesson-student-left(span="17")
            Tabs
              TabPane(label="课程") 课程
              TabPane(label="考试") 考试
              TabPane(label="成绩") 成绩
          Col#lesson-student-right(span="7") 其他的列表信息
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
#lesson-student-top {
  width: 100%;
  height: 240px;
  position: relative;
  #lesson-student-bg {
    width: inherit;
    height: 240px;
    border-radius: 4px 4px 0 0;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
}
#lesson-student-info {
  min-height: 120px;
  position: relative;
  #lesson-student-info-avatar {
    width: 150px;
    height: 150px;
    padding: 4px;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    top: -50px;
    left: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  #lesson-student-info-detail {
    margin-left: 190px;
    padding-top: 10px;
    #lesson-student-info-detail-name {
      display: inline-block;
      font-weight: 700;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  #lesson-student-info-control {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
#lesson-student-main {
  padding: 16px;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
