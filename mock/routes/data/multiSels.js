const express = require('express')
const router = express.Router()

let multiSels = []
let id = 1

for (let i = 0; i < 100; i++) {
  multiSels.push({
    'name': '多项选择题1' + i,
    'spell': 'duoxuan1' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': '老师',
    'modifyTime': new Date(),
    'modifyUser': '老师',
    'remark': '备注',
    'isEnable': true,
    'difficultRate': 0.1,
    'answer': '1,2,3,4',
    'explanation': '全选总有对的',
    'courseId': 1,
    'sectionId': 1,
    'knowledgeId': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/multiSels/1' + id
      },
      'multiSel': {
        'href': 'http://127.0.0.1:8080/multiSels/1' + id
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
        'multiSels': multiSels.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/multiSels{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/multiSels'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/multiSels/search'
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
      'href': 'http://127.0.0.1:8080/multiSels/1' + id
    },
    'multiSel': {
      'href': 'http://127.0.0.1:8080/multiSels/1' + id
    }
  }
  multiSels.unshift(body)
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
  console.log('delete multiSels id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
