<template lang="pug">
  #lesson-sysRole
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
  name: 'TheSysRole',
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
        { key: 'spell', title: '全拼', editType: 'string' },
        { key: 'sort', title: '排序', editType: 'number' },
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
      rest.getAll(`sysRoles?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysRoles.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).finally(() => {
        _this.loadingFlag = false
      }).catch(error => {
        console.log(error)
        _this.$Message.error('获取数据失败')
      })
    },
    handleChange (page) {
      this.initData(page - 1)
    },
    handleSave (params) {
      let _this = this
      let editing = params['value']
      let index = params['index']
      let add = editing['add']
      console.log(params)
      let now = _this.tableData[index]
      if (add) {
        // 删除 editing的add标志
        delete editing['add']
        rest.addOne('sysRoles', editing).then(res => {
          _this.initData(0)
          this.$Message.success('添加成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('添加失败')
        })
      } else {
        rest.putOne('sysRoles', editing).then(res => {
          for (const name in editing) {
            now[name] = editing[name]
          }
          this.$Message.success('更新成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('更新失败')
        })
      }
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
  },
  mounted () {
    this.initData(0)
  }
}
</script>

<style lang="less" scoped>
</style>
