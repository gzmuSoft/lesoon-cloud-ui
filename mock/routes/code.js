const express = require('express')
const router = express.Router()

router.get('/sms', (req, res) => {
  let sms = req.get('sms')
  if (!sms) {
    res.status(401)
      .json({
        'error': 'unauthorized',
        'error_description': '请求中不存在设备号'
      })
    return
  }
  console.log(`向手机号 ${sms} 发送验证码 1234 成功`)
  res.send(200)
})

module.exports = router
