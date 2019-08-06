<template lang="pug">
  #lesson-teacher
    drawer-form(v-model="modify", title="用户信息", :formItems="formItems", :formData="formData",
    @on-ok="handleModify")
    the-header
      UserInfo
    Row(type="flex")
      Col(span="20", offset="2")
        Card(:bordered="false", dis-hover)
          #lesson-teacher-info
            #lesson-teacher-info-avatar
              img(src="../../assets/headimg.jpg")
            #lesson-teacher-info-detail.lesson-text-left
              #lesson-teacher-info-detail-name Mos
            #lesson-teacher-info-control
              Button(@click="modify=true") 编辑个人资料
    Row#lesson-teacher-content(type="flex")
      Col(span="3" offset="2")
        Menu#lesson-teacher-menu(:menu="menu")
      Col(span="17")
        router-view#lesson-teacher-main
</template>

<script>
import Menu from '_components/the-user/menu'
import TheHeader from '_components/common/the-header'
import UserInfo from '_components/common/user-info'
import DrawerForm from '_components/common/drawer-form'
import teacher from '../../route/modules/teacher'
export default {
  name: 'TheTeacher',
  components: {
    Menu,
    TheHeader,
    DrawerForm,
    UserInfo
  },
  data () {
    return {
      routes: teacher.children,
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
          label: '老师姓名',
          name: 'name',
          readonly: true
        },
        {
          label: '手机号',
          name: 'phone',
          placeholder: '请输入手机号'
        },
        {
          label: '职称',
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
        class: '贵州民族大学 数据科学与信息工程学院 2016级 软件工程四班 软件工程四班软件工程四班'
      },
      menu: [
        {
          name: '课程管理',
          icon: '',
          submenu: [
            {
              name: '我的课程',
              icon: 'md-albums',
              route: '/teacher'
            },
            {
              name: '章节管理',
              icon: 'md-albums',
              route: '/teacher/section'
            }
          ]
        },
        {
          name: '考试管理',
          icon: '',
          submenu: [
            {
              name: '创建考试',
              icon: 'md-albums',
              route: '/teacher/examCreate'
            },
            {
              name: '组卷规则',
              icon: 'md-albums',
              route: '/teacher/examRule'
            },
            {
              name: '统计分析',
              icon: 'md-albums',
              route: '/teacher/analysis'
            }
          ]
        }
      ]
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
  #lesson-teacher{
    /*background: #f8f8f9;*/
  }
  #lesson-teacher-info {
    min-height: 120px;
    position: relative;
    #lesson-teacher-info-avatar {
      width: 120px;
      height: 120px;
      padding: 4px;
      border-radius: 8px;
      background: #fff;
      position: absolute;
      left: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    #lesson-teacher-info-detail {
      margin-left: 190px;
      padding-top: 10px;
      #lesson-teacher-info-detail-name {
        display: inline-block;
        font-weight: 700;
        font-size: 20px;
        vertical-align: middle;
      }
    }
    #lesson-teacher-info-control {
      position: absolute;
      bottom: 10px;
      left: 190px;
    }
  }
  #lesson-teacher-content{
    margin-top: 10px;
  }
  #lesson-teacher-main{
    background: #FFF;
  }
</style>
