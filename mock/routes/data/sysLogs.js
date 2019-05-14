const express = require('express')
const router = express.Router()

let sysLogs = []
let id = 1

for (let i = 0; i < 100; i++) {
  sysLogs.push({
    'name': '日志' + i,
    'spell': '123',
    'sort': 1,
    'createTime': '2019-04-13T23:03:34',
    'createUser': null,
    'modifyTime': '2019-04-13T23:18:52',
    'modifyUser': null,
    'remark': null,
    'isEnable': true,
    'browser': '123',
    'operation': '123',
    'fromUrl': '123',
    'ip': '1232',
    'url': '123',
    'status': '1',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysLogs/' + id
      },
      'sysLog': {
        'href': 'http://127.0.0.1:8080/sysLogs/' + id
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
        'sysLogs': sysLogs.slice(start, start + 10)
      },
      '_links': {
        'first': {
          'href': 'http://127.0.0.1:8080/sysLogs?page=0&size=20'
        },
        'self': {
          'href': 'http://127.0.0.1:8080/sysLogs{?page,size,sort}',
          'templated': true
        },
        'next': {
          'href': 'http://127.0.0.1:8080/sysLogs?page=1&size=20'
        },
        'last': {
          'href': 'http://127.0.0.1:8080/sysLogs?page=1&size=20'
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysLogs'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysLogs/search'
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
  console.log('delete sysLog id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
