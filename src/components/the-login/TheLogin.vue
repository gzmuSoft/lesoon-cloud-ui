<template lang="pug">
  Card#lesson-login-main-content
    #lesson-login-main-title(slot='title') 登陆
    Form(ref='formUser', :model='formUser', :rules='ruleUser', label-position="top")
      FormItem.lesson-login-main-item(prop='username', label='账号')
        Input(prefix='ios-contact', type='text', placeholder='请输入账号', v-model='formUser.username')
      FormItem.lesson-login-main-item(prop='password', label="密码")
        Input(prefix='ios-lock-outline' :type="isShow?'text':'password'", v-model='formUser.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher(this)')
      Button.lesson-login-main-item(type='success', @click="handleLogin('formUser')", long :loading="waitLogin") 登陆
      Button.lesson-login-main-item(type='primary', @click="handleForget", long) 忘记密码
      .lesson-login-social
        social-button(:social="social")
</template>
<script>
import SocialButton from '../social-button'
import { routeHome } from '_api/comm'

export default {
  name: 'the-login',
  components: { SocialButton },
  data () {
    return {
      waitLogin: false,
      isShow: false,
      formUser: {
        username: '',
        password: ''
      },
      ruleUser: {
        username: [
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
    // 登陆的方法
    handleLogin (formLogin) {
      const _this = this
      _this.$refs[formLogin].validate((valid) => {
        if (valid) {
          _this.waitLogin = true
          _this.$store.dispatch('auth/oauthLogin', _this.formUser).then(() => {
            _this.$Message.success('登录成功!')
            setTimeout(() => {
              routeHome()
            }, 2000)
          }).finally(() => {
            _this.waitLogin = false
          })
        }
      })
    },
    handleForget () {
      console.log(this.$store.state.auth.token == null)
    }
  }
}
</script>
<style lang="less" scoped>
#lesson-login-main-content {
  text-align: left;
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
