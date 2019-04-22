const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

/**
 * grant_type 为 password 时 密码获取 token
 * grant_type 为 refresh_token 时 刷新 token
 */
router.post('/token', (req, res) => {
  const body = JSON.stringify(req.body)
  switch (body.grant_type) {
    case 'password':
      password(body, res)
      break
    case 'refresh_token':
      refreshToken(body, res)
      break
    default:
      res.status(400)
        .json({
          error: 'unsupported_grant_type',
          error_description: `Unsupported grant type: ${body.grant_type}`
        })
  }
})

/**
 * 手机登录
 */
router.post('/sms', (req, res) => {
  let sms = req.get('sms')
  if (!sms || sms !== '123456') {
    res.status(400)
      .json({
        error: '请求中不存在设备号',
        error_description: `请求中不存在设备号`
      })
    return
  }
  const body = req.body
  if (body.sms !== '1234') {
    res.status(400)
      .json({
        error: '验证码验证失败，请重新发送！',
        error_description: `验证码验证失败，请重新发送！`
      })
  }
  const user = createUser(body.username, 'all')
  res.status(200)
    .json(buildJwt(user))
})

/**
 * token 检测
 */
router.post('/check_token', (req, res) => {
  if (!req.body.token) {
    res.status(400)
      .json({
        'error': 'Bad Request',
        'error_description': 'Required String parameter \'token\' is not present'
      })
    return
  }
  res.status(200)
    .json(createUser('admin', 'all'))
})

const password = (body, res) => {
  if (body.scope !== 'all') {
    res.status(400)
      .json({
        error: 'invalid_scope',
        error_description: `Invalid scope: ${body.scope}`,
        scope: `${body.scope}`
      })
    return
  }
  if (body.username !== 'admin' && body.password !== '1997') {
    res.status(400)
      .json({
        'error': 'invalid_grant',
        'error_description': '用户名或密码错误'
      })
    return
  }
  const user = createUser(body.username, body.scope)
  res.status(200)
    .json(buildJwt(user))
}

const refreshToken = (body, res) => {
  if (!body.refresh_token) {
    res.status(400)
      .json({
        error: 'invalid_grant',
        error_description: `Invalid refresh token: ${body.refresh_token}`
      })
  }
}

const createUser = (username, scope) => ({
  'aud': [
    'lesson-cloud'
  ],
  'user_name': username,
  'scope': [
    scope
  ],
  'active': true,
  'exp': 1555903007,
  'authorities': [
    'ROLE_ADMIN'
  ],
  'jti': '76d90158-aa21-4ac0-82cf-ba86cb4e1d3e',
  'client_id': 'lesson-cloud'
})

const buildJwt = (user) => ({
  access_token: jwt.sign(user, 'lesson-cloud'),
  token_type: 'bearer',
  refresh_token: jwt.sign(user, 'lesson-cloud'),
  expires_in: 3599,
  scope: 'all',
  jti: '76d90158-aa21-4ac0-82cf-ba86cb4e1d3e'
})

module.exports = router
