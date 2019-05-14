const express = require('express')
const router = express.Router()

let knowledges = []
let id = 1

for (let i = 0; i < 100; i++) {
  knowledges.push({
    'name': '知识点' + id,
    'spell': 'zhishidian' + id,
    'sort': 1,
    'createTime': '2019-05-14T17:40:50',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T17:40:50',
    'modifyUser': 'admin',
    'remark': '知识点1（必考）',
    'isEnable': true,
    'intro': '0',
    'parentId': 1,
    'courseId': 1,
    'sectionId': 2,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/knowledges/' + id
      },
      'knowledge': {
        'href': 'http://127.0.0.1:8080/knowledges/' + id
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
        'knowledges': knowledges.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/knowledges{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/knowledges'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sections/knowledges'
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
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/knowledges/' + id
    },
    'knowledges': {
      'href': 'http://127.0.0.1:8080/knowledges/' + id
    }
  }
  id++
  knowledges.unshift(req.body)
  res.status(201)
    .json(req.body)
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  res.sendStatus(204)
})

module.exports = router
