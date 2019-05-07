<template lang="pug">
  Affix
    #lesson-header
      #lesson-header-left
        slot.lesson-cursor-pointer(name="logo", @click="home")
          img.lesson-cursor-pointer(src='../../assets/logo.png', @click="home")
        slot(name="left")
      #lesson-header-right
        slot(name="right")
</template>

<script>
import { routeHome } from '_utils/util'

export default {
  name: 'the-header',
  methods: {
    home () {
      if (this.$route.name === 'home') {
        this.$scrollTo('#lesson-header')
      }
      routeHome()
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-header {
  background-color: white;
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
