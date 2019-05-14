<template lang="pug">
  .lesson-social-button
    template(v-for='s in social')
      Button.lesson-social-button-main(shape="circle", :style="s.styles")
        Icon(:type="s.icon")
        | {{s.name}}
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    social: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-social-button-main {
  height: 32px;
  width: 32px;
  padding: 0;
  font-size: 15px;
}
</style>
