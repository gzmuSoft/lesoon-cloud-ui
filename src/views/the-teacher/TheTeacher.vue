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
              name: '课程',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '教程',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '教师',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '学生',
              icon: 'md-albums',
              route: '/student'
            }
          ]
        },
        {
          name: '学生管理',
          icon: '',
          submenu: [
            {
              name: '哈哈哈',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '嘻嘻嘻',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '略略略',
              icon: 'md-albums',
              route: '/student'
            },
            {
              name: '哦吼吼',
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
