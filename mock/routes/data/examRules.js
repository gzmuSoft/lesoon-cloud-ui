const express = require('express')
const router = express.Router()

// 模拟的数据
let examRules = []
let id = 1
for (let i = 0; i < 10; i++) {
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
  res.status(200)
    .json({
      '_embedded': {
        'examRules': examRules
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
        'totalElements': 1,
        'totalPages': 1,
        'number': 0
      }
    })
})

// 添加
router.post('/', (req, res) => {
  console.log(req.body)
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/examRules/' + id
    },
    'examRules': {
      'href': 'http://127.0.0.1:8080/examRules/' + id
    }
  }
  id++
  res.status(201)
    .json(req.body)
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
