<template lang="pug">
  Row.lesson-home-title(type="flex", justify="center", :gutter="gutter")
    Col(:xs="xsLine", :sm="smLine", :md="line", :order="orders.left")
      hr.lesson-home-title-left(:style="lineStyle")
    Col.lesson-home-title-word(:xs="xsWidth", :sm="smWidth", :md="width", :order="orders.center")
      slot(name="content")
        span(:style="contentStyle") {{ content }}
        span(:style="mainContentStyle") {{ mainContent }}
    Col(:xs="xsLine", :sm="smLine", :md="line", :order="orders.right")
      hr.lesson-home-title-right(:style="lineStyle")
</template>

<script>
export default {
  name: 'home-title',
  props: {
    content: {
      type: String,
      default: ''
    },
    mainContent: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 4
    },
    maxWidth: {
      type: Number,
      default: 16
    },
    smWidth: {
      type: Number,
      default: 10
    },
    smMaxWidth: {
      type: Number,
      default: 24
    },
    xsWidth: {
      type: Number,
      default: 10
    },
    xsMaxWidth: {
      type: Number,
      default: 24
    },
    order: {
      type: String,
      default: 'center'
    },
    gutter: {
      type: Number,
      default: 0
    },
    lineStyle: {
      type: Object,
      default: () => {}
    },
    contentStyle: {
      type: Object,
      default: () => {}
    },
    mainContentStyle: {
      type: Object,
      default: () => {
        return {
          'color': '#3d9ddd'
        }
      }
    }
  },
  computed: {
    line () {
      return (this.maxWidth - this.width) / 2
    },
    smLine () {
      return (this.smMaxWidth - this.smWidth) / 2
    },
    xsLine () {
      return (this.xsMaxWidth - this.xsWidth) / 2
    },
    orders () {
      if (this.order === 'left') return { left: 2, center: 1, right: 3 }
      else if (this.order === 'right') return { left: 1, center: 3, right: 2 }
      else return { left: 1, center: 2, right: 3 }
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-home-title-left,
.lesson-home-title-right{
  background: #3d9ddd;
  border: none;
  height: 1px;
  transform: translateY(-50%);
  position: relative;
  padding: 0 !important;
  top: 50%;
}
.lesson-home-title-word {
  font-weight: bolder;
  color: black;
  font-size: 30px;
}
</style>
