import axios from './index'
import md5 from 'js-md5'
import base32 from 'base-32'
const OAUTH_TOKEN = '/oauth/token'
const authorization = 'Basic bGVzc29uLWNsb3VkOmxlc3Nvbi1jbG91ZC1zZWNyZXQ='

export const oauthToken = ({ username, password }) => {
  return axios.request({
    url: OAUTH_TOKEN,
    method: 'post',
    headers: {
      Authorization: authorization
    },
    data: {
      username: username,
      password: md5(base32.encode(password)),
      grant_type: 'password',
      scope: 'all'
    }
  })
}
