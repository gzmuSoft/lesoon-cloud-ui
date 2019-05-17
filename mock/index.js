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
app.use('/oauth', require('./routes/oatuh'))
app.use('/code', require('./routes/code'))
app.use('/teachers', require('./routes/data/teachers'))
app.use('/sysLogs', require('./routes/data/sysLogs'))
app.use('/courses', require('./routes/data/courses'))
app.use('/judgements', require('./routes/data/judgements'))
app.use('/essays', require('./routes/data/essays'))
app.use('/papers', require('./routes/data/papers'))
app.use('/examRules', require('./routes/data/examRules'))
app.use('/sysDatas', require('./routes/data/sysDatas'))

app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
})
