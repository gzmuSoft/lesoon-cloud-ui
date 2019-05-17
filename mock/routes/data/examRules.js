const express = require('express')
const router = express.Router()

// 模拟的数据
let examRules = []
let id = 1
for (let i = 0; i < 100; i++) {
  examRules.push({
    'name': '组卷规则' + i,
    'spell': '拼写' + i,
    'examId': i,
    'questionType': i % 5 === 4 ? '编程题' : i % 4 === 3 ? '填空题' : i % 3 === 2 ? '判断题' : i % 2 === 1 ? '多项选择题' : '单项选择题',
    'questionCount': i * i * 10 - i,
    'startDifficultRate': i % 10 / 10,
    'endDifficultRate': i % 10 / 10,
    'eachValue': i * 10,
    'sort': i,
    'createUser': '用户名称' + i,
    'createTime': new Date(),
    'modifyUser': '用户名称' + i,
    'modifyTime': new Date(),
    'remark': '备注',
    'isEnable': i % 2 === 0 ? '否' : '是',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/examRules/' + id
      },
      'examRules': {
        'href': 'http://127.0.0.1:8080/examRules/' + id
      }
    }
  })
  id++
}

/**
 * @param req 请求
 * @param res 响应
 */
router.get('/', (req, res) => {
  // 请求成功
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
        'examRules': examRules.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/examRules{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/examRules'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/examRules/search'
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

// 添加
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/examRules/' + id
    },
    'examRules': {
      'href': 'http://127.0.0.1:8080/examRules/' + id
    }
  }
  id++
  examRules.unshift(body)
  res.status(201)
    .json(body)
})

// 更新
router.put('/', (req, res) => {
  res.sendStatus(200)
})

// 删除
router.delete('/:id', (req, res) => {
  console.log('delete examRules id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
