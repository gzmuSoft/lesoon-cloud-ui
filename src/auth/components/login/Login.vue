<template lang="pug">
  Card
    div(slot='title' icon='ios-bulb-outline' class='title') 登陆
    Form(ref='formUser', :model='formUser', :rules='ruleUser' :label-width="50")
      FormItem(prop='account' label='账号')
        Input(prefix='ios-contact', type='text', placeholder='请输入账号' v-model='formUser.account')
      FormItem(prop='password' label="密码")
        Input(prefix='ios-lock-outline' :type="isShow?'text':'password'", v-model='formUser.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher(this)')
      FormItem
        Button(type='primary', @click="handleLogin('formUser')") 登陆
      Button(type='info', ) QQ登陆
      Button(type='success', ) 微信登陆
</template>
<script>
export default {
  name: 'Login',
  props: {

  },
  data () {
    return {
      isShow: false,
      formUser: {
        account: '',
        password: ''
      },
      ruleUser: {
        account: [
          { required: true, message: '请填写账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    switcher () {
      this.isShow = !this.isShow
    },
    handleLogin (name) {
      this.$Message.success('Success!')
    }

  }
}
</script>
<style scoped lang="less">
.title {
  color: #17233d;
  font-size: 35px;
  letter-spacing: 20px;
}
</style>
