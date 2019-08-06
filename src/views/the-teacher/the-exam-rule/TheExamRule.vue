<template lang="pug">
  Form.lesson-exam-form
    Row.lesson-title-row
      p.lesson-title 设置考试信息
      span.lesson-exam-warn 部分考试信息仅老师可见，不在考卷中展示
    Divider
    Row.lesson-rule-info
      Row
        Col(span="11")
          FormItem(label="考试名称" :label-width="100")
            Input.lesson-rule-input(placeholder="填写考试名称")
      Row
        Col(span="11")
          FormItem(label="考试时效" :label-width="100")
            Col.lesson-time-add(span="11")
              DatePicker
            Col.lesson-contact(span="2") -
            Col.lesson-time-add(span="11")
              DatePicker
      Row
        Col(span="11")
          FormItem(label="考试时长" :label-width="100")
            Input.lesson-rule-input(placeholder="设置完成试卷所需时间")
      Row
        Col(span="11")
          FormItem(label="重复考试次数" :label-width="100")
            Input.lesson-rule-input(placeholder="设置可重复考试的次数")
        Col(span="9" :offset="1")
          p.lesson-proctice 注：填写0则默认不限制可反复练习的次数
      Row
        Col(span="11")
          FormItem(label="出卷类型" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="抽题型") 抽题型
              Radio.lesson-set2(label="整卷型") 整卷型
      Row
        Col(span="11")
          FormItem(label="成绩公布" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="立即公布") 立即公布
              Radio.lesson-set2(label="定时公布") 定时公布
      Row
        Col(span="11")
          FormItem(label="提交方式" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="单题提交") 单题提交
              Radio.lesson-set2(label="整卷提交") 整卷提交
      Row
        Col(span="11")
          FormItem(label="显示排名" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="是") 是
              Radio.lesson-set2(label="否") 否
      Row
        Col(span="11")
          FormItem(label="题目打乱" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="是") 是
              Radio.lesson-set2(label="否") 否
      Row
        Col(span="11")
          FormItem(label="选项打乱" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="是") 是
              Radio.lesson-set2(label="否") 否
      Row
        Col(span="11")
          FormItem(label="隐藏答案" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="是") 是
              Radio.lesson-set2(label="否") 否
      Row
        Col(span="11")
          FormItem(label="禁止查卷" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="是") 是
              Radio.lesson-set2(label="否") 否
      Row
        Col(span="11")
          FormItem(label="校方认证" :label-width="100")
            RadioGroup.lesson-radioGroup
              Radio.lesson-set1(label="需要") 需要
              Radio.lesson-set2(label="不需要") 不需要
      Row
        Col(span="21")
          FormItem(label="考试要求" :label-width="100")
            Input(placeholder="设置考试要求")
    br
    Row
      Col(span="21")
        Row
          Col(span="8" :offset="4")
            Button.lesson-return-button(type="primary" ghost) 返回
          Col(span="8")
            Button.lesson-save-button(type="primary" :offset="2") 保存
</template>

<script>
export default {
  name: 'TheExamRule'
}
</script>

<style scoped lang="less">
  .lesson-rule{
    left: 100px;
  }
  .lesson-rule-info{
    left: 100px;
  }
  .lesson-exam-form{
    left: 100px;
    padding: 20px;
  }
  .lesson-title-row{
    text-align: left;
  }
  .lesson-title{
    size: 20px;
  }
  .lesson-radioGroup{
    left: 80px;
  }
  .lesson-proctice{
    text-align: left;
    color: red;
    left: 20px;
  }
  .lesson-set1{
    left: -60px;
    float: left;
  }
  .lesson-set2{
    left: 30px;
  }
  .lesson-exam-warn{
    color: gray;
  }
  .lesson-return-button{
    width: 180px;
  }
  .lesson-save-button{
    width: 180px;
  }
</style>
