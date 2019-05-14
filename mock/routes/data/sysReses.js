const express = require('express')
const router = express.Router()

let sysReses = []
let id = 1

for (let i = 0; i < 100; i++) {
  sysReses.push({
    'name': '手机登录' + i,
    'spell': null + i,
    'sort': null,
    'createTime': '2019-04-21T01:11:01',
    'createUser': null,
    'modifyTime': '2019-04-21T01:20:33',
    'modifyUser': null,
    'remark': null,
    'isEnable': true,
    'parentId': null,
    'des': 'oauth 手机登录',
    'matchUrl': '/oauth/sms',
    'router': '-',
    'component': '-',
    'iconCls': '-',
    'level': 0,
    'method': 'GET',
    'type': null,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysReses/' + id
      },
      'sysRes': {
        'href': 'http://127.0.0.1:8080/sysReses/' + id
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
        'sysReses': sysReses.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysReses{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysReses'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysReses/search'
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
      'href': 'http://127.0.0.1:8080/sysReses/' + id
    },
    'sysRes': {
      'href': 'http://127.0.0.1:8080/sysReses/' + id
    }
  }
  id++
  sysReses.unshift(body)
  res.status(201)
    .json(req.body)
})

router.delete('/:id', (req, res) => {
  console.log('delete sysReses id by ', req.params.id)
  res.sendStatus(204)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
