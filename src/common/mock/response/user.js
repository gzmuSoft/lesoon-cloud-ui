import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  // return {
  //   name: 'asdf'
  // }
  const template = {
    // 2-10 次 echo
    'str|2-10': 'echo',
    // 3 次 echo
    'name|3': 'echo',
    // 循环的时候会增加
    'age|+2': 16,
    // 随机数
    'num|4-10': 0,
    email: Random.email(),
    token: Random.get_token()
  }
  return Mock.mock(template)
}
