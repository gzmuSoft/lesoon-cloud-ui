const express = require('express')
const router = express.Router()

let sysUsers = []
let id = 1

for (let i = 0; i < 100; i++) {
  sysUsers.push({
    'name': '管理员' + i,
    'spell': 'admin' + i,
    'pwd': 'pwd' + i,
    'sort': 1,
    'createTime': '2019-04-21T01:07:50',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T21:33:27',
    'modifyUser': 'admin',
    'remark': null,
    'isEnable': i % 2 === 0 ? 'false' : 'true',
    'entityId': 7,
    'entityType': i % 5 === 4 ? '学生' : i % 4 === 3 ? '教师' : i % 3 === 2 ? '课程管理员' : i % 2 === 1 ? '教务管理员' : '系统管理员',
    'status': i % 3 + 1 === 3 ? '禁用' : i % 2 + 1 === 2 ? '锁定一小时' : '正常',
    'icon': '图标：images/guest.jpg',
    'email': 'lizhongyue248@163.com',
    'phone': '13765308262',
    'onlineStatus': i % 2 === 0 ? '离线' : '在线',
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysUsers/' + id
      },
      'sysUser': {
        'href': 'http://127.0.0.1:8080/sysUsers/' + id
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
        'sysUsers': sysUsers.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysUsers{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysUsers'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysUsers/search'
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
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysUsers/' + id
    },
    'sysUsers': {
      'href': 'http://127.0.0.1:8080/sysUsers/' + id
    }
  }
  id++
  sysUsers.unshift(req.body)
  res.status(201)
    .json(req.body)
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  res.sendStatus(204)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})
module.exports = router
