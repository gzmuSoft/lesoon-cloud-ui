const TheAdmin = () => import('_views/the-admin')

export default {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  meta: {
    title: 'admin'
  }
}
