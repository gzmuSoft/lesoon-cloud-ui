<template lang="pug">
  #lesson-examination
    the-header
      UserInfo(slot="right")
    Row#lesson-examination-content
      Col#lesson-examination-title(offset="3", span="18") 第五章 数组与广义表
      Col#lesson-examination-tip(offset="3", span="18")
        Alert(type="error" show-icon) 注意事项
          template(slot="desc")
            p 考试时间为：两小时，逾期将会自动提交试卷
      Col#lesson-examination-main.lesson-text-left(offset="5", span="14")
        MultipleChoice(:multipleChoice="singleSel")
        MultipleChoice(:multipleChoice="multiSel")
        MultipleChoice(:multipleChoice="judgement")

</template>

<script>
import TheHeader from '_components/common/the-header'
import UserInfo from '_components/common/user-info'
import MultipleChoice from '_components/the-student/multiple-choice'

export default {
  name: 'TheExamination',
  components: {
    TheHeader,
    UserInfo,
    MultipleChoice
  },
  data: () => ({
    singleSel: {
      component: 'radio-group',
      child: 'radio',
      vertical: true,
      title: '一. 单选题',
      topic: [{
        name: '以下对一维数组定义合理的是？',
        answer: '',
        options: [
          { name: 'A. char a(10)', value: 1 },
          { name: 'B. int  a[0..100]', value: 2 },
          { name: 'C. int  a[5]', value: 3 },
          { name: 'D. int  k=10; int a[k]', value: 4 }
        ]
      }, {
        name: '以下对一维数组定义合理的是？',
        answer: '',
        options: [
          { name: 'A. char a(10)', value: 1 },
          { name: 'B. int  a[0..100]', value: 2 },
          { name: 'C. int  a[5]', value: 3 },
          { name: 'D. int  k=10; int a[k]', value: 4 }
        ]
      }]
    },
    multiSel: {
      component: 'checkbox-group',
      child: 'checkbox',
      vertical: true,
      title: '二. 多选题',
      topic: [{
        name: '以下对一维数组定义合理的是？',
        answer: [],
        options: [
          { name: 'A. char a(10)', value: 1 },
          { name: 'B. int  a[0..100]', value: 2 },
          { name: 'C. int  a[5]', value: 3 },
          { name: 'D. int  k=10; int a[k]', value: 4 }
        ]
      }, {
        name: '以下对一维数组定义合理的是？',
        answer: [],
        options: [
          { name: 'A. char a(10)', value: 1 },
          { name: 'B. int  a[0..100]', value: 2 },
          { name: 'C. int  a[5]', value: 3 },
          { name: 'D. int  k=10; int a[k]', value: 4 }
        ]
      }]
    },
    judgement: {
      component: 'radio-group',
      child: 'radio',
      vertical: true,
      title: '三. 判断题',
      button: 'button',
      style: {
        'display': 'inherit'
      },
      topic: [{
        name: '以下对一维数组定义合理的是？',
        answer: '',
        options: [
          { name: '对', value: 1 },
          { name: '错', value: 2 }
        ]
      }, {
        name: '以下对一维数组定义合理的是？',
        answer: '',
        options: [
          { name: '对', value: 1 },
          { name: '错', value: 2 }
        ]
      }]
    }
  })

}
</script>

<style lang="less" scoped>
#lesson-examination {
  #lesson-examination-content {
    #lesson-examination-title {
      font-size: 1.5rem;
    }
    #lesson-examination-tip {
      font-size: 1rem;
      .lesson-text-left;
      margin-top: 1rem;
    }
  }
}
</style>
