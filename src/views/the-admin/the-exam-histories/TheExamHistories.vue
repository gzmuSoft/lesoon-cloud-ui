<template lang="pug">
  #lesson-course
    Tables(ref='tables', editable, v-model='tableData', :loading='loadingFlag',:columns='columns', @on-delete='handleDelete')
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")

</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'
import Tables from '_components/common/tables'
export default {
  name: 'TheExamHistories',
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
        { key: 'examId', title: '考试试卷编号' },
        { key: 'max_score', 'title': '最高得分' },
        { key: 'paper_id', title: '得分最高的试卷编号' },
        { key: 'exam_time', title: '得分最高的考试的开始时间' },
        { key: 'times', title: '已考次数' },
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
      rest.getAll(`examHistories?page=${page}`).finally(() => {
        _this.loadingFlag = false
      }).then(res => {
        _this.tableData = res.data._embedded.examHistories.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).catch(error => {
        console.log(error)
        _this.$Message.error('获取数据失败')
      })
    },
    handleChange (page) {
      this.initData(page - 1)
    },
    handleDelete (params) {
      let _this = this
      rest.deleteByLink(params.row._links.self.href).then(res => {
        _this.tableData.splice(params.index, 1)
        _this.$Message.success('删除成功')
      }).catch(error => {
        console.log(error)
        _this.$Message.error('删除失败')
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
