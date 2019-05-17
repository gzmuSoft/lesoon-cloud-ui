const express = require('express')
const router = express.Router()

let sysDatas = []
let id = 1

for (let i = 0; i < 100; i++) {
  sysDatas.push({
    'id': i,
    'name': '表' + i,
    'spell': 'biao' + i,
    'parent_id': 0,
    'brief': null,
    'type': 0,
    'sort': 1,
    'create_user': null,
    'create_time': '2019-04-13T23:03:34',
    'modify_user': null,
    'modify_time': '2019-04-13T23:18:52',
    'remark': null,
    'is_enable': true,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysDatas/' + id
      },
      'sysDatas': {
        'href': 'http://127.0.0.1:8080/sysDatas/' + id
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
        'sysDatas': sysDatas.slice(start, start + 10)
      },
      '_links': {
        'first': {
          'href': 'http://127.0.0.1:8080/sysDatas?page=0&size=20'
        },
        'self': {
          'href': 'http://127.0.0.1:8080/sysDatas{?page,size,sort}',
          'templated': true
        },
        'next': {
          'href': 'http://127.0.0.1:8080/sysDatas?page=1&size=20'
        },
        'last': {
          'href': 'http://127.0.0.1:8080/sysDatas?page=1&size=20'
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysDatas'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysDatas/search'
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
  console.log('delete sysDatas id by ', req.params.id)
  res.sendStatus(204)
})

module.exports = router
