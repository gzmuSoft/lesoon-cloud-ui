<template lang="pug">
  .lesson-course
    Row.lesson-text-left(:gutter="32")
      Col(span="12")
        Card
          img.lesson-full-width(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
          br
          span.lesson-course-title 智能时代下的创新创业实战
      Col(span="12")
        Card
          img.lesson-full-width(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
          br
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
    font-size: 20px;
  }
}
</style>
