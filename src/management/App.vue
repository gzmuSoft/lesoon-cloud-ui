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
import { getUserInfo } from '_common/api/oauth'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    getUser () {
      getUserInfo({ userId: 21 }).then(res => {
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
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}
</style>
