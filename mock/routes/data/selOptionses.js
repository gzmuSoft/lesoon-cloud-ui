const express = require('express')
const router = express.Router()

let selOptionses = []
let id = 1

for (let i = 0; i < 100; i++) {
  selOptionses.push({
    'name': '选项值1' + i,
    'spell': 'zhi1' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': '老师1',
    'modifyTime': new Date(),
    'modifyUser': '老师1',
    'remark': '备注',
    'isEnable': true,
    'questionId': 10,
    'type': 3,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/selOptionses/1' + id
      },
      'selOptions': {
        'href': 'http://127.0.0.1:8080/selOptionses/1' + id
      }
    }
  })
  id++
}

/**
 * get请求
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
        'selOptionses': selOptionses.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/selOptionses{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/selOptionses'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/selOptionses/search'
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

/**
 * post请求
 */
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/selOptionses/1' + id
    },
    'selOptions': {
      'href': 'http://127.0.0.1:8080/selOptionses/1' + id
    }
  }
  selOptionses.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  console.log('delete selOptionses id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
