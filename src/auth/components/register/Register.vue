<template lang="pug">
  Card
    div(slot='title' icon='ios-bulb-outline' class='title') 注册
    Form(ref='formRegister', :model='formRegister', :rules='ruleRegister' :label-width="50")
    FormItem(prop='email' label='电子邮箱')
        Input(prefix='ios-contact', type='email', placeholder='请输入邮箱' v-model='formRegister.email')
    FormItem(prop='account' label='账号')
      Input(prefix='ios-contact', type='text', placeholder='请输入账号' v-model='formRegister.account')
    FormItem(prop='password' label="密码")
      Input(prefix='ios-lock-outline' :type="isShow?'text':'password'", v-model='formRegister.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher(this)')
    FormItem(prop='repeatPassword' label="重复密码")
      Input(prefix='ios-lock-outline' type="password", placeholder='请再次输入密码' icon="ios-eye-off")
    FormItem
      Button(type='primary', @click="handleRegister('formRegister')") 注册
</template>
<script>
export default {
  name: 'Register',
  props: {

  },
  data () {
    return {
      isShow: false,
      formRegister: {
        email: '',
        account: '',
        password: ''
      },
      ruleRegister: {
        account: [
          { required: true, message: '请填写账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请再次填写密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!value) {
                console.log(rule)
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    switcher () {
      this.isShow = !this.isShow
    },
    handleRegister (name) {
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
