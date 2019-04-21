const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/token', function (req, res, next) {
  let authorization = req.get('Authorization')
  if (!authorization || !authorization.startsWith('Basic ')) {
    res.status(401)
      .json({
        error: 'unauthorized',
        error_description: 'Full authentication is required to access this resource'
      })
  } else {
    res.status(200)
      .json({
        access_token: jwt.sign(JSON.stringify(req.body), 'lesson-cloud'),
        token_type: 'bearer',
        refresh_token: jwt.sign(JSON.stringify(req.body), 'lesson-cloud'),
        expires_in: 3599,
        scope: 'all',
        jti: 'f5f5342a-ad7e-4d80-9ac8-6e580f334e3d'
      })
  }
})

module.exports = router
