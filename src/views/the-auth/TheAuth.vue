<template lang="pug">
  #lesson-auth
    the-header
      Menu.lesson-auth-routes(slot="right", mode="horizontal", active-name="login")
        MenuItem(name="login", to="/auth/login") 登录
        MenuItem(name="register", to="/auth/register") 注册
    Layout#lesson-auth-main
      Content#lesson-auth-content
        Row#lesson-auth-content-main
          Col(span="24")
            transition(name="lesson-opacity", mode="out-in")
              router-view
</template>

<script>
import TheHeader from '_components/the-header'
export default {
  name: 'TheAuth',
  components: {
    TheHeader
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
  max-width: @lesson-normal-width;
  .lesson-margin-center;
  margin-top: 10px;
  #lesson-auth-content {
    background-color: white;
    #lesson-auth-content-main {
      width: @lesson-form-width;
      .lesson-margin-center;
      margin-top: @lesson-normal-height;
    }
  }
}
</style>
