<template lang="pug">
  Submenu.lesson-re-submenu.lesson-side-menu-li(:name="parent.name")
    template(slot="title")
      Icon(:type="parent.icon")
      | {{ parent.title }}
    template(v-for="item in parent.children")
      re-submenu(
        v-if="item.children",
        :key="`menu_${item.name}`",
        :name="item.name",
        :parent="item"
      )
      MenuItem(v-else, :key="`menu_${item.name}`", :name="item.name")
        Icon(:type="item.icon")
        | {{ item.title }}
</template>

<script>
export default {
  name: 're-submenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
