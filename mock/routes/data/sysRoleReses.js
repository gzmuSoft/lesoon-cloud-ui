const express = require('express')
const router = express.Router()

let sysRoleReses = []
let id = 1
// 创建十个教师对象
for (let i = 0; i < 10; i++) {
  sysRoleReses.push({
    'name': '角色权限关联1' + i,
    'spell': 'guanlian1' + i,
    'sort': 1,
    'createTime': new Date(),
    'createUser': 'admin',
    'modifyTime': new Date(),
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
  res.status(200)
    .json({
      '_embedded': {
        'sysRoleReses': sysRoleReses
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
        'totalElements': 1,
        'totalPages': 1,
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
      'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
    },
    'sysRoleRes': {
      'href': 'http://127.0.0.1:8080/sysRoleReses/' + id
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
