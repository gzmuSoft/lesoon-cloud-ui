const TheTeacher = () => import('_views/the-teacher')
const TheCourse = () => import('_views/the-teacher/the-course')
const TheSection = () => import('_views/the-teacher/the-section')
const TheSingleSel = () => import('_views/the-teacher/the-single-sel')
const TheAnalysis = () => import('_views/the-teacher/the-analysis')
const TheAll = () => import('_views/the-teacher/the-single-sel/the-all')
const TheFinish = () => import('_views/the-teacher/the-single-sel/the-finish')

export default {
  path: '/teacher',
  component: TheTeacher,
  children: [
    {
      path: '',
      name: 'teacher-course',
      component: TheCourse,
      meta: {
        title: '我的课程'
      }
    },
    {
      path: 'section',
      name: 'teacher-section',
      component: TheSection,
      meta: {
        title: '章节管理'
      }
    },
    {
      path: 'analysis',
      name: 'teacher-analysis',
      component: TheAnalysis,
      meta: {
        title: '统计分析'
      }
    },
    {
      path: 'singleSel',
      name: 'teacher-singleSel',
      component: TheSingleSel,
      meta: {
        title: '单选题管理'
      },
      children: [
        {
          path: '',
          name: 'singleSel-all',
          component: TheAll,
          meta: {
            title: '全部单选题'
          }
        },
        {
          path: 'finish',
          name: 'singleSel-finish',
          component: TheFinish,
          meta: {
            title: '已完成的单选题'
          }
        }
      ]
    }
  ]
}
