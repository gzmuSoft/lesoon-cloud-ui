const TheAdmin = () => import('_views/the-admin')
const TheSysLogs = () => import('_components/the-admin/the-sys-logs')
const TheTeacher = () => import('_components/the-admin/the-teacher')
const TheCourse = () => import('_components/the-admin/the-course')
const TheJudgement = () => import('_components/the-admin/the-judgement')
const TheEssay = () => import('_components/the-admin/the-essay')

export default {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  redirect: 'sysLogs',
  children: [
    {
      path: '/sysLogs',
      name: 'sysLogs',
      component: TheSysLogs,
      meta: {
        title: '日志管理'
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TheTeacher,
      meta: {
        title: '教师管理'
      }
    },
    {
      path: '/course',
      name: 'course',
      component: TheCourse,
      meta: {
        title: '课程管理'
      }
    },
    {
      path: '/essay',
      name: 'essay',
      component: TheEssay,
      meta: {
        title: '问答题管理'
      }
    },
    {
      path: '/judgement',
      name: 'judgement',
      component: TheJudgement,
      meta: {
        title: '判断题管理'
      }
    }
  ]
}
