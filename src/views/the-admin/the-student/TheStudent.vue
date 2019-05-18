<template lang="pug">
  #lesson-student
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
  name: 'TheStudent',
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
        { key: 'user_id', title: '用户编号', editType: 'number' },
        { key: 'school_id', title: '学校编号', editType: 'number' },
        { key: 'college_id', title: '学院编号', editType: 'number' },
        { key: 'dep_id', title: '系部编号', editType: 'number' },
        { key: 'specialty_id', title: '专业编号', editType: 'number' },
        { key: 'class_id', title: '班级编号', editType: 'number' },
        { key: 'gender', title: '性别', editType: 'string' },
        { key: 'birthday', title: '出生日期', editType: 'date' },
        { key: 'enter_date', title: '入校时间', editType: 'date' },
        { key: 'academic', title: '最后学历', editType: 'string' },
        { key: 'graduation_date', title: '最后学历毕业时间', editType: 'date' },
        { key: 'graduate_institution', title: '最后学历毕业院校', editType: 'string' },
        { key: 'original_major', title: '最后学历所学专业（若最后学历是高中，则不需要填写\r\n若最后学历是大专，则需要填写）', editType: 'string' },
        { key: 'resume', title: '个人简历', editType: 'textarea' },
        { key: 'create_user', title: '创建用户名称', editType: 'string' },
        { key: 'create_time', title: '创建日期', editType: 'date' },
        { key: 'remark', title: '备注', editType: 'textarea' },
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
      rest.getAll(`students?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.students.map(item => {
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
        rest.addOne('students', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('students', editing).then(res => {
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
