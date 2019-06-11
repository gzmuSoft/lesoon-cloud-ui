/**
 * 题目处理，在题目中自动添加一些标签，以混淆题目
 * 防止复制粘贴
 * @param topic
 * @returns {String}
 */
const label = ['a', 'b', 'span', 'label', 'em', 'i', 'strong']

export const topicHandle = (topic) => {
  return topic.split('').map(item => {
    let index = Math.round(Math.random() * 10)
    item += index > label.length - 1 ? '' : `<${label[index]}></${label[index]}>`
    return item
  }).join('')
}
