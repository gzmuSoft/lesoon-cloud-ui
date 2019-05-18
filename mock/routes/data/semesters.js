const express = require('express')
const router = express.Router()

let semesters = []
let id = 1

for (let i = 0; i < 100; i++) {
  semesters.push({
    'name': 'ppp' + i,
    'spell': 'semester' + i,
    'sort': 1323,
    'createTime': new Date(),
    'createUser': 'admin',
    'modifyTime': new Date(),
    'modifyUser': 'admin',
    'remark': '备注',
    'isEnable': true,
    'schoolId': 1001,
    'startDate': '2019-05-18',
    'endDate': '2019-05-17',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/semesters/' + id
      },
      'semester': {
        'href': 'http://127.0.0.1:8080/semesters/' + id
      }
    }
  })
  id++
}

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
        'semesters': semesters.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/semesters{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/semesters'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/semesters/search'
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
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/semesters/1101' + id
    },
    'semester': {
      'href': 'http://127.0.0.1:8080/semesters/1101' + id
    }
  }
  semesters.unshift(body)
  id++
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  console.log('delete semesters id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
