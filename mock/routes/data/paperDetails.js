const express = require('express')
const router = express.Router()

let paperDetails = []
let id = 1

for (let i = 0; i < 100; i++) {
  paperDetails.push({
    'name': '试卷详情及阅卷信息1' + i,
    'spell': 'yuejuan1' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': '老师1',
    'modifyTime': new Date(),
    'modifyUser': '老师1',
    'remark': '通过了',
    'isEnable': true,
    'paperId': 7,
    'questionType': 4,
    'questionId': 12701,
    'refAnswer': '参考答案',
    'userAnswer': '用户答案',
    'orgValue': 10,
    'obtainValue': 8,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/paperDetails/1' + id
      },
      'paperDetail': {
        'href': 'http://127.0.0.1:8080/paperDetails/1' + id
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
        'paperDetails': paperDetails.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/paperDetails{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/paperDetails'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/paperDetails/search'
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
      'href': 'http://127.0.0.1:8080/paperDetails/1' + id
    },
    'paperDetail': {
      'href': 'http://127.0.0.1:8080/paperDetails/1' + id
    }
  }
  paperDetails.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  console.log('delete paperDetails id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
