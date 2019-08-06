const TheTeacher = () => import('_views/the-teacher')
const TheCourse = () => import('_views/the-teacher/the-course')
const TheSection = () => import('_views/the-teacher/the-section')
const TheSingleSel = () => import('_views/the-teacher/the-single-sel')
const TheAnalysis = () => import('_views/the-teacher/the-analysis')
const TheExamCreate = () => import('_views/the-teacher/the-exam-create')
const TheExamRule = () => import('_views/the-teacher/the-exam-rule')

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
      path: 'examCreate',
      name: 'the-exam-create',
      component: TheExamCreate,
      meta: {
        title: '创建考试'
      }
    },
    {
      path: 'examRule',
      name: 'the-exam-rule',
      component: TheExamRule,
      meta: {
        title: '组卷规则'
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
      }
    }
  ]
}
