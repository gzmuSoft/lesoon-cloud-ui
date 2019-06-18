<!--
<template lang="pug">
  #lesson-teacher-section  section
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

</style>
-->

<template lang="pug">
  #lesson-teacher-course-particulars
    Divider.lesson-teacher-course-particulars-line
      span.lesson-teacher-course-class1 全部|
      span.lesson-teacher-course-class2 16级软工（1）班 |  16级软工（2）班  |  16级软工（3）班  |  16级软工（4）班
    br
    Row
      Col(span="8" offset="1")
        Card.lesson-teacher-course-content
          .lesson-teacher-course-words
            p.lesson-teacher-course-classname 班    级：16软工（1）班
            br
            p 班级人数：48人
            p 重修人数：3人
            p 考试进度：
            Progress(percent="25" status="active")
            p 练习进度：
            Progress(percent="35" status="active")
            p 作业进度：
            Progress(percent="45" status="active")
      Col(span="8" offset="1")
        Card.lesson-teacher-course-content
          .lesson-teacher-course-words
            p.esson-teacher-course-classname 班    级：16软工（1）班
            br
            p 班级人数：48人
            p 重修人数：3人
            .esson-teacher-course-strip
              p 考试进度：
              Progress(percent="25" status="active")
              p 练习进度：
              Progress(percent="35" status="active")
              p 作业进度：
              Progress(percent="45" status="active")
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
  .lesson-teacher-course-particulars-line{
  }
  .lesson-teacher-course-words{
    text-align: left;
  }
  .lesson-teacher-course-content{
    height: 230px;
  }
  .esson-teacher-course-classname{
    font-size: 16px;
  }
</style>
