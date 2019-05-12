const TheAdmin = () => import('_views/the-admin')
const TheSysLogs = () => import('_components/the-admin/the-sys-logs')
const TheTeacher = () => import('_components/the-admin/the-teacher')

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
    }
  ]
}
