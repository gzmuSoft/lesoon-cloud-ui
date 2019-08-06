<template lang="pug">
  #lesson-teacher-course
    Row
      Col(span="10" offset="1")
        Card.lesson-teacher-course-content.lesson-text-left
          .lesson-teacher-course-content-title(slot="title")
            span.title C语言
            span.title-2 38 课时
          .lesson-content
            aside.lesson-content-aside
              img.lesson-full-width.img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            .lesson-content-main
              p 授课老师：test
              p 考试次数：0次
              Button.lesson-teacher-course-btn(type="primary" ghost) 查  看
      Col(span="10" offset="1")
        Card.lesson-teacher-course-content.lesson-text-left
          .lesson-teacher-course-content-title(slot="title")
            span.title C语言
            span.title-2 38 课时
          .lesson-content
            aside.lesson-content-aside
              img.lesson-full-width.img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            .lesson-content-main
              p 授课老师：test
              p 考试次数：0次
              Button.lesson-teacher-course-btn(type="primary" ghost) 查  看
      Col(span="10" offset="1")
        Card.lesson-teacher-course-add
          Icon(custom="i-icon" type="md-add" size="125")
</template>

<script>

export default {
  name: 'TheCourse',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="less" scoped>
  @card-height: 200px;
  #less-teacher-tabs{
    left: 50px;
  }
  .lesson-teacher-course-content {
    .lesson-teacher-course-content-title {
      .title {
        font-weight: bolder;
      }
      .title-2 {
        float: right;
      }
    }
    .img{
      padding: 5px;
    }
    .lesson-teacher-course-btn{
      width: 70px;
      height: 25px;
      float: right;
    }
    .lesson-teacher-course-bar{
      display: inline;
    }
    .content-main {
      display: flex;
    }
  }
  .lesson-teacher-course-add,
  .lesson-teacher-course-content {
    padding: 5px;
    margin-bottom: 15px;
  }

</style>
