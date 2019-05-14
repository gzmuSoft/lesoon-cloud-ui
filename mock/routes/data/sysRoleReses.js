const express = require('express')
const router = express.Router()

let sysRoleReses = []
let id = 1
// 创建十个教师对象
for (let i = 0; i < 100; i++) {
  sysRoleReses.push({
    'name': '角色权限关联1' + i,
    'spell': 'guanlian1' + i,
    'sort': 1,
    'createTime': '2019-05-14T21:29:03',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T21:29:03',
    'modifyUser': 'admin',
    'remark': 'juese-quanxina',
    'isEnable': true,
    'roleId': 1,
    'resId': 1,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
      },
      'sysRoleRes': {
        'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
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
        'sysRoleReses': sysRoleReses.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoleReses{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysRoleReses'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysRoleReses/search'
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
  console.log('delete rest id by ', req.params.id)
  res.sendStatus(204)
})

router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
    },
    'sysRoleRes': {
      'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
    }
  }
  id++
  sysRoleReses.unshift(body)
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
