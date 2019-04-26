<template lang="pug">
    Menu.lesson-auth-routes(:active-name="active" mode="horizontal" @on-select="changeActive")
      MenuItem(name="email" ) 通过邮箱找回
      MenuItem(name="phone" ) 通过手机找回
</template>
<script>
export default {
  name: 'the-find',
  data () {
    return {
      active: 'email'
    }
  },
  methods: {
    changeActive (active) {
      console.log(active)
      this.active = active
    }
  }
}
</script>
<style lang="less" scoped>
#lesson-find-main-content {
  text-align: left;
  padding: 0 16px;
}
#lesson-find-main-title {
  font-weight: bolder;
}
</style>
