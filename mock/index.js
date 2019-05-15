const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 跨域处理
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

// 对于 oauth 的路径，都要验证请求头中是否携带合适的认证信息。
app.all('/oauth/*', (req, res, next) => {
  const authorization = req.get('Authorization')
  console.log(authorization)
  if (authorization && authorization.startsWith('Basic ')) {
    next()
  } else if (authorization && authorization.startsWith('Bearer ')) {
    next()
  } else {
    res.status(401)
      .json({
        error: 'unauthorized',
        error_description: 'Full authentication is required to access this resource'
      })
  }
})
app.use('/', require('./routes/index'))
let fs = require('fs')
let path = require('path')
let root = path.join(__dirname)
// 递归把routes目录下的所有文件全部引用
function readDir (path) {
  fs.readdir(path, function (_err, menu) {
    if (!menu) { return }
    menu.forEach(function (ele) {
      fs.stat(path + '/' + ele, function (_err, info) {
        if (info.isDirectory()) {
          readDir(path + '/' + ele)
        } else {
          let p = ele.substring(0, ele.length - 3)
          app.use('/' + p, require(path + '/' + ele))
        }
      })
    })
  })
}

readDir(path.join(root, 'routes'))

// app.use('/oauth', require('./routes/oauth'))
// app.use('/code', require('./routes/code'))
// app.use('/courses', require('./routes/data/courses'))
// app.use('/essays', require('./routes/data/essays'))
// app.use('/examRules', require('./routes/data/examRules'))
// app.use('/exams', require('./routes/data/exams'))
// app.use('/judgements', require('./routes/data/judgements'))
// app.use('/knowledges', require('./routes/data/knowledges'))
// app.use('/papers', require('./routes/data/papers'))
// app.use('/programs', require('./routes/data/programs'))
// app.use('/sections', require('./routes/data/sections'))
// app.use('/sysDatas', require('./routes/data/sysDatas'))
// app.use('/sysLogs', require('./routes/data/sysLogs'))
// app.use('/sysReses', require('./routes/data/sysReses'))
// app.use('/sysRoleReses', require('./routes/data/sysRoleReses'))
// app.use('/sysRoles', require('./routes/data/sysRoles'))
// app.use('/sysUserRoles', require('./routes/data/sysUserRoles'))
// app.use('/sysUsers', require('./routes/data/sysUsers'))
// app.use('/teachers', require('./routes/data/teachers'))

app.listen(8082, function () {
  console.log('lesson-cloud-ui mock listening on port 8082!')
})
