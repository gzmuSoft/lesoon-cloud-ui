<template lang="pug">
  #lesson-teacher
    Row(type="flex")
      Col(span="4", offset="4")
        Menu#lesson-teacher-menu(:menu="menu")
      Col(span="12")
        router-view
</template>

<script>
import Menu from '_components/the-user/menu'
export default {
  name: 'TheTeacher',
  components: {
    Menu
  },
  data () {
    return {
      menu: [
        {
          name: '课程管理',
          icon: '',
          submenu: [
            {
              name: '我的课程',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '教学计划',
              icon: 'md-albums',
              route: '/student'
            }
          ]
        },
        {
          name: '考试管理',
          icon: '',
          submenu: [
            {
              name: '发布考试',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '考试统计',
              icon: 'md-albums',
              route: '/student'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #lesson-teacher-menu{
    margin-top: 24px;
  }
</style>
