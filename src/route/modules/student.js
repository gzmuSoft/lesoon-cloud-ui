const TheStudent = () => import('_views/the-student')
const TheCourse = () => import('_views/the-student/the-course')
const TheExam = () => import('_views/the-student/the-exam')
const TheExamination = () => import('_views/the-student/the-examination')

export const examination = {
  path: '/examination',
  component: TheExamination,
  meta: {
    title: '考试'
  }
}

export const student = {
  path: '/student',
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
