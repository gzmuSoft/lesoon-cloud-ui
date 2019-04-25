<template lang="pug">
  #lesson-home
    the-header
      .lesson-auth-routes(slot="right")
        Menu(mode="horizontal", active-name="1")
          MenuItem(name="1") 主页
          MenuItem(name="3") 院校
          MenuItem(name="4") 功能
          MenuItem(name="5") 课程
          Button.lesson-home-route(type="info", @click="toLogin") 登录
    Button(@click="loginStatue") test
</template>

<script>
import TheHeader from '_components/the-header'
import { toAuth } from '_api/comm'

export default {
  name: 'the-home',
  components: {
    TheHeader
  },
  methods: {
    toLogin () {
      if (this.$store.getters['auth/isAuth']) {
        this.$Message.warning('你已经登录过了！')
      } else {
        toAuth()
      }
    },
    loginStatue () {
      console.log(localStorage)
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .lesson-home-route {
    margin-left: 10px;
  }
}
</style>
