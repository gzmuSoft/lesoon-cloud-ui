const TheTeacher = () => import('_views/the-teacher')
const TheCourse = () => import('_views/the-teacher/the-course')
const TheSection = () => import('_views/the-teacher/the-section')
const TheSingleSel = () => import('_views/the-teacher/the-single-sel')

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
      path: 'singleSel',
      name: 'teacher-singleSel',
      component: TheSingleSel,
      meta: {
        title: '单选题管理'
      }
    }
  ]
}
