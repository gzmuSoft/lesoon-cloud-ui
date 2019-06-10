<template lang="pug">
  #lesson-student
    drawer-form(v-model="modify", title="用户信息", :formItems="formItems", :formData="formData",
      @on-ok="handleModify")
    the-header
      UserInfo
    Row(type="flex")
      Col(span="16", offset="4")
        Card(:bordered="false", dis-hover)
          #lesson-student-top
            #lesson-student-bg(:style="{'background-image': 'url(' + require('_assets/other/background.jpg') + ')'}")
          #lesson-student-info
            #lesson-student-info-avatar
              img(src="https://resources.echocow.cn/avatar/head.jpg")
            #lesson-student-info-detail.lesson-text-left
              #lesson-student-info-detail-name Echo
            #lesson-student-info-control
              Button(@click="modify=true") 编辑个人资料
        Row#lesson-student-main(type="flex")
          Col#lesson-student-left(span="24")
            Tabs(@on-click="handleChange")
              template(v-for="route in routes")
                TabPane(:label="route.meta.title")
                  router-view
</template>

<script>
import TheHeader from '_components/common/the-header'
import UserInfo from '_components/common/user-info'
import DrawerForm from '_components/common/drawer-form'
import DynamicForm from '_components/common/dynamic-form'
import studentRoute from '_route/modules/student'

export default {
  name: 'the-student',
  components: {
    TheHeader,
    UserInfo,
    DrawerForm,
    DynamicForm
  },
  data () {
    return {
      routes: studentRoute.children,
      modify: false,
      formItems: [
        {
          label: '用户名',
          name: 'name',
          placeholder: '请输入您的用户名'
        },
        {
          label: '邮箱',
          name: 'email',
          placeholder: '请输入邮箱',
          type: 'email'
        },
        {
          label: '学生姓名',
          name: 'name',
          readonly: true
        },
        {
          label: '手机号',
          name: 'phone',
          placeholder: '请输入手机号'
        },
        {
          label: '所属班级',
          span: 24,
          name: 'class',
          labelPosition: 'left',
          component: 'p'
        }
      ],
      formData: {
        name: 'admin',
        email: '123456@163.com',
        phone: '13712341234',
        class: '贵州民族大学 数据科学与信息工程学院 2016级 软件工程二班 软件工程二班软件工程二班'
      }
    }
  },
  methods: {
    handleChange (name) {
      this.$router.push(this.routes[name])
    },
    handleModify (status, formDate) {
      // 未修改的情况
      if (status) {
        this.$Message.success('啥都没做')
        return
      }
      // 已修改的情况
      this.$Message.success('保存了修改')
      this.formData = this._.cloneDeep(formDate)
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-student{
  background: #f8f8f9;
}
#lesson-student-top {
  width: 100%;
  height: 240px;
  position: relative;
  #lesson-student-bg {
    width: inherit;
    height: 240px;
    border-radius: 4px 4px 0 0;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
}
#lesson-student-info {
  min-height: 120px;
  position: relative;
  #lesson-student-info-avatar {
    width: 150px;
    height: 150px;
    padding: 4px;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    top: -50px;
    left: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  #lesson-student-info-detail {
    margin-left: 190px;
    padding-top: 10px;
    #lesson-student-info-detail-name {
      display: inline-block;
      font-weight: 700;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  #lesson-student-info-control {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
#lesson-student-main {
  padding: 16px;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
