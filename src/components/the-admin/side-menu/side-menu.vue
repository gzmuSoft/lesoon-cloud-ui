<template lang="pug">
  #lesson-side-menu
    slot(name="top")
    Menu#lesson-side-normal(v-show="!collapsed", width="auto",
      theme="dark", @on-select="handleSelect", ref="menu")
      template(v-for="item in list")
        re-submenu(
          v-if="item.children",
          :key="`menu_${item.name}`",
          :name="item.name",
          :parent="item"
        )
        MenuItem(v-else, :key="`menu_${item.name}`", :name="item.name")
          Icon(:type="item.icon")
          | {{ item.title }}
    #lesson-side-md(v-show="collapsed")
      template(v-for="item in list")
        re-dropdown.lesson-text-center(
          v-if="item.children", :key="`drop_${item.name}`",
          :parent="item", icon-color="#fff", :showTitle="false"
          @on-select="handleSelect"
        )
        Tooltip.lesson-side-drop-menu-tip.lesson-text-center(
          v-else, transfer, :content="item.title",
          :key="`drop_${item.name}`",
          style="display: block",
          placement="right"
        )
          span.lesson-side-drop-menu-span.lesson-cursor-pointer(@click="handleSelect(item.name)")
            Icon(:type="item.icon", :size="20", color="white")
      slot(name="bottom")
</template>

<script>
import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'

export default {
  name: 'side-menu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      console.log(name)
    }
  }
}
</script>

<style lang="less" scoped>
#lesson-side-menu {
  .lesson-full-width;
  #lesson-side-md {
    .lesson-side-drop-menu-tip {
      padding: 10px 8px;
      .lesson-full-width;
    }
  }
}
</style>
