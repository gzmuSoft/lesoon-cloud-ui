
<!--<template lang="pug">-->
<!--  #lesson-teacher-section  section-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'TheSection',-->
<!--  components: {-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      //-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->

<!--</style>-->

<!--<template lang="pug">-->
<!--  #lesson-teacher-course-particulars-->
<!--    Divider.lesson-teacher-course-particulars-line-->
<!--      a(href="#") 全部-->
<!--      Divider(type="vertical" size="small")-->
<!--      span 16级软工（1）班-->
<!--      Divider(type="vertical" size="small")-->
<!--      span 16级软工（2）班-->
<!--      Divider(type="vertical" size="small")-->
<!--      span 16级软工（3）班-->
<!--      Divider(type="vertical" size="small")-->
<!--      span 16级软工（4）班-->

<!--    br-->
<!--    br-->
<!--    br-->
<!--    p.lesson-teacher-course-detail 授课详情:-->
<!--    br-->
<!--    br-->
<!--    br-->
<!--    Row-->
<!--      Col(span="10" offset="2")-->
<!--        Card.lesson-teacher-course-content-->
<!--          .lesson-teacher-course-words-->
<!--            p.lesson-teacher-course-classname 班    级：16软工（1）班-->
<!--            br-->
<!--            p 班级人数：48人-->
<!--            p 重修人数：3人-->
<!--            p 授课老师：test-->
<!--            p 考试进度：-->
<!--            Progress(percent="25" status="active")-->
<!--            p 练习进度：-->
<!--            Progress(percent="35" status="active")-->
<!--            p 作业进度：-->
<!--            Progress(percent="45" status="active")-->
<!--      Col(span="10" offset="2")-->
<!--        Card.lesson-teacher-course-content-->
<!--          .lesson-teacher-course-words-->
<!--            p.lesson-teacher-course-classname 班    级：16软工（2）班-->
<!--            br-->
<!--            p 班级人数：48人-->
<!--            p 重修人数：3人-->
<!--            p 授课老师：test-->
<!--            .esson-teacher-course-strip-->
<!--              p 考试进度：-->
<!--              Progress(percent="25" status="active")-->
<!--              p 练习进度：-->
<!--              Progress(percent="35" status="active")-->
<!--              p 作业进度：-->
<!--              Progress(percent="45" status="active")-->
<!--        br-->
<!--    Row-->
<!--      Col(span="10" offset="2")-->
<!--        Card.lesson-teacher-course-content-->
<!--          .lesson-teacher-course-words-->
<!--            p.lesson-teacher-course-classname 班    级：16软工（3）班-->
<!--            br-->
<!--            p 班级人数：48人-->
<!--            p 重修人数：3人-->
<!--            p 考试进度：-->
<!--            p 授课老师：test-->
<!--            Progress(percent="25" status="active")-->
<!--            p 练习进度：-->
<!--            Progress(percent="35" status="active")-->
<!--            p 作业进度：-->
<!--            Progress(percent="45" status="active")-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'TheSection',-->
<!--  components: {-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      //-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--  .lesson-teacher-course-words{-->
<!--    text-align: left;-->
<!--  }-->
<!--  .lesson-teacher-course-content{-->
<!--    height: 260px;-->
<!--  }-->
<!--  .lesson-teacher-course-classname{-->
<!--    font-size: 16px;-->
<!--  }-->
<!--  .lesson-teacher-course-detail{-->
<!--    font-size: 18px;-->
<!--    text-align: left;-->
<!--  }-->
<!--</style>-->

<template lang="pug">
  #lesson-teacher-course1
    .lesson-teacher-course-classes
        span 全部
        Divider(type="vertical" size="small")
        a(href="#") 16级软工（1）班
        Divider(type="vertical" size="small")
        span 16级软工（2）班
        Divider(type="vertical" size="small")
        span 16级软工（3）班
        Divider(type="vertical" size="small")
        span 16级软工（4）班
        Divider
        br
        br
    Row
      Col(span="22" offset="2")
          p.lesson-teacher-course-title 课程名称：java基础
          br
          br
    Row
      Col(span="4" offset="2")
        .lesson-teacher-course-words
          p 授课老师：test
          br
          p 课   时：38个课时
          br
          p 课程类型：专业必修
          br
          p 考试次数：5次
      Col(span="5" offset="2")
      .lesson-teacher-course-circle
          i-circle.lesson-teacher-course-scord(percent="80" stroke-width="5")
            span.lesson-teacher-course-circle-inner 80
          br
      Col(span="12" offset="2")
    br
    br
    br
    br
    br
    Row
      Col(span="10")
          p.lesson-teacher-course-information 学生信息
      Col(span="10" offset="2")
        Button.lesson-teacher-course-button(type="primary" ghost) 添加学生

    Divider
</template>

<script>

export default {
  name: 'TheSection',
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
  .lesson-teacher-course-classes{
     font-size: 14px;
  }
  .lesson-teacher-course-words{
    text-align: left;
  }
  .lesson-teacher-course-title{
    font-size: 22px;
    text-align: left;
  }
  .lesson-teacher-course-words{
    font-size: 14px;
  }
  .lesson-teacher-course-circle-inner{
    font-size: 24px;
  }
  .lesson-teacher-course-scord{
    text-align: left;
  }
  .lesson-teacher-course-circle{
    text-align: left;
  }
  .lesson-teacher-course-information{
    text-align: left;
    font-size: 16px;
  }
  .lesson-teacher-course-button{
    text-align: right;
  }

</style>
