const express = require('express')
const router = express.Router()

let teachers = []
// 创建十个教师对象
for (let i = 0; i < 10; i++) {
  teachers.push({
    'name': '教师' + i,
    'spell': 'teacher' + i,
    'sort': 1,
    'createTime': '2019-05-12T15:19:49',
    'createUser': 'admin',
    'modifyTime': '2019-05-12 07:20:46',
    'modifyUser': 'admin',
    'remark': null,
    'isEnable': true,
    'userId': 11,
    'schoolId': 1,
    'collegeId': 1,
    'depId': 1,
    // 男女
    'gender': i % 2 === 0 ? '男' : '女',
    'birthday': '2019-05-30',
    'nation': '苗',
    'degree': '1',
    'academic': '1',
    'graduationDate': '1970-01-22',
    'major': '软件工程',
    'graduateInstitution': 's',
    'majorResearch': '1',
    'resume': '1',
    'workDate': '1970-01-29',
    'profTitle': '1',
    'profTitleAssDate': '2019-05-30',
    'isAcademicLeader': 1,
    'subjectCategory': '12',
    'idNumber': '1',
    'phone': '13112341234',
    'email': '123@123.com',
    '_checked': false,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/teachers/1'
      },
      'teacher': {
        'href': 'http://127.0.0.1:8080/teachers/1'
      }
    }
  })
}

// get 请求，路径必须为复数！！！
/**
 * @param req 请求
 * @param res 响应
 */
router.get('/', (req, res) => {
  res.status(200)
    .json({
      '_embedded': {
        'teachers': teachers
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/teachers{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/teachers'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/teachers/search'
        }
      },
      'page': {
        'size': 10,
        'totalElements': 1,
        'totalPages': 1,
        'number': 0
      }
    })
})

router.delete('/:id', (req, res) => {
  console.log('delete id by ', req.params.id)
  res.sendStatus(204)
})

router.post('/', (req, res) => {
  res.sendStatus(201)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
