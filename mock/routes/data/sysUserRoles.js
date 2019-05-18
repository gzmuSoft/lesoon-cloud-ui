const express = require('express')
const router = express.Router()

let sysUserRoles = []
let id = 1
// 创建十个教师对象
for (let i = 0; i < 100; i++) {
  sysUserRoles.push({
    'name': '管理员权限赋予管理员' + i,
    'spell': 'admin' + i,
    'sort': 2,
    'createTime': new Date(),
    'createUser': 'admin',
    'modifyTime': new Date(),
    'modifyUser': 'admin',
    'remark': null,
    'isEnable': true,
    'userId': 1,
    'roleId': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
      },
      'sysUserRole': {
        'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
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
        'sysUserRoles': sysUserRoles.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysUserRoles{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysUserRoles'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysUserRoles/search'
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
 * delete请求
 */
router.delete('/:id', (req, res) => {
  console.log('delete rest id by ', req.params.id)
  res.sendStatus(204)
})

/**
 * post请求
 */
router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
    },
    'sysUserRole': {
      'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
    }
  }
  id++
  sysUserRoles.unshift(body)
  res.status(201)
    .json(body)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
