<template lang="pug">
  #lesson-teacher-single-sel
    Row#lesson-teacher-analysis-main(type="flex")
      Col#lesson-teacher-analysis-left(span="22" offset="2")
        Tabs(size="small")
          TabPane(label="全部")
            TheAll
          TabPane(label="已完成")
            TheFinish

</template>

<script>
import TheAll from '_views/the-teacher/the-single-sel/the-all'
import TheFinish from '_views/the-teacher/the-single-sel/the-finish'

export default {
  name: 'TheSingleSel',
  components: {
    TheAll,
    TheFinish
  }
}
</script>

<style scoped>

</style>
