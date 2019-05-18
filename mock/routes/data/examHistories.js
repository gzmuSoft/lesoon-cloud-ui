const express = require('express')
const router = express.Router()

let examHistories = []
let id = 1

for (let i = 0; i < 100; i++) {
  examHistories.push({
    'name': '考试试卷历史记录1' + i,
    'spell': 'exam_history' + i,
    'sort': 2,
    'createTime': new Date(),
    'createUser': '监考1',
    'modifyTime': new Date(),
    'modifyUser': '老师1',
    'remark': '备注',
    'isEnable': true,
    'examId': 2017,
    'studentId': 2017420,
    'maxScore': 99,
    'paperId': 7,
    'examTime': new Date(),
    'times': 2,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/examHistories/1' + id
      },
      'examHistory': {
        'href': 'http://127.0.0.1:8080/examHistories/1' + id
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
        'examHistories': examHistories.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/examHistories{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/examHistories'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/examHistories/search'
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
      'href': 'http://127.0.0.1:8080/examHistories/1' + id
    },
    'examHistory': {
      'href': 'http://127.0.0.1:8080/examHistories/1' + id
    }
  }
  examHistories.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  console.log('delete examHistories id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
