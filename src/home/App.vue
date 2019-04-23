<template lang="pug">
  #lesson-home
    the-header
      .lesson-auth-routes(slot="right")
        Menu(mode="horizontal", active-name="1")
          MenuItem(name="1") 主页
          MenuItem(name="3") 院校
          MenuItem(name="4") 功能
          MenuItem(name="5") 课程
          Button(v-if='isAuth') 此处显示用户信息
          Button.lesson-home-route(type="info", @click="toAuth" v-else) 登录

</template>

<script>
import TheHeader from '_common/components/the-header'
import { routeAuth } from '_common/api/comm'
export default {
  name: 'lesson-home',
  components: {
    TheHeader
  },
  data () {
    return {
      isAuth: true
    }
  },
  created () {
    const _this = this
    _this.isAuth = _this.$store.getters.isAuth
  },
  methods: {
    toAuth () {
      routeAuth()
    }
  }
}
</script>

<style lang="less">
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
