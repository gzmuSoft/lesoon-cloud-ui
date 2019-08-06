<template lang="pug">
  .lesson-exam
    div.lesson-exam-select
      span 全部
      Divider(type="vertical")
      a(href="#") 未完成
      Divider(type="vertical")
      a(href="#") 已完成
      br
    Card.lesson-exam-item
      Row
        Col(span="5")
          img.lesson-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
        Col(span="8")
          Row.lesson-exam-title
            span C语言程序设计
          Row
            Col.lesson-exam-tip(span="12")
              br
              span 发布老师：啦啦啦
              br
              br
              span 题目数量：25
              br
              br
              span 总  分  数：100
            Col(span="12")
              br
              span 发布时间：2019-06-04
              br
              br
              span 截止时间：
              span.lesson-exam-error 2019-06-08
              br
              br
              Button(type="primary" ghost) 进入考试
        Col(span="6" offset="3")
          img.lesson-exam-icon-error(src="../../../assets/lesson-exam-error.png")
          br
          span.lesson-exam-error 未完成
          Divider(type="vertical")
          span.lesson-exam-submitnum 18人已提交
    Card.lesson-exam-item
      Row
        Col(span="5")
          img.lesson-course-img(src="http://image.zhihuishu.com/zhs/createcourse/course/201805/62c7b3605a7940e299ccca0654a78daa_s2.png")
        Col(span="8")
          Row.lesson-exam-title
            span C语言程序设计半期第一次测试
          Row
            Col.lesson-exam-tip(span="12")
              br
              span 发布老师：啦啦啦
              br
              br
              span 题目数量：25
              br
              br
              span 总  分  数：100
            Col(span="12")
              br
              span 发布时间：2019-06-04
              br
              br
              span 截止时间：2019-06-08
              br
              br
              Button(type="primary" ghost) 查看详情
        Col(span="6" offset="3")
          i-circle.lesson-exam-scord(:percent="80" :stroke-width="5")
            span.demo-Circle-inner 80
          br
          span.lesson-exam-success 已完成
          Divider(type="vertical")
          span.lesson-exam-submitnum 18人已提交
</template>

<script>
export default {
  name: 'Exam'
}
</script>

<style lang="less" scoped>
.lesson-exam{
  .lesson-exam-select{
    font-size: 14px;
  }
  .lesson-exam-item{
    margin-top: 10px;
  }
  .lesson-course-img{
    float: left;
    margin-left: 10px;
    margin-top: 5px;
    width: 120px;
    height: 150px;
  }
  .lesson-exam-tip{
    text-align: left;
  }
  .lesson-exam-title{
    text-align: left;
    font-weight: bold;
    font-size: 16px;
  }
  .lesson-exam-icon-error {
    margin-top: 10px;
  }
  .lesson-exam-success{
    color: dodgerblue;
  }
  .lesson-exam-error{
    color: crimson;
  }
  .lesson-exam-line{
    margin-left: 2px;
    margin-right: 2px;
    color: #5f5f5f;
  }
  .lesson-exam-scord{
    margin-top: 10px;
  }
  .demo-Circle-inner{
   font-size: 24px;
  }
}
</style>
