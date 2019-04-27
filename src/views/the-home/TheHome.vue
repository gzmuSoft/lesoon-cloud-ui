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
    #lesson-home-feature
      home-title(content="我们的", mainContent="功能")
      .lesson-home-more
        Button(shape="circle", icon="md-arrow-forward") 更多
      home-feature(:features="features")
    #lesson-home-school
      home-title(content="合作", mainContent="院校")
      .lesson-home-more
        Button(shape="circle", icon="md-arrow-forward") 更多
      home-school(:schools="schools")
    #lesson-home-course
      home-title(content="特色", mainContent="课程")
    #lesson-home-about
      home-title(mainContent="关于")

</template>

<script>
import TheHeader from '_components/the-header'
import HomeTitle from '_components/the-home/home-title'
import HomeFeature from '_components/the-home/home-feature'
import HomeSchool from '_components/the-home/home-school'
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
      ],
      features: [
        { title: '预习', src: require('_assets/feature-1.png') },
        { title: '学习', src: require('_assets/feature-2.png') },
        { title: '自测', src: require('_assets/feature-1.png') }
      ],
      schools: [
        { name: '贵州民族大学', logo: require('_assets/school/school-1.png'), description: '贵州民族大学，隶属贵州省人民政府，是新中国创建最早的民族院校之一，是贵州省重点建设高校、贵州省人民政府和国家民委共建高校、教育部本科教学工作水平评估优秀等次高校和接受中国政府奖学金来华留学生高校' },
        { name: '贵州民族大学', logo: require('_assets/school/school-1.png'), description: '贵州民族大学，隶属贵州省人民政府，是新中国创建最早的民族院校之一，是贵州省重点建设高校、贵州省人民政府和国家民委共建高校、教育部本科教学工作水平评估优秀等次高校和接受中国政府奖学金来华留学生高校' },
        { name: '贵州民族大学', logo: require('_assets/school/school-1.png'), description: '贵州民族大学，隶属贵州省人民政府，是新中国创建最早的民族院校之一，是贵州省重点建设高校、贵州省人民政府和国家民委共建高校、教育部本科教学工作水平评估优秀等次高校和接受中国政府奖学金来华留学生高校' },
        { name: '贵州民族大学', logo: require('_assets/school/school-1.png'), description: '贵州民族大学，隶属贵州省人民政府，是新中国创建最早的民族院校之一，是贵州省重点建设高校、贵州省人民政府和国家民委共建高校、教育部本科教学工作水平评估优秀等次高校和接受中国政府奖学金来华留学生高校' },
        { name: '贵州民族大学', logo: require('_assets/school/school-1.png'), description: '贵州民族大学，隶属贵州省人民政府，是新中国创建最早的民族院校之一，是贵州省重点建设高校、贵州省人民政府和国家民委共建高校、教育部本科教学工作水平评估优秀等次高校和接受中国政府奖学金来华留学生高校' }
      ]
    }
  },
  components: {
    TheHeader,
    HomeTitle,
    HomeFeature,
    HomeSchool
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

#lesson-home-feature,
#lesson-home-school,
#lesson-home-course,
#lesson-home-about {
  max-width: @lesson-normal-width + 500px;
  margin: 50px auto;
}

.lesson-home-more {
  text-align: right;
  margin-right: 20px;
}
</style>
