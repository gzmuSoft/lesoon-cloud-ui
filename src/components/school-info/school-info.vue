<template lang="pug">
  Card(style='width:320px')
    div(style='text-align:center')
      img(src='../../images/logo.png')
      h3 A high quality UI Toolkit based on Vue.js
</template>

<script>
export default {
  name: 'schoolInfo',
  props: {
    img: String,
    title: String,
    describe: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
