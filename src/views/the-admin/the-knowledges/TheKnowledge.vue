<template lang="pug">
  #lesson-essay
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
  name: 'TheKnowledge',
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
        { key: 'name', title: '知识点', editType: 'string' },
        { key: 'sort', title: '排序', editType: 'number' },
        { key: 'intro', title: '简介', editType: 'string' },
        { key: 'parentId', title: '父级编号', editType: 'string' },
        { key: 'courseId', title: '关联课程', editType: 'string' },
        { key: 'sectionId', title: '关联章节', editType: 'string' },
        { key: 'remark', title: '备注', editType: 'string' },
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
  mounted () {
    this.initData(0)
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`knowledges?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.knowledges.map(item => {
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
        rest.addOne('knowledges', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('knowledges', editing).then(res => {
          for (const name in editing) {
            row[name] = editing[name]
          }
        })
      }
    },
    handleDelete (params) {
      let _this = this
      rest.deleteByLink(params.row._links.self.href).then(res => {
        _this.tableData.splice(params.index, 1)
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

<style lang="less" scoped>
</style>
