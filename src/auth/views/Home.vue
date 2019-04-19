<template lang="pug">
  .home
    img(alt='Vue logo', src='../assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
// @ is an alias to /src
import HelloWorld from '_auth/components/hello-world'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
