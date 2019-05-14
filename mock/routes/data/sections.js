const express = require('express')
const router = express.Router()

let sections = []
let id = 1

for (let i = 0; i < 100; i++) {
  sections.push({
    'name': '章节' + id,
    'spell': 'zhangjie' + id,
    'sort': 1,
    'createTime': '2019-05-14T16:47:41',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T16:47:41',
    'modifyUser': 'admin',
    'remark': '第一章',
    'isEnable': true,
    'intro': '第一章节',
    'courseId': 1,
    'parentId': 0,
    'type': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sections/' + id
      },
      'section': {
        'href': 'http://127.0.0.1:8080/sections/' + id
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
        'sections': sections.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sections{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sections'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sections/search'
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
      'href': 'http://127.0.0.1:8080/sections/' + id
    },
    'sections': {
      'href': 'http://127.0.0.1:8080/sections/' + id
    }
  }
  id++
  sections.unshift(req.body)
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
