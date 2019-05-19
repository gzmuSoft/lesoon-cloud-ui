const express = require('express')
const router = express.Router()

let teachers = []
let id = 1
// 创建十个教师对象
for (let i = 0; i < 100; i++) {
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
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/teachers/' + id
      },
      'teacher': {
        'href': 'http://127.0.0.1:8080/teachers/' + id
      }
    }
  })
  id++
}

// get 请求，路径必须为复数！！！
/**
 * @param req 请求
 * @param res 响应
 */
router.get('/', (req, res) => {
  let page = req.query.page
  if (typeof (req.query.page) !== 'undefined') {
    if (page > 9) page = 9
    else if (page < 0) page = 0
  } else {
    page = 0
  }
  let start = 10 * page
  res.status(200)
    .json({
      '_embedded': {
        'teachers': teachers.slice(start, start + 10)
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
        'totalElements': 100,
        'totalPages': 10,
        'number': page
      }
    })
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  console.log('delete rest id by ', req.params.id)
  res.sendStatus(204)
})

/**
 * post请求
 */
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    }
  }
  id++
  teachers.unshift(body)
  res.status(201)
    .json(body)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
