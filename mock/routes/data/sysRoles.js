const express = require('express')
const router = express.Router()

let sysRoles = []
let id = 1

for (let i = 0; i < 100; i++) {
  sysRoles.push(
    {
      'name': 'ROLE_ADMIN',
      'spell': '管理员',
      'sort': 1,
      'createTime': '2019-04-20T06:48:15',
      'createUser': 'admin',
      'modifyTime': '2019-04-21T01:08:39',
      'modifyUser': 'admin',
      'remark': null,
      'isEnable': true,
      'des': '开放所有资源访问权限',
      'iconCls': 'status_online',
      'parentId': 0,
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + id
        },
        'sysRole': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + id
        }
      }
    },
    {
      'name': 'ROLE_ANONYMOUS',
      'spell': '匿名资源',
      'sort': 3,
      'createTime': '2019-04-21T00:58:45',
      'createUser': 'admin',
      'modifyTime': '2019-04-21T01:09:39',
      'modifyUser': 'admin',
      'remark': null,
      'isEnable': true,
      'des': '无需任何认证即可访问',
      'iconCls': 'status_online',
      'parentId': 0,
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + (++i)
        },
        'sysRole': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + i
        }
      }
    },
    {
      'name': 'ROLE_TEACHER',
      'spell': '教师',
      'sort': 2,
      'createTime': '2019-04-20T06:48:25',
      'createUser': 'admin',
      'modifyTime': '2019-04-21T01:09:38',
      'modifyUser': 'admin',
      'remark': null,
      'isEnable': true,
      'des': '开放部分权限',
      'iconCls': 'status_online',
      'parentId': 0,
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + (++i)
        },
        'sysRole': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + i
        }
      }
    },
    {
      'name': 'ROLE_STUDENT',
      'spell': '学生',
      'sort': 4,
      'createTime': '2019-04-21T01:10:10',
      'createUser': 'admin',
      'modifyTime': '2019-04-21T01:10:10',
      'modifyUser': 'admin',
      'remark': null,
      'isEnable': true,
      'des': '开放部分资源',
      'iconCls': 'status_online',
      'parentId': 0,
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + (++id)
        },
        'sysRole': {
          'href': 'http://127.0.0.1:8080/sysRoles/' + id
        }
      }
    }
  )
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
        'sysRoles': sysRoles.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysRoles{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysRoles'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysRoles/search'
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
  console.log('delete papers id by ', req.params.id)
  res.sendStatus(204)
})

router.post('/', (req, res) => {
  let body = req.body
  body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysRoles/' + id
    },
    'sysRoles': {
      'href': 'http://127.0.0.1:8080/sysRoles/' + id
    }
  }
  sysRoles.unshift(body)
  console.log(body)
  id++
  res.status(201)
    .json(body)
})

router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
