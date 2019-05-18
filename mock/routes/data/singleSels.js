const express = require('express')
const router = express.Router()

let singleSels = []
let id = 1

for (let i = 0; i < 100; i++) {
  singleSels.push({
    'name': '题目1' + i,
    'spell': 'timu1' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': '老师1',
    'modifyTime': new Date(),
    'modifyUser': '老师1',
    'remark': '备注',
    'isEnable': true,
    'difficultRate': 0.5,
    'answer': 3,
    'explanation': null,
    'courseId': 1,
    'sectionId': 1,
    'knowledgeId': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/singleSels/1' + id
      },
      'singleSel': {
        'href': 'http://127.0.0.1:8080/singleSels/1' + id
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
        'singleSels': singleSels.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/singleSels{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/singleSels'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/singleSels/search'
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
      'href': 'http://127.0.0.1:8080/singleSels/1' + id
    },
    'singleSel': {
      'href': 'http://127.0.0.1:8080/singleSels/1' + id
    }
  }
  singleSels.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  console.log('delete singleSels id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
