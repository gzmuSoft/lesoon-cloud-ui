const express = require('express')
const router = express.Router()

let papers = []
let id = 1
//  创建10张试卷
for (let i = 0; i < 100; i++) {
  papers.push({
    'name': '数学试卷' + i,
    'spell': 'shuxueshijuan' + i,
    'examId': 1,
    'studentId': 1,
    'startTime': '2019-05-14T14:32:53',
    'submitTime': '2019-05-14T08:32:53',
    'score': '100',
    'singleSelIds': '[7,6,9,8,22,41,10,8]',
    'singleSelOpts': '[6,7,8,9,10,22,41]',
    'multiSelIds': '[7,6,1,8,22,41,10,8]',
    'multiSelOpts': '[1,6,7,8,10,22,41]',
    'judgementIds': '[99,5,4,100,88,46]',
    'judgementOpts': '[4,5,46,88,99,100]',
    'essayIds': '[1,6,7,8,10,22,41]',
    'programIds': '[4,5,46,88,99,100]',
    'sort': 1,
    'createTime': '2019-05-14T14:32:53',
    'createUser': 'yxf',
    'modifyTime': '2019-05-14T14:32:53',
    'modifyUser': 'yxf',
    'remark': '这是一张数学卷子',
    'isEnable': true,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/papers/' + id
      },
      'course': {
        'href': 'http://127.0.0.1:8080/papers/' + id
      }
    }
  })
  id++
}
// get 请求，路径必须为复数！！！
/**
 * @param req 请求
 * @param res 响应
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
        'papers': papers.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/papers{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/papers'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/teachers/papers'
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

router.delete('/:id', (req, res) => {
  console.log('delete papers id by ', req.params.id)
  res.sendStatus(204)
})

router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/papers/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/papers/' + id
    }
  }
  id++
  papers.unshift(body)
  res.status(201)
    .json(req.body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
