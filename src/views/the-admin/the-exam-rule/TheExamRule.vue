<template lang="pug">
  #lesson-examRule
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
  name: 'the-exam-rule',
  components: {
    TableExpand,
    Tables
  },
  data () {
    return {
      // 是否正在编辑
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
        // 多选框
        { type: 'selection', width: 50, align: 'center' },
        { key: 'name', title: '名称', editType: 'string' },
        { key: 'examId', title: '考试编号', editType: 'number' },
        { key: 'questionType',
          title: '题型',
          editType: 'select',
          options: [
            { label: '单项选择题', value: '0' },
            { label: '多项选择题', value: '1' },
            { label: '判断题', value: '2' },
            { label: '填空题', value: '3' },
            { label: '编程题', value: '4' }
          ]
        },
        { key: 'questionCount', title: '题量', editType: 'number' },
        { key: 'startDifficultRate', title: '起始难度系数', editType: 'number' },
        { key: 'endDifficultRate', title: '终止难度系数', editType: 'number' },
        { key: 'eachValue', title: '每题分值', editType: 'number' },
        { key: 'isEnable',
          title: '是否可用',
          editType: 'select',
          options: [
            { label: '否', value: '0' },
            { label: '是', value: '1' }
          ]
        },
        {
          title: '操作',
          key: 'handle',
          fixed: 'right',
          width: 180,
          options: ['update', 'delete']
        }
      ]
    }
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`examRules?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.examRules.map(item => {
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
      console.log(row)
      let _this = this
      let add = editing['add']
      if (add) {
        // 删除 editing的add标志
        delete editing['add']
        rest.addOne('examRules', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('examRules', editing).then(res => {
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
    handleCancel (row, index) {
      // 取消编辑的函数
    },
    handleAdd () {
      // 增加按钮的函数
    },
    handleEdit (row, index) {
      // 开始编辑的函数
    }
  },
  mounted () {
    this.initData(0)
  }
}
</script>

<style lang="less" scoped>

</style>
