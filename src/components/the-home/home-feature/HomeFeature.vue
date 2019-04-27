<template lang="pug">
  Row.lesson-home-feature(type="flex", justify="center", :gutter="gutter")
    template(v-for="item in features")
      Col.lesson-home-feature-col(:xs="xs", :sm="sm")
        Card.lesson-card-3(:padding="padding", data-wow-delay="2s")
          div.lesson-home-feature-title {{ item.title }}
          img(:src="item.src")

</template>

<script>
export default {
  name: 'home-feature',
  props: {
    features: {
      type: Array,
      default: () => []
    },
    gutter: {
      type: Number,
      default: 72
    },
    sm: {
      type: Number,
      default: 8
    },
    xs: {
      type: Number,
      default: 20
    },
    padding: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-home-feature-col {
  margin-top: 20px;
  margin-bottom: 20px;
  .lesson-card-3 {
    .lesson-transition(all 1s cubic-bezier(.25,.8,.25,1));
    padding-top: 20px;
    padding-bottom: 20px;
    top: 20px;
    &:hover {
      .lesson-card-5;
      top: 0;
    }
    .lesson-home-feature-title {
      font-size: 50px;
      color: #3d9ddd;
    }
  }
}
</style>
