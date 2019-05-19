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
  name: 'TheTeacher',
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
        { key: 'schoolId', title: '学校编号', editType: 'number' },
        { key: 'collegeId', title: '学院编号', editType: 'number' },
        { key: 'depId', title: '系部', editType: 'number' },
        { key: 'gender', title: '性别', editType: 'number' },
        { key: 'birthday', title: '生日', editType: 'date' },
        { key: 'nation',
          title: '民族',
          editType: 'select',
          options: [
            { label: '男', value: '男' },
            { label: '女', value: '女' }
          ]
        },
        { key: 'degree',
          title: '学位',
          editType: 'select',
          options: [
            { label: '苗族', value: '苗族' },
            { label: '汉族', value: '汉族' }
          ]
        },
        { key: 'academic', title: '最后学历', editType: 'string' },
        { key: 'graduationDate', title: '最后学历毕业时间', editType: 'date' },
        { key: 'major', title: '最后学历所学专业', editType: 'string' },
        { key: 'graduateInstitution', title: '最后学历毕业院校', editType: 'string' },
        { key: 'majorResearch', title: '主要研究方向', editType: 'string' },
        { key: 'resume', title: '个人简历', editType: 'textarea' },
        { key: 'workDate', title: '参加工作时间', editType: 'date' },
        { key: 'profTitle', title: '职称', editType: 'string' },
        { key: 'profTitleAssDate', title: '职称评定时间', editType: 'date' },
        { key: 'isAcademicLeader',
          title: '是否学术学科带头人',
          editType: 'select',
          options: [
            { label: '是', value: 'true' },
            { label: '否', value: 'false' }
          ]
        },
        { key: 'subjectCategory', title: '所属学科门类', editType: 'string' },
        { key: 'idNumber', title: '身份证号码', editType: 'string' },
        { key: 'sort', title: '排序', editType: 'number' },
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
      rest.getAll(`teachers?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.teachers.map(item => {
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
        rest.addOne('teachers', editing).then(res => {
          _this.tableData.unshift(res.data)
          _this.tableData.pop()
        })
      } else {
        rest.putOne('teachers', editing).then(res => {
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
