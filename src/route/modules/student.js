const TheStudent = () => import('_views/the-student')
const TheCourse = () => import('_views/the-student/the-course')
const TheExam = () => import('_views/the-student/the-exam')

export default {
  path: '/student',
  name: 'student',
  component: TheStudent,
  children: [
    {
      path: '',
      name: 'student-course',
      component: TheCourse,
      meta: {
        title: '学生课程'
      }
    },
    {
      path: 'exam',
      name: 'student-exam',
      component: TheExam,
      meta: {
        title: '学生考试'
      }
    }
  ]
}
