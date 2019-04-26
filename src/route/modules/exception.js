const TheError = () => import('_views/the-error')

export default {
  path: '/error',
  name: 'error',
  component: TheError,
  meta: {
    title: '未找到页面'
  }
}
