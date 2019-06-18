<template lang="pug">
  #lesson-teacher-single-sel
    Row#lesson-teacher-analysis-main(type="flex")
      Col#lesson-teacher-analysis-left(span="22" offset="2")
        Tabs(@on-click="handleChange")
          template(v-for="route in routes")
            TabPane(:label="route.meta.title")
              router-view
</template>

<script>
export default {
  name: 'TheSingleSel'
}
</script>

<style scoped>

</style>
