<template lang="pug">
  Layout#lesson-admin.lesson-full-height.lesson-text-left
    Sider(collapsible, hide-trigger, v-model="collapsed", breakpoint="md")
      side-menu(:collapsed="collapsed", :list="menuList")
    Layout
      Header#lesson-admin-header.lesson-card-2
        Icon.lesson-cursor-pointer(:class="triggerClasses",
          @click.native="handleCollapsed",
          type="md-menu", :size="32")
      Content#lesson-admin-content
        transition(name="lesson-opacity", mode="out-in")
          router-view

</template>

<script>
import SideMenu from '_components/the-admin/side-menu'

export default {
  name: 'TheAdmin',
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: false,
      menuList: [
        {
          title: '第一级 1',
          name: '第一级 1',
          icon: 'ios-alarm'
        },
        {
          title: '第一级 2',
          name: '第一级 2',
          icon: 'ios-alarm'
        },
        {
          title: '第一级 3',
          name: '第一级 3',
          icon: 'ios-alarm',
          children: [
            {
              title: '第二级 1',
              name: '第二级 1',
              icon: 'ios-alarm'
            },
            {
              title: '第二级 2',
              name: '第二级 2',
              icon: 'ios-alarm'
            },
            {
              title: '第二级 3',
              name: 'v',
              icon: 'ios-alarm',
              children: [
                {
                  title: '第三级 1',
                  name: '第三级 1',
                  icon: 'ios-alarm'
                },
                {
                  title: '第三级 2',
                  name: '第三级 2',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return this.collapsed ? 'rotate' : ''
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less" scoped>
  #lesson-admin {
    #lesson-admin-header {
      background: #ffffff;
      padding: 0 24px;

      .lesson-cursor-pointer {
        transition: transform .3s ease;

        &.rotate {
          transition: transform .3s ease;
          transform: rotateZ(-90deg);
        }
      }
    }

    #lesson-admin-content {
      padding: 10px;
    }
  }
</style>
