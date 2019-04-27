<template lang="pug">
  .lesson-home-course.lesson-text-left
    template(v-for="item in courses")
      p.lesson-home-course-title {{ item.title }}
      hr
      Row.lesson-home-course-content(type="flex", justify="center")
        Col.lesson-home-course-content-left(:xs="24", :sm="24", :md="24", :lg="12", :order="handleOrder(item.order)")
          template(v-for="content in item.content")
            h2 {{ content.title }}
            p {{ content.description }}
        Col.lesson-home-course-content-right(:xs="24", :sm="24", :md="24", :lg="12")
          Row.lesson-home-course-content-right-row(type="flex", justify="center", :gutter="32", align="middle")
            template(v-for="image in item.img")
              Col.lesson-home-course-content-right-item(:xs="22", :sm="22", :md="22", :lg="22", :xl="10")
                img(:src="image")
</template>

<script>
export default {
  name: 'home-course',
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // courses: [
      //   {
      //     title: '云计算',
      //     img: [
      //       require('_assets/course/course-1.png'),
      //       require('_assets/course/course-1.png')
      //     ],
      //     content: [
      //       {
      //         title: '简介',
      //         description: '云计算入门与基础课程是介绍云计算的关键技术（虚拟化、分布式计算等）、开源云平台OpenStack应用等内容的实验课程'
      //       },
      //       {
      //         title: '适合人群',
      //         description: '本课程以实践为中心，结合应用方向和实际经验，提供技能化的专业课程培训。可对接高校的数学/统计/计算机/电子信息/自动化等学科专业。'
      //       }
      //     ],
      //     // 图片位置
      //     order: 'right'
      //   }
      // ]
    }
  },
  methods: {
    handleOrder (order) {
      return order === 'left' ? 1 : -1
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-home-course {
  .lesson-home-course-title {
    border-left: 5px solid #3d9ddd;
    padding-left: 10px;
    padding-bottom: 5px;
    margin: 40px 0 30px;
    color: black;
    font-size: 28px;
    font-weight: bold;
  }
  hr {
    margin-top: 3px;
  }
  .lesson-home-course-content {
    margin-top: 20px;
    color: black;
    h2 {
      font-size: 25px;
      line-height: 3;
    }
    p {
      font-size: 20px;
      line-height: 2;
    }
    .lesson-home-course-content-right {
      .lesson-home-course-content-right-row {
        height: 100%;
        .lesson-home-course-content-right-item {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
