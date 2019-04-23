<template lang="pug">
  Affix
    #lesson-header
      #lesson-header-left
        slot.lesson-cursor-pointer(name="logo", @click="toHome")
          img.lesson-cursor-pointer(src='../../assets/logo.png', @click="toHome")
        slot(name="left")
      #lesson-header-right
        slot(name="right")
</template>s

<script>
export default {
  name: 'the-header',
  methods: {
    toHome () {
      window.location.href = 'index'
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-header {
  height: @lesson-normal-height;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .lesson-flex-wrap-align-between;
  .lesson-flex-between;
  padding: 0 @lesson-normal-padding-width;
  @media screen {
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  #lesson-header-left {
    img {
      height: @lesson-normal-height;
    }
  }
}
</style>
