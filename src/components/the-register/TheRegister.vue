<template lang="pug">
  Content#lesson-auth-content
    Card#lesson-register-main-content
      #lesson-register-main-title(slot='title') 注册
      Form(ref='formRegister', :model='formRegister', type='email', :rules='ruleRegister', label-position="top")
        FormItem.lesson-register-main-item(prop='email', label='电子邮箱')
            AutoComplete(placeholder='请输入邮箱' v-model='formRegister.email' @on-search="handleEmail")
              Option(v-for='item in emailList', :value='item', :key='item' class="optionEmail") {{ item }}
        FormItem.lesson-register-main-item(prop='username', label='账号')
          Input(prefix='ios-contact', type='text', placeholder='请输入账号' v-model='formRegister.username')
        FormItem.lesson-register-main-item(prop='password', label="密码")
          Input(prefix='ios-lock-outline', :type="isShow?'text':'password'", v-model='formRegister.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher()')
        FormItem.lesson-register-main-item(prop='repeatPassword', label="重复密码")
          Input(prefix='ios-lock-outline', type="password", placeholder='请再次输入密码', v-model='formRegister.repeatPassword')
        Button.lesson-register-main-item(type='success', @click="handleRegister('formRegister')" long) 注册
        Button.lesson-register-main-item(type='primary', :to="{name:'login'}" long) 已有账号？立即登录
        .lesson-login-social
          social-button(:social="social")
</template>
<script>
import SocialButton from '../social-button'
export default {
  name: 'the-register',
  components: { SocialButton },
  data () {
    return {
      isShow: false,
      emailList: [],
      formRegister: {
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
      },
      // 验证器
      ruleRegister: {
        email: [
          { required: true, message: '请填写邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              callback()
            }
          }
        ],
        username: [
          { required: true, message: '请填写账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ],
        repeatPassword: [
          { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' },
          { required: true, message: '请再次填写密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              let message
              if (value !== this.formRegister.password) {
                message = '两次密码不一致'
              }
              callback(message)
            }
          }
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
    // 注册按钮功能
    handleRegister (formRegister) {
      this.$refs[formRegister].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleEmail (value) {
      this.emailList = !value || value.indexOf('@') >= 0 ? [] : [
        value + '@qq.com',
        value + '@sina.com',
        value + '@163.com'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#lesson-register-main-content {
  text-align: left;
  padding: 0 16px;
}
#lesson-register-main-title {
  font-weight: bolder;
}
.lesson-register-main-item {
  margin-top: 10px;
}
#lesson-auth-content {
  background-color: white;
  margin-top: @lesson-normal-height;
  width: @lesson-form-width;
  .lesson-margin-center;
}
</style>
