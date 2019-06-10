<template lang="pug">
  .lesson-drawer
    Drawer(v-model="visible", :title="title", :width="width", :closable="closable", :mask-closable="maskClosable",
      :mask="mask", :mask-style="maskStyle", :styles="styles", :scrollable="scrollable", :placement="placement",
      :transfer="transfer", :class-name="className", :inner="inner", :draggable="draggable",
      :before-close="beforeClose",
      @on-close="onClose", @on-visible-change="onVisibleChange", @on-resize-width="onResizeWidth")
      slot(name='header', slot='header')
      slot(name='close', slot='close')
      slot(name='trigger', slot='trigger')
      slot
      dynamic-form(ref="form", :formItems="formItems", :formData="formData", @on-ok="handleOk")
        slot(name="form", slot="footer")
      slot(name="footer")

</template>

<script>
import DynamicForm from '_components/common/dynamic-form'

export default {
  name: 'DrawerForm',
  components: {
    DynamicForm
  },
  data () {
    return {
      visible: this.value,
      currentFormItems: []
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    // 他丫儿的卡了我三个小时的地方，气死我了快
    visible (val) {
      this.$emit('input', val)
    }
  },
  props: {
    formItems: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every(value =>
          value.hasOwnProperty('name') &&
            value.hasOwnProperty('label')
        )
      }
    },
    formData: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'right'
    },
    width: {
      type: [Number, String],
      default: 720
    },
    closable: {
      type: Boolean,
      default: true
    },
    transfer: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    styles: {
      type: Object,
      default: () => {
        return {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        }
      }
    }
  },
  methods: {
    onClose () {
      this.$emit('on-close')
    },
    onVisibleChange (visible) {
      this.$emit('on-visible-change', visible)
    },
    onResizeWidth (width) {
      this.$emit('on-resize-width', width)
    },
    handleOk (status, currentFormData) {
      this.$emit('on-ok', status, currentFormData)
    },
    beforeClose () {
      let _this = this
      if (_this.$refs.form.status()) {
        _this.$refs.form.handleReset()
        return
      }
      _this.$Modal.confirm({
        title: '确定关闭吗？',
        content: '你还有内容尚未保存，确定关闭吗？',
        onOk: () => {
          _this.visible = false
          _this.$refs.form.handleReset()
        }
      })
      return new Promise(() => {})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
