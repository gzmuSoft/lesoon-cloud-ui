<template lang="pug">
  Layout#lesson-admin.lesson-full-height.lesson-text-left
    Sider(collapsible, hide-trigger, v-model="collapsed", breakpoint="md")
      side-menu(:collapsed="collapsed", :list="menuList")
        #lesson-admin-side-header(slot="top")
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
              name: 'admin-sysLog',
              icon: 'md-color-filter'
            },
            {
              title: '角色权限关联',
              name: 'admin-sysRoleRes',
              icon: 'ios-locate'
            },
            {
              title: '权限资源管理',
              name: 'admin-sysRes',
              icon: 'md-aperture'
            },
            {
              title: '角色管理',
              name: 'admin-sysRole',
              icon: 'ios-man'
            },
            {
              title: '用户管理',
              name: 'admin-sysUser',
              icon: 'md-person'
            },
            {
              title: '系统基础信息表',
              name: 'admin-sysData',
              icon: 'md-albums'
            },
            {
              title: '用户角色关联管理',
              name: 'admin-sysUserRole',
              icon: 'ios-people'
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
              name: 'admin-teacher',
              icon: 'ios-man'
            },
            {
              title: '学生管理',
              name: 'admin-student',
              icon: 'ios-man'
            },
            {
              title: '课程管理',
              name: 'admin-course',
              icon: 'ios-briefcase'
            },
            {
              title: '学期',
              name: 'admin-semester',
              icon: 'ios-briefcase'
            }
          ]
        },
        {
          title: '题库管理',
          name: '题库管理',
          icon: 'ios-create-outline',
          children: [
            {
              title: '试卷管理',
              name: 'admin-paper',
              icon: 'logo-buffer'
            },
            {
              title: '章节',
              name: 'admin-section',
              icon: 'ios-book-outline'
            },
            {
              title: '问答题',
              name: 'admin-essay',
              icon: 'ios-chatboxes-outline'
            },
            {
              title: '编程题',
              name: 'admin-program',
              icon: 'logo-codepen'
            },
            {
              title: '组卷规则管理',
              name: 'admin-examRule',
              icon: 'ios-browsers-outline'
            },
            {
              title: '判断题管理',
              name: 'admin-judgement',
              icon: 'md-checkmark-circle'
            },
            {
              title: '考试管理',
              name: 'admin-exam',
              icon: 'ios-list-box-outline'
            },
            {
              title: '考试试卷历史记录',
              name: 'admin-examHistories',
              icon: 'ios-list-box-outline'
            },
            {
              title: '试卷详情及阅卷信息',
              name: 'admin-paperDetail',
              icon: 'ios-list-box-outline'
            },
            {
              title: '单/多项选择题/填空题的选项信息表',
              name: 'admin-selOptions',
              icon: 'ios-list-box-outline'
            },
            {
              title: '多选题',
              name: 'admin-multiSel',
              icon: 'ios-list-box-outline'
            },
            {
              title: '单选题',
              name: 'admin-singleSel',
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
      transition: transform 0.2s ease;
      &.rotate {
        transition: transform 0.2s ease;
        transform: rotateZ(-90deg);
      }
    }
  }

  #lesson-admin-content {
    padding: 10px;
  }
}
</style>
