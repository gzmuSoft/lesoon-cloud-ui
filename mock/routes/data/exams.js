const express = require('express')
const router = express.Router()

let exams = []
let id = 1
// 创建十个测试对象
for (let i = 0; i < 100; i++) {
  exams.push({
    'name': '测试' + i,
    'spell': 'exam' + i,
    'sort': 1,
    'createTime': '1970-01-10T08:00:00',
    'createUser': 'admin',
    'modifyTime': '1970-01-10T08:00:00',
    'modifyUser': 'admin',
    'remark': '31',
    'isEnable': true,
    'startTime': '1970-01-01T08:00:00',
    'endTime': '1970-01-10T08:00:00',
    'totalUseTime': 21,
    'totalScore': 321,
    'courseId': 231,
    'classIds': '321',
    'allowTimes': 213,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/exams/' + id
      },
      'exam': {
        'href': 'http://127.0.0.1:8080/exams/1' + id
      }
    }
  })
  id++
}

/**
 * get 请求
 * @param req 请求
 * @param res 响应
 */
router.get('/', (req, res) => {
  // 请求成功
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
        'exams': exams.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/exams{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/exams'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/exams/search'
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
  res.sendStatus(204)
})

/**
 * post请求
 */
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/exams/' + id
    },
    'exam': {
      'href': 'http://127.0.0.1:8080/exams/' + id
    }
  }
  id++
  exams.unshift(body)
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
