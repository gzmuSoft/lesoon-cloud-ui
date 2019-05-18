<template lang="pug">
  #lesson-sysRes
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
  name: 'TheSysRes',
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
        { key: 'parentId', title: '父编号', editType: 'number' },
        { key: 'des', title: '描述', editType: 'textarea' },
        { key: 'matchUrl', title: 'url匹配', editType: 'string' },
        { key: 'router', title: '路由路径', editType: 'string' },
        { key: 'component', title: '组件名称', editType: 'string' },
        { key: 'iconCls', title: '图标', editType: '' },
        { key: 'level', title: '层级', editType: 'number' },
        { key: 'method', title: '使用方法', editType: 'string' },
        { key: 'type', title: '类型', editType: 'string' },
        { key: 'sort', title: '排序', editType: 'number' },
        { key: 'remark', title: '备注', editType: 'textarea' },
        {
          title: '操作',
          key: 'handle',
          fixed: 'right',
          width: 140,
          options: ['update', 'delete']
        }
      ]
    }
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`sysReses?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysReses.map(item => {
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
        rest.addOne('sysReses', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('sysReses', editing).then(res => {
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
