<template lang="pug">
  #lesson-paper
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
  name: 'ThePaper',
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
        { key: 'examId', title: '试卷id', editType: 'number' },
        { key: 'studentId', title: '学生id', editType: 'number' },
        { key: 'startTime', title: '开始时间', editType: 'date' },
        { key: 'submitTime', title: '结束时间', editType: 'date' },
        { key: 'score', title: '得分', editType: 'number' },
        { key: 'singleSelIds', title: '无序单项选择题', editType: 'multiple' },
        { key: 'singleSelOpts', title: '有序单项选择题', editType: 'multiple' },
        { key: 'multiSelIds', title: '无序多项选择题', editType: 'multiple' },
        { key: 'multiSelOpts', title: '有序多项选择题', editType: 'multiple' },
        { key: 'judgementIds', title: '无序判断题', editType: 'multiple' },
        { key: 'judgementOpts', title: '有序判断题', editType: 'multiple' },
        { key: 'essayIds', title: '问答题', editType: 'multiple' },
        { key: 'programIds', title: '编程题', editType: 'multiple' },
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
      rest.getAll(`papers?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.papers.map(item => {
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
        rest.addOne('papers', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('papers', editing).then(res => {
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
