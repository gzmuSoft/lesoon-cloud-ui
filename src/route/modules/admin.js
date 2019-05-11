const TheAdmin = () => import('_views/the-admin')
const TheSysLogs = () => import('_components/the-admin/the-sys-logs')

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
    }
  ]
}
