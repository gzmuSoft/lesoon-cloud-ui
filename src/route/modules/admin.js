const TheAdmin = () => import('_views/the-admin')
const TheHome = () => import('_views/the-admin/the-home')
const TheSysLog = () => import('_views/the-admin/the-sys-log')
const TheSysUserRole = () => import('_views/the-admin/the-sys-user-role')
const TheTeacher = () => import('_views/the-admin/the-teacher')
const TheCourse = () => import('_views/the-admin/the-course')
const TheJudgement = () => import('_views/the-admin/the-judgement')
const TheProgram = () => import('_views/the-admin/the-program')
const TheEssay = () => import('_views/the-admin/the-essay')
const TheExam = () => import('_views/the-admin/the-exam')
const ThePaper = () => import('_views/the-admin/the-paper')
const TheExamRule = () => import('_views/the-admin/the-exam-rule')
const TheSysUser = () => import('_views/the-admin/the-sys-user')
const TheExamHistories = () => import('_views/the-admin/the-exam-histories')
const TheSysRole = () => import('_views/the-admin/the-sys-role')
const TheSysData = () => import('_views/the-admin/the-sys-data')
const ThePaperDetail = () => import('_views/the-admin/the-paper-detail')
const TheSelOptions = () => import('_views/the-admin/the-sel-options')
const TheSysRes = () => import('_views/the-admin/the-sys-res')
const TheSysRoleRes = () => import('_views/the-admin/the-sys-role-res')
const TheMultiSel = () => import('_views/the-admin/the-multi-sel')
const TheSection = () => import('_views/the-admin/the-section')
const TheStudent = () => import('_views/the-admin/the-student')
const TheSemester = () => import('_views/the-admin/the-semester')

export default {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  children: [
    {
      path: '',
      name: 'admin-home',
      component: TheHome,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: 'sysLog',
      name: 'admin-sysLog',
      component: TheSysLog,
      meta: {
        title: '日志管理'
      }
    },
    {
      path: 'sysRes',
      name: 'admin-sysRes',
      component: TheSysRes,
      meta: {
        title: '权限资源管理'
      }
    },
    {
      path: 'sysUser',
      name: 'admin-sysUser',
      component: TheSysUser,
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'teacher',
      name: 'admin-teacher',
      component: TheTeacher,
      meta: {
        title: '教师管理'
      }
    },
    {
      path: 'student',
      name: 'admin-student',
      component: TheStudent,
      meta: {
        title: '教师管理'
      }
    },
    {
      path: 'course',
      name: 'admin-course',
      component: TheCourse,
      meta: {
        title: '课程管理'
      }
    },
    {
      path: 'section',
      name: 'admin-section',
      component: TheSection,
      meta: {
        title: '章节'
      }
    },
    {
      path: 'essay',
      name: 'admin-essay',
      component: TheEssay,
      meta: {
        title: '问答题管理'
      }
    },
    {
      path: 'program',
      name: 'admin-program',
      component: TheProgram,
      meta: {
        title: '编程题管理'
      }
    },
    {
      path: 'judgement',
      name: 'admin-judgement',
      component: TheJudgement,
      meta: {
        title: '判断题管理'
      }
    },
    {
      path: 'exam',
      name: 'admin-exam',
      component: TheExam,
      meta: {
        title: '考试管理'
      }
    },
    {
      path: 'paper',
      name: 'admin-paper',
      component: ThePaper,
      meta: {
        title: '试卷管理'
      }
    },
    {
      path: 'multiSel',
      name: 'admin-multiSel',
      component: TheMultiSel,
      meta: {
        title: '多选题'
      }
    },
    {
      path: 'examRule',
      name: 'admin-examRule',
      component: TheExamRule,
      meta: {
        title: '组卷规则管理'
      }
    },
    {
      path: 'examHistories',
      name: 'admin-examHistories',
      component: TheExamHistories,
      meta: {
        title: '组卷规则管理'
      }
    },
    {
      path: 'sysRole',
      name: 'admin-sysRole',
      component: TheSysRole,
      meta: {
        title: '系统角色管理'
      }
    },
    {
      path: 'sysRoleRes',
      name: 'admin-sysRoleRes',
      component: TheSysRoleRes,
      meta: {
        title: '角色权限关联'
      }
    },
    {
      path: 'sysUserRole',
      name: 'admin-sysUserRole',
      component: TheSysUserRole,
      meta: {
        title: '用户角色关联管理'
      }
    },
    {
      path: 'sysData',
      name: 'admin-sysData',
      component: TheSysData,
      meta: {
        title: '系统基础信息表'
      }
    },
    {
      path: 'paperDetail',
      name: 'admin-paperDetail',
      component: ThePaperDetail,
      meta: {
        title: '试卷详情及阅卷信息'
      }
    },
    {
      path: 'selOptions',
      name: 'admin-selOptions',
      component: TheSelOptions,
      meta: {
        title: '单/多项选择题/填空题的选项信息表'
      }
    },
    {
      path: '/semester',
      name: 'admin-semester',
      component: TheSemester,
      meta: {
        title: '多选题'
      }
    }
  ]
}
