<template lang="pug">
  .lesson-drawer
    Drawer(v-model="visible", :title="title", :width="width", :closable="closable", :mask-closable="maskClosable",
      :mask="mask", :mask-style="maskStyle", :styles="styles", :scrollable="scrollable", :placement="placement",
      :transfer="transfer", :class-name="className", :inner="inner", :draggable="draggable", :before-close="beforeClose",
      @on-close="onClose", @on-visible-change="onVisibleChange", @on-resize-width="onResizeWidth")
      slot(name='header', slot='header')
      slot(name='close', slot='close')
      slot(name='trigger', slot='trigger')

</template>

<script>
export default {
  name: 'DrawerForm',
  data () {
    return {
      visible: this.value
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
    value: {
      type: Boolean,
      default: false
    },
    beforeClose: Function,
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
      default: 256
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
      default: () => {}
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
