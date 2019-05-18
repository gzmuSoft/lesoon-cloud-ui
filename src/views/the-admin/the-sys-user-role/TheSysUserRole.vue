<template lang="pug">
  #lesson-user-role
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
  name: 'TheSysUserRole',
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
        { key: 'userId', title: '关联用户', editType: 'number' },
        { key: 'roleId', title: '关联角色', editType: 'number' },
        { key: 'sort', title: '排序', editType: 'number' },
        { key: 'isEnable', title: '是否可用', editType: 'string' },
        { key: 'remark', title: '备注', editType: 'textarea' },
        {
          title: '操作',
          key: 'handle',
          fixed: 'right',
          options: ['update', 'delete']
        }
      ]
    }
  },
  methods: {
    initData (page) {
      let _this = this
      _this.loadingFlag = true
      rest.getAll(`sysUserRoles?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysUserRoles.map(item => {
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
        rest.addOne('sysUserRoles', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('sysUserRoles', editing).then(res => {
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
