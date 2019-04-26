<template lang="pug">
  Layout#lesson-find
    Content#lesson-find-content
      Steps(:current="0")
        Step(title="找回方式")
        Step(title="信息验证")
        Step(title="密码修改")
        Step(title="找回结果")
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
#lesson-find {
  #lesson-find-content {
    max-width: @lesson-normal-width;
  }
}
</style>
