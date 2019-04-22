<template lang="pug">

  Card
    div(slot='title' class='title') 注册
    Form(ref='formRegister', :model='formRegister', type='email' :rules='ruleRegister' :label-width="70")
      FormItem(prop='email' label='电子邮箱')
          AutoComplete(placeholder='请输入邮箱' v-model='formRegister.email' @on-search="handleEmail")
            Option(v-for='item in emailList', :value='item', :key='item' class="optionEmail") {{ item }}
      FormItem(prop='account' label='账号')
        Input(prefix='ios-contact', type='text', placeholder='请输入账号' v-model='formRegister.account')
      FormItem(prop='password' label="密码")
        Input(prefix='ios-lock-outline' :type="isShow?'text':'password'", v-model='formRegister.password', placeholder='请输入密码' :icon="isShow?'ios-eye':'ios-eye-off'" @on-click='switcher()')
      FormItem(prop='repeatPassword' label="重复密码")
        Input(prefix='ios-lock-outline' type="password", placeholder='请再次输入密码' v-model='formRegister.repeatPassword')
      FormItem
          Button(type='primary', @click="handleRegister('formRegister')" long) 注册
</template>
<script>
export default {
  name: 'Register',
  props: {

  },
  data () {
    return {
      isShow: false,
      emailList: [],
      formRegister: {
        email: '',
        account: '',
        password: '',
        repeatPassword: ''
      },
      // 验证器
      ruleRegister: {
        email: [
          { required: true, message: '请填写邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        account: [
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
      }
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
<style scoped lang="less">
.title {
  color: #17233d;
  font-size: 35px;
  letter-spacing: 20px;
}
.optionEmail {
  text-align: left;
}
</style>
