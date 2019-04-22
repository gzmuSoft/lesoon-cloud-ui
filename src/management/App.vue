<template lang="pug">
  #app
    img(src='./assets/logo.png')
    div
      p
        | If iView is successfully added to this project, you'll see an
        code(v-text="'<Button>'")
        |         Management
      Button(type='primary', @click="getUser") Button
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from './components/hello-world/HelloWorld.vue'
import { oauthToken } from '_common/api/oauth'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    getUser () {
      oauthToken({ username: 21, password: 123 }).then(res => {
        console.log(res)
      })
    }
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
/*组件过度*/

</style>
