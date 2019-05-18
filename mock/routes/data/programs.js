const express = require('express')
const router = express.Router()

let programs = []
let id = 1

for (let i = 0; i < 100; i++) {
  programs.push({
    'name': '编程题' + i,
    'spell': 'bainchengti' + i,
    'sort': 1,
    'createTime': '2019-05-14T21:42:13',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T21:42:13',
    'modifyUser': 'admin',
    'remark': '20分',
    'isEnable': true,
    'difficultRate': 0.1,
    'answer': '略',
    'explanation': '这样这样这样。。。',
    'courseId': 1,
    'sectionId': 1,
    'knowledgeId': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/programs/' + id
      },
      'program': {
        'href': 'http://127.0.0.1:8080/programs/' + id
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
        'programs': programs.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/programs{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/programs'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sections/programs'
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
      'href': 'http://127.0.0.1:8080/programs/' + id
    },
    'programs': {
      'href': 'http://127.0.0.1:8080/programs/' + id
    }
  }
  id++
  programs.unshift(req.body)
  res.status(201)
    .json(req.body)
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  res.sendStatus(204)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
