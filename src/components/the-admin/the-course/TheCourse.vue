<template lang="pug">
  #lesson-course
    Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
    Table(:columns="columns", :data="tableData", ref="selection")
      template(slot-scope="{ row, index }", slot="name")
        span(v-if="editIndex!==index") {{row.name}}
        Input(v-else, v-model="editData.name", placeholder="姓名", clearable)
      template(slot-scope="{ row, index }", slot="period")
        span(v-if='editIndex!==index') {{row.period}}
        InputNumber(v-else, v-model="editData.period", placeholder="基础学时", clearable)
      template(slot-scope="{ row, index }", slot="credit")
        span(v-if='editIndex!==index') {{row.credit}}
        InputNumber(v-else, v-model="editData.credit", placeholder="基础学分", clearable)
      template(slot-scope="{ row, index }", slot="type")
        span(v-if='editIndex!==index') {{row.type}}
        Input(v-else, v-model="editData.type", placeholder="课程信息", clearable)
      template(slot-scope="{ row, index }", slot="remark")
        span(v-if='editIndex!==index') {{row.remark}}
        Input(v-else, v-model="editData.remark",
          type="textarea", :autosize="true",
          placeholder="备注", clearable)
      template(slot-scope="{ row, index }" slot="action")
        div(v-if='editIndex !== index')
          Button(type="primary", size="small", @click="handleEdit(row, index)") 编辑
          Poptip.lesson-text-left(confirm, title="你确定删除这条数据吗？", @on-ok="handleDelete(row)",
            ok-text="确定", placement="left-start")
            Button(type="error", size="small", v-if='editIndex !== index',
              style="margin-left: 0.8rem") 删除
        div(v-else)
          Button(type="success", size="small", @click="handleSave(row, index)") 保存
          Button(type="primary", size="small", @click="handleCancel(row, index)", style="margin-left: 0.8rem") 取消
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")

</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/teble-expand'

export default {
  name: 'TheCourse',
  components: {
    TableExpand
  },
  data () {
    return {
      // 是否正在编辑
      editIndex: -1,
      editData: {},
      edit: false,
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
        { key: 'name', title: '名称', slot: 'name' },
        { key: 'period', title: '基础学时', slot: 'period' },
        { key: 'credit', title: '基础学分', slot: 'credit' },
        { key: 'type', title: '课程信息', slot: 'type' },
        { key: 'remark', title: '备注', slot: 'remark' },
        {
          key: 'action',
          title: 'Action',
          width: 140,
          align: 'center',
          slot: 'action'
        }
      ]
    }
  },
  methods: {
    initData (page) {
      let _this = this
      rest.getAll(`courses?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.courses.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).catch(error => {
        console.log(error)
        _this.$Message.error('获取数据失败')
      })
    },
    handleChange (page) {
      this.initData(page - 1)
    },
    handleEdit (row, index) {
      this.editIndex = index
      this.editData = { ...row }
      this.edit = true
    },
    handleSave (row, index) {
      let _this = this
      let now = _this.tableData[index]
      if (_this.edit) {
        rest.putOne('courses', _this.editData).then(res => {
          for (const name in _this.editData) {
            now[name] = _this.editData[name]
          }
          _this.editIndex = -1
          this.$Message.success('更新成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('更新失败')
        })
      } else {
        rest.addOne('courses', _this.tableData[0]).then(res => {
          _this.tableData[0]._links = res.data._links
          _this.editIndex = -1
          this.$Message.success('添加成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('添加失败')
        })
      }
    },
    handleDelete (row) {
      let _this = this
      rest.deleteByLink(row._links.self.href).then(res => {
        _this.tableData.splice(_this.tableData.indexOf(row), 1)
        _this.$Message.success('删除成功')
      }).catch(error => {
        console.log(error)
        _this.$Message.error('删除失败')
      })
    },
    handleAdd () {
      this.tableData.unshift({})
      this.editIndex = 0
    },
    handleCancel (row, index) {
      this.editIndex = -1
      if (!this.edit) {
        this.tableData.splice(this.tableData.indexOf(row), 1)
      }
    }
  },
  mounted () {
    this.initData(0)
  }
}
</script>

<style lang="less" scoped>

</style>
