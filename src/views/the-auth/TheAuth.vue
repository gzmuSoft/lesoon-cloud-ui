<template lang="pug">
  #lesson-auth
    the-header
      Menu.lesson-auth-routes(slot="right", mode="horizontal", :active-name="$route.name")
        MenuItem(name="login", :to="{name:'login'}") 登录
        MenuItem(name="register", :to="{name:'register'}") 注册
    Layout#lesson-auth-main
      transition(name="lesson-opacity", mode="out-in")
        router-view
</template>

<script>
import TheHeader from '_components/common/the-header'
export default {
  name: 'TheAuth',
  components: {
    TheHeader
  },
  data () {
    return {
      active: 'login'
    }
  },
  created () {
    // 保持menu的高亮状态
    this.active = this.$route.name
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.lesson-auth-routes {
  .lesson-flex-between;
  .lesson-auth-route {
    margin: 10px;
  }
}
#lesson-auth-main {
  .lesson-margin-center;
  margin-top: 10px;
  background-color: white;
}
</style>
