<template lang="pug">
  Layout
    Header
      p asd
    Content
      Register
</template>

<script>
// @ is an alias to /src
import Login from '../components/login'
import Register from '../components/register'
export default {
  name: 'home',
  components: {
    Login,
    Register
  }
}
</script>
