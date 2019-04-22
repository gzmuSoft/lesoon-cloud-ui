const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const oauth = require('./routes/oatuh')
const code = require('./routes/code')

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
  if (!authorization || !authorization.startsWith('Basic ') ||
    authorization.substr(6) !== 'bGVzc29uLWNsb3VkOmxlc3Nvbi1jbG91ZC1zZWNyZXQ') {
    res.status(401)
      .json({
        error: 'unauthorized',
        error_description: 'Full authentication is required to access this resource'
      })
    return
  }
  next()
})

app.use('/oauth', oauth)
app.use('/code', code)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
