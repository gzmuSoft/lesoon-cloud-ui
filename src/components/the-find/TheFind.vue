<template lang="pug">
  Layout#lesson-find
    #lesson-find-header.lesson-cursor-pointer(@click="handleLogin")
      Icon(type="ios-arrow-down")
    Form(ref='formRegister', :model='info', label-position="top")
      Content#lesson-find-content.lesson-margin-center
        Steps(:current="current")
          Step(title="信息验证")
          Step(title="密码修改")
          Step(title="找回结果")
        Card.lesson-find-card.lesson-text-left.lesson-margin-center(
          v-if="current === 0",
          :style="styles"
        )
          p(slot="title") 信息验证
          FormItem(prop='method', label='找回方式')
            Select(prefix="ios-bowtie", v-model="info.method", placeholder="请选择找回方式")
              Option(v-for="(item, index) in methods" :value="index" :key="index") {{ item.name }}
          div(v-if="info.method !== null")
            FormItem(v-show="info.method === 0", prop='phone', label='手机号')
              Input(prefix="ios-contact",
                type='text', search,
                placeholder='请输入手机号',
                v-model="info.phone",
                enter-button="获取验证码")
            FormItem(v-show="info.method === 1", prop='email', label='邮箱')
              Input(prefix='ios-filing',
                type='email', search,
                v-model="info.mail",
                placeholder='请输入邮箱',
                enter-button="获取验证码")
            FormItem(prop='code', label='验证码')
              Input(prefix='ios-filing',
                type='text', clearable,
                v-model="info.code",
                placeholder='请输入验证码')
            Button.lesson-find-btn(@click="handleNext", long, type="primary") 下一步
        Card.lesson-find-card.lesson-text-left.lesson-margin-center(
          v-if="current === 1",
          :style="styles")
          p(slot="title") 密码修改
          FormItem(prop='password', label="密码")
            Input(prefix='ios-lock-outline',
              :type="isShow?'text':'password'",
              v-model='info.password',
              placeholder='请输入密码',
              :icon="isShow?'ios-eye':'ios-eye-off'",
              @on-click='switcher()')
          FormItem(prop='repeatPassword', label="重复密码")
            Input(prefix='ios-lock-outline',
              type="password",
              placeholder='请再次输入密码',
              v-model='info.repeatPassword')
          Button.lesson-find-btn(@click="handleFinished", long, type="success") 完成
          Button.lesson-find-btn(@click="handleLast", long, type="info") 上一步
        Card.lesson-find-card.lesson-text-left.lesson-margin-center(
          v-if="current === 2",
          :style="styles")
          p(slot="title") 完成
          #lesson-find-tip.wow.bounceIn
            #lesson-find-tip-icon
              Icon(type="md-checkmark-circle", style="font-size: 86px")
            #lesson-find-tip-word 修改成功！
          Button.lesson-find-btn(@click="handleLogin", long, type="success") 去登录

</template>
<script>
export default {
  name: 'the-find',
  data () {
    return {
      isShow: false,
      current: 0,
      methods: [
        {
          name: '使用手机号找回'
        },
        {
          name: '使用邮箱找回'
        }
      ],
      info: {
        method: null,
        phone: null,
        mail: null,
        code: null,
        password: null,
        repeatPassword: null
      },
      styles: {
        opacity: 1
      }
    }
  },
  methods: {
    handleNext () {
      let _this = this
      // 验证验证码
      // 下一步
      if (_this.current < 2) {
        _this.transition(() => {
          _this.current++
        })
      }
    },
    handleLast () {
      let _this = this
      if (this.current > 0) {
        _this.transition(() => {
          _this.current--
        })
      }
    },
    handleFinished () {
      // 验证
      this.handleNext()
    },
    switcher () {
      this.isShow = !this.isShow
    },
    transition (next) {
      let _this = this
      _this.styles.opacity = _this.styles.opacity === 0 ? 1 : 0
      setTimeout(() => {
        next()
        _this.styles.opacity = _this.styles.opacity === 0 ? 1 : 0
      }, 500)
    },
    handleLogin () {
      this.current = 0
      this.info = {
        method: null,
        phone: null,
        mail: null,
        code: null,
        password: null,
        repeatPassword: null
      }
      this.$emit('find')
    }
  }
}
</script>
<style lang="less" scoped>
#lesson-find {
  margin-top: 40px;
  #lesson-find-content {
    width: 100%;
    max-width: @lesson-normal-width;
  }
  .lesson-find-card {
    .lesson-transition(all 0.5s) !important;
    width: @lesson-form-width;
    margin-top: 40px;
  }
}
.lesson-find-btn {
  margin-bottom: 20px;
}
#lesson-find-header {
  position: absolute;
  width: 100%;
  z-index: 100;
  top: -1px;
  height: 20px;
  .lesson-keyframes (all,move,{
    0%{top: -1px;}
    25%{top: 3px;}
    50%{top: -1px;}
    75%{top: 3px;}
    100%{top: -1px;}
  });
  .lesson-animation (move 3s infinite linear)
}
#lesson-find-tip {
  text-align: center;
  margin-bottom: 20px;
  color: #55a947;
  #lesson-find-tip-icon {
    font-size: 80px;
  }
  #lesson-find-tip-word {
    font-size: 30px;
  }
}
.wow {
  animation-duration: 1s;
}
</style>
