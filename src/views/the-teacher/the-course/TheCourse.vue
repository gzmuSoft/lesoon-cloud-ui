<template lang="pug">
  #lesson-teacher-course
    Tabs#less-teacher-tabs
      TabPane(label="正在进行的课程" name="name1")
         span.lesson-teacher-course-class1 16级软工（1）班 |
         span.lesson-teacher-course-class2 16级软工（2）班  |   16级软工（3）班  |   16级软工（4）班
    br
    Row
      Col(span="6" offset="1")
        Card.lesson-teacher-course-content
          Row
            Col(span="10")
              img.lesson-teacher-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="14")
              p.lesson-teacher-course-title C语言
              span 授课老师：魏无羡
              br
              span 课   时：30个课时
              br
              span 考试次数：0次
      Col(span="6" offset="1")
        Card.lesson-teacher-course-content
          Row
            Col(span="10")
              img.lesson-teacher-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="14")
              p.lesson-teacher-course-title C语言
              span 授课老师：魏无羡
              br
              span 课   时：30个课时
              br
              span 考试次数：0次
      Col(span="6" offset="1")
        Card.lesson-teacher-course-content
          Row
            Col(span="10")
              img.lesson-teacher-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="14")
              p.lesson-teacher-course-title C语言
              span 授课老师：魏无羡
              br
              span 课   时：30个课时
              br
              span 考试次数：0次
    br
    Row
      Col(span="6" offset="1")
        Card.lesson-teacher-course-content
          Row
            Col(span="10")
              img.lesson-teacher-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="14")
              p.lesson-teacher-course-title C语言
              span 授课老师：魏无羡
              br
              span 课   时：30个课时
              br
              span 考试次数：0次
      Col(span="6" offset="1")
        Card.lesson-teacher-course-content
          Row
            Col(span="10")
              img.lesson-teacher-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
            Col(span="14")
              p.lesson-teacher-course-title C语言
              span 授课老师：魏无羡
              br
              span 课   时：30个课时
              br
              span 考试次数：0次
      Col(span="6" offset="1")
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
  #less-teacher-tabs{
    left: 50px;
  }
  .lesson-teacher-course-img{
    width: 90px;
    height: 120px;
  }
  .lesson-teacher-course-content{
    height: 160px;
  }
  .lesson-teacher-course-add{
    height: 160px;
    align-content: center;
  }
</style>
