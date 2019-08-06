<template lang="pug">
  #lesson-teacher-create-exam
    Tabs.lesson-create-all(value="addExam")
      TabPane(label="添加考试" name="addExam")
        br
        br
        Form.lesson-exam-info
          Row.lesson-row(:gutter="10")
            Col(span="8")
              FormItem(label="课程名称" :label-width="60")
                Select.lesson-select
                  Option(v-for="item in courses" :value="item.id" :key="item.id") {{ item.name }}
            Col(span="8" :offset="3")
              FormItem(label="考试班级" :label-width="60")
                Select.lesson-select
                  Option(v-for="item in classes" :value="item.id" :key="item.id") {{ item.name }}
          Row.lesson-row(:gutter="10")
            Col(span="8")
              FormItem(label="考试时长" :label-width="60")
                Input(placeholder="设置考试考试时长") 分钟
            Col(span="8" :offset="3")
              FormItem(label="考试章节" :label-width="60")
                Input(placeholder="考试章节")
          Row.lesson-row(:gutter="10")
            Col(span="11")
              FormItem(label="考试时效" :label-width="60")
                Row
                  Col.lesson-time-add(span="11")
                    DatePicker
                  Col.lesson-contact(span="2") -
                  Col.lesson-time-add(span="11")
                    DatePicker
            Col(span="8")
              FormItem(label="考试次数" :label-width="60")
                Input(placeholder="设置考试次数") 次
          br
          br
          Row.lesson-row2(:gutter="10")
            Col(span="19")
              Button.lesson-addExam-button(type="success") 添加考试
      TabPane(label="已发布考试" name="publishedExam")
        Row.lesson-class(:gutter="10")
          span.lesson-class-span 班级
            Select.lesson-select
              Option(v-for="item in classes" :value="item.id" :key="item.id") {{ item.name }}
            Button
              Icon(type="ios-search")
        br
        Row.lesson-published
          Card.exam-info
            Form
              Row.lesson-text-left(:gutter="10")
                Col(span="7")
                  br
                  FormItem(label="出卷老师" :label-width="60")
                    p.lesson-item  李老师
                  FormItem(label="题目数量" :label-width="60")
                    span.lesson-item 100题
                    br
                  FormItem(label="提交方式" :label-width="60")
                    span.lesson-item 整卷提交
                Col(span="7")
                  br
                  FormItem(label="课程名称" :label-width="60")
                    p.lesson-item  JAVA编程基础
                  FormItem(label="考试时长" :label-width="60")
                    span.lesson-item 90分钟
                    br
                  FormItem(label="成绩公布" :label-width="60")
                    span.lesson-item 2019-06-11 00：00
                Col(span="10")
                  br
                  FormItem(label="考试章节" :label-width="60")
                    span.lesson-item 考试章节
                    br
                  FormItem(label="考试人数" :label-width="60")
                    span.lesson-item 200人
                    br
                  FormItem(label="考试时效" :label-width="60")
                    p.lesson-item  2019-06-11 00：00 - 2019-06-12 00：00
              Row.lesson-doing
                Button(type="primary") 查看试卷详情
      TabPane(label="待发布考试" name="releasedExam")
        Row.lesson-released(:gutter="10")
          Card.exam-info
            Form
              Row(:gutter="10")
                Col(span="7")
                  FormItem(label="考试班级" :label-width="60")
                    Select.lesson-select
                      Option(v-for="item in classes" :value="item.id" :key="item.id") {{ item.name }}
                Col(span="7")
                  FormItem(label="课程名称" :label-width="60")
                    Select.lesson-select
                      Option(v-for="item in courses" :value="item.id" :key="item.id") {{ item.name }}
                Col(span="10")
                  FormItem(label="考试时效" :label-width="60")
                    Row
                      Col.lesson-time(span="11")
                        DatePicker
                      Col.lesson-contact(span="2") -
                      Col.lesson-time(span="11")
                        DatePicker
              Row.lesson-text-left
                Col(span="6")
                  br
                  FormItem(label="题目数量" :label-width="60")
                    p.lesson-item 100题
                  FormItem(label="提交方式" :label-width="60")
                    span.lesson-item 整卷提交
                Col(span="6")
                  br
                  FormItem(label="考试时长" :label-width="60")
                    p.lesson-item 90分钟
                  FormItem(label="成绩公布" :label-width="60")
                    span.lesson-item 2019-06-11 00：00
                Col(span="7")
                  br
                  FormItem(label="考试章节" :label-width="60")
                    p.lesson-item 考试章节
                  FormItem(label="考试人数" :label-width="60")
                    span.lesson-item 200人
                Col.lesson-button(span="5")
                  br
                  Button(type="primary") 考试规范
                  br
                  br
                  Button(type="success") 发布考试
</template>

<script>
export default {
  name: 'TheExamCreate',
  components: {
  },
  data () {
    return {
      courses: [ {
        id: 1,
        name: 'JAVA编程基础'
      }, {
        id: 2,
        name: 'C语言'
      }, {
        id: 3,
        name: 'Python可视化实现'
      }, {
        id: 4,
        name: 'C++'
      }],
      classes: [{
        id: 1,
        name: '2016级软件工程1班'
      }, {
        id: 2,
        name: '2016级软件工程2班'
      }, {
        id: 3,
        name: '2017级软件工程1班'
      }, {
        id: 4,
        name: '2017级软件工程2班'
      }, {
        id: 5,
        name: '2016级计算机科学与技术2班'
      }]
    }
  }
}
</script>

<style lang="less" scoped>

  /*创建考试*/
  .lesson-create-all{
    left: 100px;
  }
  .lesson-exam-info{
    top: 100px;
  }
  lesson-select-add{
    width: 240px;
  }
  .lesson-create-type{
    text-align: left;
    bottom: 0px;
  }
  lesson-class-span{
    left: 160px;
  }
  .lesson-time{
    /*width: 100px;*/
  }
  .lesson-addExam-button{
    align-self: center;
    top: 18px;
  }
  .lesson-class{
    text-align: left;
    left: 20px;
  }
  .lesson-published{
  }
  .lesson-select{
    width: 200px;
  }
  .lesson-released{
    top: 20px;
  }
  .lesson-contact{
    text-align: center;
    width: 10px;
  }
  .lesson-doing{
    text-align: right;
  }
  .lesson-item{
    color: darkgray;
  }
</style>
