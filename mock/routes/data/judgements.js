const express = require('express')
const router = express.Router()

let judgements = []
let id = 1
// 增加99个判断题
for (let i = 0; i < 100; i++) {
  judgements.push({
    'name': '问题' + i + '：1+1=？',
    'spell': 'panduanti' + i,
    'difficultRate': 0.1,
    'answer': 1,
    'explanation': '用手指头脚趾头都能算出1+1=2',
    'courseId': '1',
    'sectionId': '1',
    'knowledgeId': '1',
    'sort': i,
    'createUser': 'yxf',
    'createTime': '2019-05-14T08:32:53',
    'modifyUser': 'yxf',
    'modifyTime': '2019-05-14T08:32:53',
    'remark': '一道简单的判断题',
    'isEnable': true,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/judgements/' + id
      },
      'course': {
        'href': 'http://127.0.0.1:8080/judgements/' + id
      }
    }
  })
  id++
}
// 分页
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
        'judgements': judgements.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/judgements{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/judgements'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/judgements/search'
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
// 提交路径
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/judgements/' + id
    },
    'course': {
      'href': 'http://127.0.0.1:8080/judgements/' + id
    }
  }
  id++
  judgements.unshift(body)
  res.status(201)
    .json(req.body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})
//  删除方法
router.delete('/:id', (req, res) => {
  console.log('delete judgement id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
