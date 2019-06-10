<template lang="pug">
  #lesson-teacher-menu
    #lesson-head-portrait
    Menu(active-key='1')
      Menu-group(:title='item.name' v-for="(item, index) in menu" :key='`${index}_`')
        Menu-item(:key='index' :name="index" v-for="(sub, index) in item.submenu")
          Icon(:type="sub.icon")
          | {{sub.name}}
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
  #lesson-head-portrait{
    width: 240px;
    height: 120px;
    background: #e9d8bb;
  }
</style>
