<template lang="pug">
  Dropdown#lesson-side-dropdown(placement="right-start", @on-click="handleSelect")
    span.lesson-cursor-pointer.lesson-side-drop-menu-span(:style="titleStyle")
      Icon(:type="parent.icon", :size="20", :color="iconColor")
      span(v-if="showTitle") {{ parent.title }}
    DropdownMenu(slot="list")
      template(v-for="item in parent.children")
        re-dropdown(v-if="item.children", :key="`drop_${item.name}`", :parent="item")
        DropdownItem(v-else, :key="`drop_${item.name}`", :name="item.name")
          Icon(:type="item.icon", :size="20")
          | {{item.title}}
</template>

<script>
export default {
  name: 're-dropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: '#515a6e'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left' : 'center'
      }
    }
  },
  methods: {
    handleSelect (name) {
      // 防止递归组件产生的冒泡
      if (!this.showTitle) this.$emit('on-select', name)
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-side-dropdown {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>
