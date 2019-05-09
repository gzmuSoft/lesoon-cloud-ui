<template lang="pug">
  #lesson-user-info
    Button.lesson-home-route(v-if="!isAuth", type="info", :to="{ name: 'login' }") 登录
    Button.lesson-home-route(v-if="!isAuth", type="success", :to="{ name: 'register' }") 注册
    Dropdown(v-else, trigger="click", @on-click="handleEvent")
      Avatar.lesson-cursor-pointer
      DropdownMenu#lesson-user-menu(slot="list")
        DropdownItem(v-if="isAdmin", name="admin")
          Icon.lesson-animation-rotate(type="ios-settings-outline")
          span 管理
        DropdownItem(v-else, name="user")
          Icon(type="ios-person-outline")
          span 个人信息
        DropdownItem(name="notice")
          Icon(type="ios-notifications-outline")
          span 通知
        DropdownItem(divided, name="exit")
          Icon(type="ios-paper-plane-outline")
          span 退出登录
</template>

<script>
import { mapGetters } from 'vuex'
import { routeAdmin } from '_utils/util'

export default {
  name: 'user-info',
  computed: {
    ...mapGetters('auth', [
      'isAuth',
      'isAdmin'
    ])
  },
  methods: {
    handleEvent (name) {
      console.log(name)
      if (name === 'admin') routeAdmin()
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-user-info {
  display: inline;
  .lesson-home-route {
    margin-left: 10px;
  }
}
.ivu-dropdown-item {
  font-size: @lesson-normal-font-size !important;
  padding: 15px;
  .lesson-text-left;
  .ivu-icon {
    font-size: @lesson-normal-font-size + 5 !important;
  }
  span {
    padding-left: 5px;
  }
}
</style>
