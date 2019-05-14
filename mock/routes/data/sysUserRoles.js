const express = require('express')
const router = express.Router()

let sysUserRoles = []
let id = 1
// 创建十个教师对象
for (let i = 0; i < 10; i++) {
  sysUserRoles.push({
    'name': '管理员权限赋予管理员' + i,
    'spell': 'admin' + i,
    'sort': null,
    'createTime': '2019-04-21T01:23:12',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T21:35:24',
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
  res.status(200)
    .json({
      '_embedded': {
        'sysUserRoles': sysUserRoles
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
        'number': 0
      }
    })
})

router.delete('/:id', (req, res) => {
  console.log('delete rest id by ', req.params.id)
  res.sendStatus(204)
})

router.post('/', (req, res) => {
  console.log(req.body)
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
    },
    'sysUserRole': {
      'href': 'http://127.0.0.1:8080/sysUserRoles/' + id
    }
  }
  id++
  res.status(201)
    .json(req.body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
