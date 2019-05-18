const express = require('express')
const router = express.Router()

let students = []
let id = 1

for (let i = 0; i < 100; i++) {
  students.push({
    'name': '李华' + i,
    'spell': 'lihua' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': '管理员',
    'modifyTime': new Date(),
    'modifyUser': '老师',
    'remark': '备注',
    'isEnable': true,
    'userId': 201742,
    'schoolId': 101101,
    'collegeId': 110101,
    'depId': 111011,
    'specialtyId': 102010,
    'classId': 201030,
    'gender': '男',
    'birthday': new Date(),
    'enterDate': new Date(),
    'academic': '本科',
    'graduationDate': '2020-07-30',
    'graduateInstitution': '贵州民族大学',
    'originalMajor': '软件工程',
    'resume': '简历',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/students/2017420' + id
      },
      'student': {
        'href': 'http://127.0.0.1:8080/students/2017420' + id
      }
    }
  })
  id++
}

/**
 * get请求
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
        'students': students.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/students{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/students'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/students/search'
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
 * post请求
 */
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/students/2017420' + id
    },
    'student': {
      'href': 'http://127.0.0.1:8080/students/2017420' + id
    }
  }
  students.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  console.log('delete students id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
