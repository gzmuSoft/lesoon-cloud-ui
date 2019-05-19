<template lang="pug">
  #lesson-judgement
    Tables(ref='tables', editable, addable :loading='loadingFlag' v-model='tableData', :columns='columns',
    @on-delete='handleDelete',
    @on-save-edit='handleSave',
    @on-start-edit='handleEdit',
    @on-cancel-edit='handleCancel',
    @on-add='handleAdd')
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'
import Tables from '_components/common/tables'
export default {
  name: 'TheJudgement',
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
        { key: 'difficultRate', title: '难度系数', editType: 'number' },
        { key: 'answer', title: '参考答案', editType: 'string' },
        { key: 'explanation', title: '答案解析', editType: 'string' },
        { key: 'courseId', title: '课程编号', editType: 'number' },
        { key: 'sectionId', title: '章节编号', editType: 'number' },
        { key: 'knowledgeId', title: '知识点编号', editType: 'number' },
        { key: 'remark', title: '备注', editType: 'string' },
        { key: 'sort', title: '排序', editType: 'number' },
        {
          title: '操作',
          key: 'handle',
          fixed: 'right',
          options: ['update', 'delete']
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
      rest.getAll(`judgements?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.judgements.map(item => {
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
    handleSave (row, index, editing) {
      let _this = this
      let add = editing['add']
      if (add) {
        delete editing['add']
        rest.addOne('judgements', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('judgements', editing).then(res => {
          for (const name in editing) {
            row[name] = editing[name]
          }
        })
      }
    },
    handleDelete (row, index) {
      let _this = this
      rest.deleteByLink(row._links.self.href).then(res => {
        _this.tableData.splice(index, 1)
      })
    },
    handleCancel (params) {
      // 取消编辑的函数
    },
    handleAdd () {
      // 增加按钮的函数
    },
    handleEdit (params) {
      // 开始编辑的函数
    }
  }
}
</script>

<style  lang="less"  scoped>

</style>
