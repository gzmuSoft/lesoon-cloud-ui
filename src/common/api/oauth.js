import axios from './index'
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
      password: password,
      grant_type: 'password',
      scope: 'all'
    }
  })
}
