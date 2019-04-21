import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

Random.extend({
  get_token () {
    return {
      token: 'get_token'
    }
  }
})

export default Mock
