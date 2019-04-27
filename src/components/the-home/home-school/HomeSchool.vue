<template lang="pug">
  Row.lesson-home-school(type="flex", justify="center", :gutter="gutter")
    template(v-for="item in schools")
      Col.lesson-home-school-col(:xs="xs", :sm="sm")
        Row.lesson-card-4.lesson-home-school-card()
          Col(:xs="24", :sm="24", :md="24", :lg="12")
            img.lesson-home-school-img(:src="item.logo")
          Col.lesson-text-left.lesson-home-school-desc(:xs="24", :sm="24", :md="24", :lg="12")
            p {{ item.description }}
          Col(:span="24").lesson-home-school-name
            div {{ item.name }}

</template>

<script>
export default {
  name: 'home-school',
  props: {
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
    },
    schools: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    //
  }
}
</script>

<style lang="less" scoped>
.lesson-home-school-col {
  margin-top: 20px;
  margin-bottom: 20px;
  .lesson-home-school-card {
    padding: 20px 20px 40px;
    overflow: hidden;
    .lesson-home-school-desc {
      padding-top: 20px;
      padding-left: 10px;
      text-indent: 2em;
      font-size: 15px;
    }
    .lesson-home-school-img {
      width: 100%;
    }
    .lesson-home-school-name {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      div {
        background-color: rgba(61, 157, 221, 0.49);
        width: 100%;
        position: relative;
        color: white;
        top: 100%;
        height: 42px;
        font-size: 25px;
        .lesson-transition(all 1s cubic-bezier(.25,.8,.25,1));
      }
      &:hover{
        div {
          top: calc(100% - 42px);
        }
      }
    }
  }
}
</style>
