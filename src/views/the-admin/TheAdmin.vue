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
          title: '系统管理',
          name: '系统管理',
          icon: 'md-cube',
          children: [
            {
              title: '日志管理',
              name: 'sysLogs',
              icon: 'md-color-filter'
            }
          ]
        },
        {
          title: '教务管理',
          name: '教务管理',
          icon: 'logo-buffer',
          children: [
            {
              title: '教师管理',
              name: 'teacher',
              icon: 'ios-man'
            },
            {
              title: '课程管理',
              name: 'course',
              icon: 'ios-briefcase'
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
