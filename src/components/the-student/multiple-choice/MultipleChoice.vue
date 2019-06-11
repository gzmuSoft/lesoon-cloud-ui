<template lang="pug">
  .lesson-choice
    .lesson-choice-type {{multipleChoice.title}}
    template(v-for="(item, index) in multipleChoice.topic")
      .lesson-choice-title(v-html="index + 1 + '. ' + topicHandle(item.name)")
        span （{{ eachValue }}分）
      component(:is="multipleChoice.component", :vertical="multipleChoice.vertical",
        v-model="item.answer", :type="multipleChoice.button")
        component.lesson-choice-option(:is="multipleChoice.child", v-for="(option, index) in item.options",
          :label="option.value", :key="`${multipleChoice.child}_${option.name}_${index}`", :style="multipleChoice.style") {{ option.name }}

</template>

<script>
export default {
  name: 'MultipleChoice',
  data: () => ({
    answer: '',
    eachValue: 5
  }),
  props: {
    multipleChoice: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-choice {
  .lesson-choice-type {
    font-size: 1.2rem;
    background-color: #cec9c9;
  }
  .lesson-choice-title {
    padding-top: 1rem;
    font-size: 1rem;
  }
  .lesson-choice-option {
    padding-left: 1rem;
    display: block;
    height: 30px;
    line-height: 30px;
  }
}
</style>
