<template lang="pug">
  #lesson-nav
    Row(type="flex")
      Col(span="1", order="1")
        Button
          Icon(type="ios-arrow-forward")
      col(span="22", order="2")
        slot
      Col(span="1", order="999")
        Button
          Icon(type="ios-arrow-back")
</template>

<script>
export default {
  name: 'the-nav'
}
</script>

<style lang="less" scoped>

</style>
