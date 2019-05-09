<template lang="pug">
  #lesson-user-info
    Button.lesson-home-route(v-if="!isAuth", type="info", :to="{ name: 'login' }") 登录
    Button.lesson-home-route(v-if="!isAuth", type="success", :to="{ name: 'register' }") 注册
    Dropdown(v-else, trigger="click")
      Avatar.lesson-cursor-pointer
      DropdownMenu#lesson-user-menu(slot="list")
        DropdownItem(v-if="isAdmin")
          Icon.lesson-animation-rotate(type="ios-settings-outline")
          spam 管理
        DropdownItem(v-else)
          Icon(type="ios-person-outline")
          spam 个人信息
        DropdownItem
          Icon(type="ios-notifications-outline")
          spam 通知
        DropdownItem(divided)
          Icon(type="ios-paper-plane-outline")
          spam 退出登录
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-info',
  computed: {
    ...mapGetters('auth', [
      'isAuth',
      'isAdmin'
    ])
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
  padding: 12px;
  .lesson-text-left;
  .ivu-icon {
    font-size: @lesson-normal-font-size + 5 !important;
  }
  span {
    padding-left: 5px;
  }
}
</style>
