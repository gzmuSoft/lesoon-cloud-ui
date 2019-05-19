<template lang="pug">
  #lesson-single-sel
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
  name: 'TheSingle-sel',
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
        { key: 'name', title: '题目', editType: 'string' },
        { key: 'spell', title: '题目全拼', editType: 'String' },
        { key: 'difficult_rate', title: '难度系数', editType: 'number' },
        { key: 'answer', title: '参考答案', editType: 'number' },
        { key: 'explanation', title: '答案解析', editType: 'String' },
        { key: 'course_id', title: '课程编号', editType: 'number' },
        { key: 'section_id', title: '章节编号', editType: 'number' },
        { key: 'knowledge_id', title: '知识点编号', editType: 'number' },
        { key: 'sort', title: '排序', editType: 'number' },
        { key: 'create_user', title: '创建用户名称', editType: 'String' },
        { key: 'create_time', title: '创建时间', editType: 'date' },
        { key: 'modify_user', title: '末次更新用户', editType: 'String' },
        { key: 'modify_time', title: '末次更新时间', editType: 'date' },
        { key: 'remark', title: '备注', editType: 'String' },
        { key: 'is_enable', title: '是否可用', editType: 'number' },
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
      rest.getAll(`singleSels?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.singleSels.map(item => {
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
        rest.addOne('singleSels', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('singleSels', editing).then(res => {
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
