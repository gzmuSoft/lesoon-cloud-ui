const express = require('express')
const router = express.Router()

let courses = []
let id = 1

for (let i = 0; i < 100; i++) {
  courses.push({
    'name': '课程' + i,
    'spell': 'kecheng' + i,
    'sort': 1,
    'createTime': '2019-05-13T14:32:53',
    'createUser': 'admin',
    'modifyTime': '2019-05-13 06:32:57',
    'modifyUser': 'admin',
    'remark': null,
    'isEnable': true,
    'period': 123,
    'credit': 321,
    'type': '1',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/courses/' + id
      },
      'course': {
        'href': 'http://127.0.0.1:8080/courses/' + id
      }
    }
  })
  id++
}

router.get('/', (req, res) => {
  let page = req.query.page
  console.log(page)
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
        'courses': courses.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/courses{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/courses'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/courses/search'
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

router.post('/', (req, res) => {
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    }
  }
  courses.unshift(req.body)
  id++
  res.status(201)
    .json(req.body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  console.log('delete course id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
