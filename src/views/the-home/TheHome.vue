<template lang="pug">
  #lesson-home
    the-header
      .lesson-auth-routes(slot="right")
        Menu(mode="horizontal", active-name="1")
          MenuItem(name="1", v-scroll-to="{el: '#lesson-home-banner', offset: -70}") 主页
          MenuItem(name="2", v-scroll-to="{el: '#lesson-home-feature', offset: -70}") 功能
          MenuItem(name="3", v-scroll-to="{el: '#lesson-home-school', offset: -70}") 院校
          MenuItem(name="4", v-scroll-to="{el: '#lesson-home-course', offset: -70}") 课程
          MenuItem(name="5", v-scroll-to="{el: '#lesson-home-about', offset: -70}") 关于
          Button.lesson-home-route(type="info", @click="toLogin") 登录
    #lesson-home-banner.wow.bounceIn(data-wow-delay="5s")
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
      .lesson-home-more
        Button(shape="circle", icon="md-arrow-forward") 更多
      home-course(:courses="courses")
    #lesson-home-about
      home-title(mainContent="关于")

</template>

<script>
import TheHeader from '_components/the-header'
import HomeTitle from '_components/the-home/home-title'
import HomeFeature from '_components/the-home/home-feature'
import HomeSchool from '_components/the-home/home-school'
import HomeCourse from '_components/the-home/home-course'
import { routeAuth } from '_utils/util'
import { WOW } from 'wowjs'

export default {
  name: 'the-home',
  watch: {
    cases () {
      this.$nextTick(() => { // 在dom渲染完后,再执行动画
        const wow = new WOW({
          live: false
        })
        wow.init()
      })
    }
  },
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
      ],
      courses: [
        { title: '云计算',
          // 图片位置
          order: 'right',
          img: [
            require('_assets/course/course-1.png'),
            require('_assets/course/course-1.png')
          ],
          content: [
            {
              title: '简介',
              description: '云计算入门与基础课程是介绍云计算的关键技术（虚拟化、分布式计算等）、开源云平台OpenStack应用等内容的实验课程'
            },
            {
              title: '适合人群',
              description: '本课程以实践为中心，结合应用方向和实际经验，提供技能化的专业课程培训。可对接高校的数学/统计/计算机/电子信息/自动化等学科专业。'
            }
          ]
        },
        { title: '大数据',
          // 图片位置
          order: 'left',
          img: [
            require('_assets/course/course-1.png'),
            require('_assets/course/course-1.png')
          ],
          content: [
            {
              title: '简介',
              description: '系列课程是学习数据分析和数据仓库之前的必修课，学习完本系列课程可以达到对大数据平台的简单应用并能够解决工作中的实际问题。'
            },
            {
              title: '适合人群',
              description: '本课程以实践为中心，结合应用方向和实际经验，提供技能化的专业课程培训。可对接高校的数学/统计/计算机/电子信息/自动化等学科专业。'
            }
          ]
        }
      ]
    }
  },
  components: {
    TheHeader,
    HomeTitle,
    HomeFeature,
    HomeSchool,
    HomeCourse
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
  max-width: @lesson-normal-width + 300px;
  margin: 50px auto;
  padding: 64px;
}

.lesson-home-more {
  text-align: right;
  margin-right: 20px;
}
</style>
