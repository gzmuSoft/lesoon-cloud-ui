<template lang="pug">
  Card#lesson-login-main-content
    #lesson-login-main-title(slot='title') 登陆
    Form(ref='formUser', :model='formUser', :rules='ruleUser', label-position="top")
      FormItem.lesson-login-main-item(prop='account', label='账号')
        Input(prefix='ios-contact', type='text', placeholder='请输入账号', v-model='formUser.account')
      FormItem.lesson-login-main-item(prop='password', label="密码")
        Input(prefix='ios-lock-outline' :type="isShow?'text':'password'", v-model='formUser.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher(this)')
      Button.lesson-login-main-item(type='success', @click="handleLogin('formUser')", long) 登陆
      Button.lesson-login-main-item(type='primary', long) 忘记密码
      .lesson-login-social
        social-button(:social="social")
</template>
<script>
import SocialButton from '../social-button'
export default {
  name: 'the-login',
  components: { SocialButton },
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
      },
      social: [
        {
          styles: {
            background: '#55a947',
            color: 'white'
          },
          icon: 'ios-chatbubbles'
        }
      ]
    }
  },
  methods: {
    switcher () {
      this.isShow = !this.isShow
    },
    handleLogin (formLogin) {
      this.$refs[formLogin].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#lesson-login-main-content {
  padding: 0 16px;
}
#lesson-login-main-title {
  font-weight: bolder;
}
.lesson-login-main-item {
  margin-top: 10px;
}

#lesson-login-card {
  width: @lesson-form-width;
}
</style>
