const express = require('express')
const router = express.Router()

let exams = []
let id = 1
// 创建100个测试对象
for (let i = 0; i < 100; i++) {
  exams.push({
    'name': 'web商用项目实战测试第' + (i + 1) + '次考试',
    'spell': 'Web  ShangYongXiangMuShiZhanCeShiDi' + (i + 1) + 'CiKaoShi',
    'sort': (i + 1),
    'createTime': new Date(),
    'createUser': 'admin',
    'modifyTime': new Date(),
    'modifyUser': 'admin',
    'remark': '测试考试数据',
    'isEnable': true,
    'startTime': '2019-05-15T08:44:00',
    'endTime': '2019-06-01T08:00:00',
    'totalUseTime': 90,
    'totalScore': 100,
    'courseId': 1,
    'classIds': '1;2;3',
    'allowTimes': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/exams/' + id
      },
      'exam': {
        'href': 'http://127.0.0.1:8080/exams/' + id
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
