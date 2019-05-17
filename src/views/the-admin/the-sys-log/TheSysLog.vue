<template lang="pug">
  #lesson-log
    Tables(ref='tables', editable, v-model='tableData', :loading='loadingFlag',
      :columns='columns', @on-delete='handleDelete')
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")

</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'
import Tables from '_components/common/tables'

export default {
  name: 'TheSysLog',
  components: {
    TableExpand,
    Tables
  },
  data () {
    return {
      loadingFlag: true,
      tableData: [],
      page: {},
      columns: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(TableExpand, {
              props: {
                row: params.row
              }
            })
          }
        },
        { type: 'selection', width: 50, align: 'center' },
        { key: 'name', title: '名称' },
        { key: 'browser', title: '浏览器' },
        { key: 'operation', title: '操作' },
        { key: 'from_url', title: '来源' },
        {
          key: 'ip',
          title: 'ip',
          render: (h, params) => (
            // reach jsx
            <div>
              <i-tag color="red">{params.row.ip}</i-tag>
            </div>
          )
        },
        { key: 'url', title: '地址' },
        { key: 'sort', title: '排序', width: '60', align: 'center' },
        {
          title: 'Action',
          key: 'handle',
          width: 100,
          options: ['delete']
        }
      ]
    }
  },
  mounted () {
    this.initData(0)
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`sysLogs?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysLogs.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).finally(() => {
        _this.loadingFlag = false
      })
    },
    handleChange (page) {
      this.initData(page - 1)
    },
    handleDelete (row, index) {
      let _this = this
      rest.deleteByLink(row._links.self.href).then(res => {
        _this.tableData.splice(index, 1)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
