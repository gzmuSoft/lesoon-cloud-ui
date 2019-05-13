const express = require('express')
const router = express.Router()

let courses = []
let id = 1

for (let i = 0; i < 10; i++) {
  courses.push({
    'name': '课程' + i,
    'spell': 'kecheng' + i,
    'sort': 1,
    'createTime': '2019-05-13T14:32:53',
    'createUser': null,
    'modifyTime': null,
    'modifyUser': '2019-05-13 06:32:57',
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
  res.status(200)
    .json({
      '_embedded': {
        'courses': courses
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
        'totalElements': 1,
        'totalPages': 1,
        'number': 0
      }
    })
})

router.post('/', (req, res) => {
  console.log(req.body)
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/courses/' + id
    }
  }
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
