<template lang="pug">
  .lesson-table-expand
    slot
    Row.lesson-table-expand-row
      Col(span="24")
        span 全拼：
        span {{ row.spell }}
    Row.lesson-table-expand-row
      Col(span="12")
        span 创建用户：
        span {{ row.createUser }}
      Col(span="12")
        span 创建时间：
        span {{ row.createTime }}
    Row.lesson-table-expand-row
      Col(span="12")
        span 修改用户：
        span {{ row.modifyUser }}
      Col(span="12")
        span 修改时间：
        span {{ row.modifyTime }}

</template>

<script>
export default {
  name: 'table-expand',
  props: {
    row: Object
  }
}
</script>

<style lang="less" scoped>
.lesson-table-expand-row {
  margin-bottom: 16px;
}
</style>
