const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const oauth = require('./routes/oatuh')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

app.use('/oauth', oauth)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
