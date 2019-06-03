<template lang="pug">
  .lesson-course
    Row.lesson-text-left(:gutter="32")
      Col(span="12")
        Card
          img.lesson-full-width(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
          br
          span.lesson-course-tip.lesson-course-success 已完成
          span.lesson-course-title 智能时代下的创新创业实战
      Col(span="12")
        Card
          img.lesson-full-width(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
          br
          span.lesson-course-tip.lesson-course-error 正在进行
          span.lesson-course-title 智能时代下的创新创业实战

</template>

<script>
export default {
  name: 'Course'
}
</script>

<style lang="less" scoped>
.lesson-course {
  background: white;
  .lesson-course-title {
    font-size: 18px;
  }
  .lesson-course-tip {
    border-radius: 32px;
    padding: 1px 10px;
    float: right;
  }
  .lesson-course-success {
    color: white;
    background-color: @success-color;
  }
  .lesson-course-error{
    background-color: @primary-color;
    color: white;
  }
  .lesson-course-icon {
    font-size: 22px;
  }
}
</style>
