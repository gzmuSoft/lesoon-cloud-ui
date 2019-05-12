const express = require('express')
const router = express.Router()

router.get('/sysLogs', (req, res) => {
  res.status(200)
    .json({
      '_embedded': {
        'sysLogs': [
          {
            'name': '123',
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
                'href': 'http://127.0.0.1:8080/sysLogs/1'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/1'
              }
            }
          },
          {
            'name': '123',
            'spell': '123',
            'sort': 1,
            'createTime': '2019-04-13T23:03:34',
            'createUser': null,
            'modifyTime': '2019-04-13T23:03:42',
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
                'href': 'http://127.0.0.1:8080/sysLogs/2'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/2'
              }
            }
          },
          {
            'name': '123123123123213',
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
                'href': 'http://127.0.0.1:8080/sysLogs/3'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/3'
              }
            }
          },
          {
            'name': '1213',
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
                'href': 'http://127.0.0.1:8080/sysLogs/4'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/4'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': null,
            'createUser': null,
            'modifyTime': null,
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/5'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/5'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': null,
            'createUser': null,
            'modifyTime': null,
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/6'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/6'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': null,
            'createUser': null,
            'modifyTime': null,
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/7'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/7'
              }
            }
          },
          {
            'name': '123',
            'spell': null,
            'sort': null,
            'createTime': null,
            'createUser': null,
            'modifyTime': null,
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/8'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/8'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': null,
            'createUser': null,
            'modifyTime': null,
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/9'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/9'
              }
            }
          },
          {
            'name': '123',
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:00:56',
            'createUser': null,
            'modifyTime': '2019-05-10T22:00:56',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'operation': 'GET',
            'fromUrl': 'http://127.0.0.1:8080/essays',
            'ip': '127.0.0.1',
            'url': '/essays',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/10'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/10'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:56:47',
            'createUser': null,
            'modifyTime': '2019-05-10T22:56:47',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/11'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/11'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:56:47',
            'createUser': null,
            'modifyTime': '2019-05-10T22:56:47',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/12'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/12'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:56:47',
            'createUser': null,
            'modifyTime': '2019-05-10T22:56:47',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/13'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/13'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:19',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:19',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/14'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/14'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:19',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:19',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/15'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/15'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:19',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:19',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/16'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/16'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:19',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:19',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/17'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/17'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:19',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:19',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/18'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/18'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:27',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:27',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/19'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/19'
              }
            }
          },
          {
            'name': null,
            'spell': null,
            'sort': null,
            'createTime': '2019-05-10T22:58:27',
            'createUser': null,
            'modifyTime': '2019-05-10T22:58:27',
            'modifyUser': null,
            'remark': null,
            'isEnable': true,
            'browser': 'PostmanRuntime/7.11.0',
            'operation': 'POST',
            'fromUrl': 'http://localhost:8080/oauth/token',
            'ip': '0:0:0:0:0:0:0:1',
            'url': '/oauth/token',
            'status': '1',
            '_links': {
              'self': {
                'href': 'http://127.0.0.1:8080/sysLogs/20'
              },
              'sysLog': {
                'href': 'http://127.0.0.1:8080/sysLogs/20'
              }
            }
          }
        ]
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
        'totalElements': 33,
        'totalPages': 2,
        'number': 0
      }
    })
})

module.exports = router
