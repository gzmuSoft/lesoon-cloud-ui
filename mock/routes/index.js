const express = require('express')
const router = express.Router()

router.get('/', (res, req) => {
  req.status(200)
    .json({
      '_links': {
        'students': {
          'href': 'http://127.0.0.1:8080/students{?page,size,sort}',
          'templated': true
        },
        'semesters': {
          'href': 'http://127.0.0.1:8080/semesters{?page,size,sort}',
          'templated': true
        },
        'knowledges': {
          'href': 'http://127.0.0.1:8080/knowledges{?page,size,sort}',
          'templated': true
        },
        'sysRoles': {
          'href': 'http://127.0.0.1:8080/sysRoles{?page,size,sort}',
          'templated': true
        },
        'essays': {
          'href': 'http://127.0.0.1:8080/essays{?page,size,sort}',
          'templated': true
        },
        'papers': {
          'href': 'http://127.0.0.1:8080/papers{?page,size,sort}',
          'templated': true
        },
        'multiSels': {
          'href': 'http://127.0.0.1:8080/multiSels{?page,size,sort}',
          'templated': true
        },
        'exams': {
          'href': 'http://127.0.0.1:8080/exams{?page,size,sort}',
          'templated': true
        },
        'sysDatas': {
          'href': 'http://127.0.0.1:8080/sysDatas{?page,size,sort}',
          'templated': true
        },
        'sysUsers': {
          'href': 'http://127.0.0.1:8080/sysUsers{?page,size,sort}',
          'templated': true
        },
        'programs': {
          'href': 'http://127.0.0.1:8080/programs{?page,size,sort}',
          'templated': true
        },
        'selOptionses': {
          'href': 'http://127.0.0.1:8080/selOptionses{?page,size,sort}',
          'templated': true
        },
        'sysRoleReses': {
          'href': 'http://127.0.0.1:8080/sysRoleReses{?page,size,sort}',
          'templated': true
        },
        'examRules': {
          'href': 'http://127.0.0.1:8080/examRules{?page,size,sort}',
          'templated': true
        },
        'judgements': {
          'href': 'http://127.0.0.1:8080/judgements{?page,size,sort}',
          'templated': true
        },
        'examHistories': {
          'href': 'http://127.0.0.1:8080/examHistories{?page,size,sort}',
          'templated': true
        },
        'paperDetails': {
          'href': 'http://127.0.0.1:8080/paperDetails{?page,size,sort}',
          'templated': true
        },
        'sections': {
          'href': 'http://127.0.0.1:8080/sections{?page,size,sort}',
          'templated': true
        },
        'sysLogs': {
          'href': 'http://127.0.0.1:8080/sysLogs{?page,size,sort}',
          'templated': true
        },
        'sysUserRoles': {
          'href': 'http://127.0.0.1:8080/sysUserRoles{?page,size,sort}',
          'templated': true
        },
        'teachers': {
          'href': 'http://127.0.0.1:8080/teachers{?page,size,sort}',
          'templated': true
        },
        'courses': {
          'href': 'http://127.0.0.1:8080/courses{?page,size,sort}',
          'templated': true
        },
        'sysReses': {
          'href': 'http://127.0.0.1:8080/sysReses{?page,size,sort}',
          'templated': true
        },
        'singleSels': {
          'href': 'http://127.0.0.1:8080/singleSels{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile'
        }
      }
    })
})

router.get('/profile', (req, res) => {
  res.status(200)
    .json({
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/profile'
        },
        'students': {
          'href': 'http://127.0.0.1:8080/profile/students'
        },
        'semesters': {
          'href': 'http://127.0.0.1:8080/profile/semesters'
        },
        'knowledges': {
          'href': 'http://127.0.0.1:8080/profile/knowledges'
        },
        'sysRoles': {
          'href': 'http://127.0.0.1:8080/profile/sysRoles'
        },
        'essays': {
          'href': 'http://127.0.0.1:8080/profile/essays'
        },
        'papers': {
          'href': 'http://127.0.0.1:8080/profile/papers'
        },
        'multiSels': {
          'href': 'http://127.0.0.1:8080/profile/multiSels'
        },
        'exams': {
          'href': 'http://127.0.0.1:8080/profile/exams'
        },
        'sysDatas': {
          'href': 'http://127.0.0.1:8080/profile/sysDatas'
        },
        'sysUsers': {
          'href': 'http://127.0.0.1:8080/profile/sysUsers'
        },
        'programs': {
          'href': 'http://127.0.0.1:8080/profile/programs'
        },
        'selOptionses': {
          'href': 'http://127.0.0.1:8080/profile/selOptionses'
        },
        'sysRoleReses': {
          'href': 'http://127.0.0.1:8080/profile/sysRoleReses'
        },
        'examRules': {
          'href': 'http://127.0.0.1:8080/profile/examRules'
        },
        'judgements': {
          'href': 'http://127.0.0.1:8080/profile/judgements'
        },
        'examHistories': {
          'href': 'http://127.0.0.1:8080/profile/examHistories'
        },
        'paperDetails': {
          'href': 'http://127.0.0.1:8080/profile/paperDetails'
        },
        'sections': {
          'href': 'http://127.0.0.1:8080/profile/sections'
        },
        'sysLogs': {
          'href': 'http://127.0.0.1:8080/profile/sysLogs'
        },
        'sysUserRoles': {
          'href': 'http://127.0.0.1:8080/profile/sysUserRoles'
        },
        'teachers': {
          'href': 'http://127.0.0.1:8080/profile/teachers'
        },
        'courses': {
          'href': 'http://127.0.0.1:8080/profile/courses'
        },
        'sysReses': {
          'href': 'http://127.0.0.1:8080/profile/sysReses'
        },
        'singleSels': {
          'href': 'http://127.0.0.1:8080/profile/singleSels'
        }
      }
    })
})

module.exports = router
