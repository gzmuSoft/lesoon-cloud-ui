<template lang="pug">
  Layout#lesson-admin.lesson-full-height.lesson-text-left
    Sider(collapsible, hide-trigger, v-model="collapsed", breakpoint="md")
      side-menu(:collapsed="collapsed", :list="menuList")
        #lesson-admin-side-header(slot="top") LESSON
    Layout
      Header#lesson-admin-header.lesson-card-2
        Icon.lesson-cursor-pointer(:class="triggerClasses",
          @click.native="handleCollapsed",
          type="md-menu", :size="32")
        UserInfo.lesson-float-right
      Content#lesson-admin-content
        transition(name="lesson-opacity", mode="out-in")
          router-view

</template>

<script>
import SideMenu from '_components/the-admin/side-menu'
import UserInfo from '_components/common/user-info'

export default {
  name: 'TheAdmin',
  components: {
    SideMenu, UserInfo
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
            },
            {
              title: '系统用户',
              name: 'sysUser',
              icon: 'md-person'
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
        },
        {
          title: '试卷管理',
          name: '试卷管理',
          icon: 'ios-create-outline',
          children: [
            {
              title: '试卷管理',
              name: 'paper',
              icon: 'logo-buffer'
            },
            {
              title: '问答题',
              name: 'essay',
              icon: 'ios-chatboxes-outline'
            },
            {
              title: '组卷规则管理',
              name: 'examRule',
              icon: 'ios-browsers-outline'
            },
            {
              title: '判断题管理',
              name: 'judgement',
              icon: 'md-checkmark-circle'
            },
            {
              title: '考试管理',
              name: 'exam',
              icon: 'ios-list-box-outline'
            },
            {
              title: '考试试卷历史记录',
              name: 'examHistories',
              icon: 'ios-list-box-outline'
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
  #lesson-admin-side-header {
    color: white;
    .lesson-text-center;
    .lesson-full-width;
    font-size: 34px;
  }
  #lesson-admin-header {
    background: #ffffff;
    padding: 0 56px 0 24px;

    .lesson-cursor-pointer {
      transition: transform 0.3s ease;

      &.rotate {
        transition: transform 0.3s ease;
        transform: rotateZ(-90deg);
      }
    }
  }

  #lesson-admin-content {
    padding: 10px;
  }
}
</style>
