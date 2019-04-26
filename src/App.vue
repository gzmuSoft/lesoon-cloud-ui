<template lang="pug">
  #app
    transition(name="lesson-opacity", mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
