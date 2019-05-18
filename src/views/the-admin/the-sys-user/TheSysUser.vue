<template lang="pug">
  #lesson-sysUser
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
  name: 'TheSysUser',
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
        { key: 'entityId', title: '用户主体编号', editType: 'number' },
        { key: 'entityType',
          title: '用户主体类型',
          editType: 'multiple',
          options: [{ label: '系统管理员', value: '0' },
            { label: '教务管理员', value: '1' },
            { label: '课程管理员', value: '2' },
            { label: '教师', value: '3' },
            { label: '学生', value: '4' }] },
        { key: 'pwd', title: '密码', editType: 'string' },
        { key: 'status',
          title: '账号状态',
          editType: 'multiple',
          options: [{ label: '正常', value: '1' },
            { label: '锁定一小时', value: '2' },
            { label: '禁用', value: '3' }] },
        { key: 'icon', title: '图标', editType: 'string' },
        { key: 'email', title: '电子邮箱', editType: 'string' },
        { key: 'phone', title: '联系电话', editType: 'string' },
        {
          key: 'onlineStatus',
          title: '在线状态',
          editType: 'select',
          options: [{ label: '在线', value: '1' },
            { label: '离线', value: '0' }] },
        { key: 'sort', title: '排序', editType: 'number' },
        { key: 'isEnable',
          title: '是否可用',
          editType: 'select',
          options: [{ label: '可用', value: 'true' },
            { label: '不可用', value: 'false' }] },
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
      rest.getAll(`sysUsers?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysUsers.map(item => {
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
        rest.addOne('sysUsers', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('sysUsers', editing).then(res => {
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
