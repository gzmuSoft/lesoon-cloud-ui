const express = require('express')
const router = express.Router()

let essays = []
let id = 1

// 创建十个问答题对象
for (let i = 0; i < 100; i++) {
  essays.push({
    'name': '女票和老妈该救谁' + i,
    'spell': 'nvpiaohelaomagaijiushei' + i,
    'sort': 1,
    'createTime': '2019-05-12T15:19:49',
    'createUser': 'admin',
    'modifyTime': '2019-05-12 07:20:46',
    'modifyUser': 'admin',
    'remark': null,
    'isEnable': true,
    'answer': '此题无解',
    'explanation': '此题无解析',
    'courseId': 1,
    'sectionId': 1,
    'knowledgeId': 1,
    'difficultRate': '1',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/essays/' + id
      },
      'course': {
        'href': 'http://127.0.0.1:8080/essays/' + id
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
        'essays': essays.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/essays{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/essays'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/essays/search'
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
      'href': 'http://127.0.0.1:8080/essays/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/essays/' + id
    }
  }
  id++
  essays.unshift(body)
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
