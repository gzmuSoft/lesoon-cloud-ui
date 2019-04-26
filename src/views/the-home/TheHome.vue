<template lang="pug">
  #lesson-home
    the-header
      .lesson-auth-routes(slot="right")
        Menu(mode="horizontal", active-name="1")
          MenuItem(name="1") 功能
          MenuItem(name="3") 课程
          MenuItem(name="4") 院校
          MenuItem(name="5") 关于
          Button.lesson-home-route(type="info", @click="toLogin") 登录
    #lesson-home-banner
      Carousel(autoplay, :autoplay-speed="5000", v-model="current", loop)
        CarouselItem(v-for="(item,index) in banners", :key="index")
          img.lesson-home-banner-img(:src="item.src")
    #lesson-home-main
    #lesson-home-course
    #lesson-home-school
    #lesson-home-about

</template>

<script>
import TheHeader from '_components/the-header'
import { routeAuth } from '_api/comm'

export default {
  name: 'the-home',
  data () {
    return {
      current: 0,
      banners: [
        { src: require('_assets/banner-1.png') },
        { src: require('_assets/banner-2.png') },
        { src: require('_assets/banner-3.png') }
      ]
    }
  },
  components: {
    TheHeader
  },
  methods: {
    toLogin () {
      if (this.$store.getters['auth/isAuth']) {
        this.$Message.warning('你已经登录过了！')
      } else {
        routeAuth()
      }
    },
    loginStatue () {
      console.log(localStorage)
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .lesson-home-route {
    margin-left: 10px;
  }
  #lesson-home-banner {
    .lesson-home-banner-img {
      width: 100%;
    }
  }
}
</style>
