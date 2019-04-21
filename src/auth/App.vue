<template lang="pug">
  #app
    router-link(to="/login") login
    router-link(to="/register") register
    router-view
    img(src='./assets/logo.png')
    div
      p
        | If iView is successfully added to this project, you'll see an
        code(v-text="'<Button>'")
        |         Login
      Button(type='primary') Button
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from './components/hello-world/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
