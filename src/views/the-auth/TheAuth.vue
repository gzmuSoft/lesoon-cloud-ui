<template lang="pug">
  #lesson-auth
    vue-particles(
      color="#797981"
      shapeType="star"
      :particleOpacity="0.4"
      :particleSize="4"
      linesColor="#b0b4b9"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      clickMode="remove")
    the-header
      Menu.lesson-auth-routes(slot="right", mode="horizontal", :active-name="$route.name")
        MenuItem(name="login", :to="{name:'login'}") 登录
        MenuItem(name="register", :to="{name:'register'}") 注册
    Layout#lesson-auth-main
      transition(name="lesson-opacity", mode="out-in")
        router-view
</template>

<script>
import TheHeader from '_components/the-header'
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
