<template lang="pug">
  #lesson-teacher-analysis
    Tabs.lesson-teacher-analysis-tabs
      TabPane(label="全部")
        Form(label-position="left" :label-width="48")
          Row(:gutter="13")
            Col(span="5")
              FormItem.lesson-teacher-analysis-academic-year(label="学年：")
                Select
                  Option 2019-2020学年
                  Option 2018-2019学年
                  Option 2017-2018学年
                  Option 2016-2017学年
            Col(span="5")
              FormItem.lesson-teacher-analysis-semester(label="学期：")
                Select
                  Option 第一学期
                  Option 第二学期
                  Option 第三学期
            Col(span="5")
              FormItem.lesson-teacher-analysis-class(label="班级：")
                Select
                  Option 16级软工（1）班
                  Option 16级软工（2）班
                  Option 16级软工（3）班
                  Option 16级软工（4）班
            Col(span="5")
              Button(type="primary") 查询
        .lesson-teacher-analysis-course
          Card
            span.lesson-teacher-analysis-title(slot="title") 2019第二学期面向对象程序设计考试
            span.lesson-teacher-analysis-process(slot="extra") 【正在进行】
            Row.lesson-teacher-analysis-content1
              Col(span="10")
                p 考试题目：100题
                br
                p 考试时效：2019.06.11 00:00 - 2019.06.24  24:00
                br
                p 班级：软件工程（4）班
              Col(span="8")
                p 考试时长：120分钟
                br
                p 出题类型：抽题型
                br
                p 成绩公布： 2019.07.01  00:00
              Col(span="6")
                p 考试人数：50
                br
                p 出题老师：Lixinrui
                br
          span.lesson-teacher-analysis-information 查看&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试设置&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;编辑试题&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试统计&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试延期
        br
        .lesson-teacher-analysis-course
          Card
            span.lesson-teacher-analysis-title(slot="title") 2019第二学期C语言程序设计考试
            span.lesson-teacher-analysis-complete(slot="extra") 【 已完成】
            Row.lesson-teacher-analysis-content1
              Col(span="10")
                p 考试题目：100题
                br
                p 考试时效：2019.06.11 00:00 - 2019.06.24  24:00
                br
                p 班级：软件工程（4）班
              Col(span="8")
                p 考试时长：120分钟
                br
                p 出题类型：抽题型
                br
                p 成绩公布： 2019.07.01  00:00
              Col(span="6")
                p 考试人数：50
                br
                p 出题老师：Lixinrui
                br
          span.lesson-teacher-analysis-information 查看&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试设置&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;编辑试题&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试统计&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试延期
      TabPane(label="正在进行")
        .lesson-teacher-analysis-course
          Card
            span.lesson-teacher-analysis-title(slot="title") 2019第二学期面向对象程序设计考试
            span.lesson-teacher-analysis-process(slot="extra") 【正在进行】
            Row.lesson-teacher-analysis-content1
              Col(span="10")
                p 考试题目：100题
                br
                p 考试时效：2019.06.11 00:00 - 2019.06.24  24:00
                br
                p 班级：软件工程（4）班
              Col(span="8")
                p 考试时长：120分钟
                br
                p 出题类型：抽题型
                br
                p 成绩公布： 2019.07.01  00:00
              Col(span="6")
                p 考试人数：50
                br
                p 出题老师：Lixinrui
                br
          span.lesson-teacher-analysis-information 查看&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试设置&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;编辑试题&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试统计&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试延期
        br
      TabPane(label="已完成")
        .lesson-teacher-analysis-course
          Card
            span.lesson-teacher-analysis-title(slot="title") 2019第二学期C语言程序设计考试
            span.lesson-teacher-analysis-complete(slot="extra") 【 已完成】
            Row.lesson-teacher-analysis-content1
              Col(span="10")
                p 考试题目：100题
                br
                p 考试时效：2019.06.11 00:00 - 2019.06.24  24:00
                br
                p 班级：软件工程（4）班
              Col(span="8")
                p 考试时长：120分钟
                br
                p 出题类型：抽题型
                br
                p 成绩公布： 2019.07.01  00:00
              Col(span="6")
                p 考试人数：50
                br
                p 出题老师：Lixinrui
                br
          span.lesson-teacher-analysis-information 查看&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试设置&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;编辑试题&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试统计&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;考试延期
        br

  <!--.lesson-teacher-analysis-exam-->
    <!--P.lesson-teacher-analysis-exam-title 考试统计-->
    <!--span.lesson-teacher-analysis-exam-course 课程名称：2019第二学期面向对象程序设计考试-->
    <!--span.lesson-teacher-analysis-exam-persons 统计人数：50人-->
    <!--br-->
    <!--Tabs-->
      <!--TabPane(label="考试成绩情况分析")-->
        <!--Card.lesson-teacher-analysis-exam-grade-->
          <!--Form(label-position="left" :label-width="75")-->
            <!--Row(:gutter="13" type="flex" justify="space-around" class="code-row-bg")-->
              <!--Col(span="5")-->
                <!--FormItem.lesson-teacher-analysis-exam-studentsName(label="学生姓名：")-->
                  <!--Input(size="large" placeholder="请输入学生姓名")-->
              <!--Col(span="5")-->
                <!--FormItem.lesson-teacher-analysis-exam-group(label="小组：")-->
                  <!--Select-->
                    <!--Option 全部-->
              <!--Col(span="5")-->
                <!--Button(type="primary") 查询-->
              <!--Col(span="4")-->
                <!--Button(type="primary")  按小组导出-->
                <!--Button(type="primary")  导出全部-->

          <!--Table(ref='tables', editable, addable :loading='loadingFlag' v-model='tableData', :columns='columns',-->
          <!--@on-delete='handleDelete',-->
          <!--@on-save-edit='handleSave',-->
          <!--@on-start-edit='handleEdit',-->
          <!--@on-cancel-edit='handleCancel',-->
          <!--@on-add='handleAdd')-->

      <!--TabPane(label="学生答题分析")-->
      <!--TabPane(label="答题内容分析")-->

</template>

<script>

export default {
  name: 'TheAnalysis',
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
  /*.lesson-teacher-analysis-exam{*/
    /*margin-left: 80px;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-title{*/
    /*font-size: 18px;*/
    /*margin-left: -895px;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-course{*/
    /*margin-left: -495px;*/
    /*font-size: 14px;*/
    /*color: darkgray;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-persons{*/
    /*margin-left: 60px;*/
    /*font-size: 14px;*/
    /*color: darkgray;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-grade{*/
    /*margin-top: 400px;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-studentsName{*/
    /*width: 200px;*/
    /*margin-left: 10px;*/
  /*}*/
  /*.lesson-teacher-analysis-exam-group{*/
    /*margin-left: 10px;*/
    /*width: 200px;*/
  /*}*/
  .lesson-teacher-analysis-tabs{
    margin-left: 80px;
  }
  .lesson-teacher-analysis-academic-year{
    margin-left: 20px;
    width: 200px;
  }
  .lesson-teacher-analysis-semester{
    margin-left:40px;
    width: 200px;
  }
  .lesson-teacher-analysis-class{
    margin-left: 60px;
    width: 200px;
  }
  .lesson-teacher-analysis-title{
    font-weight: bold;
    margin-left: -680px;
  }
  .lesson-teacher-analysis-course{
    background: #eee;
    padding: 20px;
    margin-left: 20px;
    height: 220px;
  }
  .lesson-teacher-analysis-content1{
    text-align: left;
    padding-left: 20px;
  }
  .lesson-teacher-analysis-process{
    color: #3399ff;
    margin-right: 30px;
  }
  .lesson-teacher-analysis-complete{
    margin-right: 30px;
  }
  .lesson-teacher-analysis-information{
    float: right;
    padding-top: 1px;
  }
</style>
