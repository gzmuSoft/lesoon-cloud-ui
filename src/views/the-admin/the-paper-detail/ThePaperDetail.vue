<template lang="pug">
  #lesson-course
    Tables(ref='tables', editable, v-model='tableData', :loading='loadingFlag',
    :columns='columns', @on-delete='handleDelete')
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'
import Tables from '_components/common/tables'
export default {
  name: 'ThePaperDetail',
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
        { key: 'name', title: '名称', editType: 'string' },
        { key: 'paperId', title: '得分最高的试卷编号', editType: 'number' },
        { key: 'questionType', title: '问题类型', editType: 'number' },
        { key: 'questionId', title: '问题编号', editType: 'number' },
        { key: 'refAnswer', title: '参考答案', editType: 'string' },
        { key: 'userAnswer', title: '用户答案', editType: 'string' },
        { key: 'orgValue', title: '总分', editType: 'number' },
        { key: 'obtainValue', title: '获得分数', editType: 'number' },
        { key: 'orgValue', title: '问题编号', editType: 'number' },
        { key: 'remark', title: '备注' },
        {
          title: '操作',
          key: 'handle',
          fixed: 'right',
          options: ['delete']
        }
      ]
    }
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`paperDetails?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.paperDetails.map(item => {
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
  },
  mounted () {
    this.initData(0)
  }
}
</script>

<style lang="less" scoped>
</style>
