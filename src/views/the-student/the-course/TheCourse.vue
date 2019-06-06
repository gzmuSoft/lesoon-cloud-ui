<template lang="pug">
  Row.lesson-course.lesson-text-left(:gutter="10")
    template(v-for='item in courses')
      Col(span="8")
        Card
          p.lesson-course-title {{ item.name }}
            span.lesson-course-tip(:class="[item.status ? 'lesson-course-finished' : 'lesson-course-unfinished']")
              | {{ item.status ? '已结课' : '未结课' }}
          Row
            Col(span="12")
              img.lesson-course-img(:src="item.img")
            Col(span="12")
              br
              p 指导老师：{{ item.teacher }}
              br
              p 基础学时：{{ item.period }}
              br
              Button(type="primary" ghost) 进入练习
              Button(type="success" ghost) 进入考试

</template>

<script>
export default {
  name: 'TheCourse',
  data () {
    return {
      courses: [
        {
          name: 'Java 程序设计',
          status: true,
          teacher: 'test',
          period: 1,
          img: 'http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png'
        },
        {
          name: 'Java 程序设计',
          status: true,
          teacher: 'test',
          period: 1,
          img: 'http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png'
        },
        {
          name: 'Java 程序设计',
          status: false,
          teacher: 'test',
          period: 1,
          img: 'http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png'
        }
      ]
    }
  }
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
    .lesson-full-width;
    padding-right: 10px;
    height: 150px;
  }
  .lesson-course-finished{
    color: lightseagreen;
  }
  .lesson-course-unfinished{
    color: dodgerblue;
  }
  .lesson-course-icon {
    font-size: 22px;
  }
}
</style>
