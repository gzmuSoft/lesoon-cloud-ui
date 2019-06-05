<template lang="pug">
  .lesson-course
    Row.lesson-text-left(:gutter="32")
      Col(span="8")
        Card
          p(slot="title") c语言程序设计
            span.lesson-course-tip.lesson-course-success 已结课
          Row
            Col(span="12")
              //div.lesson-course-left
              img.lesson-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="12")
              br
              p 指导老师：Mos
              br
              p 课程学时：32+32
              br
              Button(type="primary" ghost) 进入练习
      Col(span="8")
        Card
          p(slot="title") c语言程序设计
            span.lesson-course-tip.lesson-course-error 未结课
          Row
            Col(span="12")
              //div.lesson-course-left
              img.lesson-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="12")
              br
              p 指导老师：Mos
              br
              p 课程学时：32+32
              br
              Button(type="primary" ghost) 进入练习
      Col(span="8")
        Card
          p(slot="title") c语言程序设计
            span.lesson-course-tip.lesson-course-error 未结课
          Row
            Col(span="12")
              //div.lesson-course-left
              img.lesson-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="12")
              br
              p 指导老师：Mos
              br
              p 课程学时：32+32
              br
              Button(type="primary" ghost) 进入练习

</template>

<script>
export default {
  name: 'Course'
}
</script>

<style lang="less" scoped>
.lesson-course {
  .lesson-course-title {
    font-size: 18px;
  }
  .lesson-course-tip {
    font-weight: normal;
    border-radius: 5px;
    padding: 5px 10px;
    float: right;
  }
  .lesson-course-img{
    width: 120px;
    height: 150px;
  }
  .lesson-course-success{
    color: lightseagreen;
    background: rgba(255,255,255,0.2);
  }
  .lesson-course-error{
    background-color: rgba(255,255,255,0.2);
    color: dodgerblue;
  }
  .lesson-course-icon {
    font-size: 22px;
  }
  .lesson-course-left {
    text-align: left;
  }
  .lesson-course-right{
    text-align: right;
  }
}
</style>
