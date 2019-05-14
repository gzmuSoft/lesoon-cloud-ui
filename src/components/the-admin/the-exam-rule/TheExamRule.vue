<template lang="pug">
  #lesson-examRule
    Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
    Table(:columns="columns", :data="tableData", ref="selection")
      template(slot-scope="{ row, index }" slot="name")
        span(v-if="editIndex!==index") {{row.name}}
        input(v-else, v-model="editData.name", placeholder="姓名", clearable)
      template(slot-scope="{ row, index }" slot="examId")
        span(v-if="editIndex!==index") {{row.examId}}
        inputNumber(v-else, v-model="editData.examId", placeholder="考试编号", clearable)
      template(slot-scope="{ row, index }" slot="questionType")
        span(v-if="editIndex!==index") {{row.questionType}}
        select(v-else, v-model="editData.questionType")
          option(v-for="(item, index) in types") {{item.value}}
      template(slot-scope="{ row, index }" slot="questionCount")
        span(v-if="editIndex!==index") {{row.questionCount}}
        inputNumber(v-else, v-model="editData.questionCount", placeholder="题量", clearable)
      template(slot-scope="{ row, index }" slot="startDifficultRate")
        span(v-if="editIndex!==index") {{row.startDifficultRate}}
        input(v-else, v-model="editData.startDifficultRate", placeholder="起始难度系数", clearable)
      template(slot-scope="{ row, index }" slot="endDifficultRate")
        span(v-if="editIndex!==index") {{row.endDifficultRate}}
        input(v-else, v-model="editData.endDifficultRate", placeholder="终止难度系数", clearable)
      template(slot-scope="{ row, index }" slot="eachValue")
        span(v-if="editIndex!==index") {{row.eachValue}}
        inputNumber(v-else, v-model="editData.eachValue", placeholder="每题分值", clearable)
      template(slot-scope="{ row, index }" slot="isEnable")
        span(v-if="editIndex!==index") {{row.isEnable}}
        select(v-else, v-model="editData.isEnable")
          option(v-for="(item, index) in isEnables") {{item.value}}
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
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'

export default {
  name: 'the-exam-rule',
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
      types: [
        { key: 0, value: '单项选择题' },
        { key: 1, value: '多项选择题' },
        { key: 2, value: '判断题' },
        { key: 3, value: '填空题' },
        { key: 4, value: '编程题' }
      ],
      isEnables: [
        { key: 0, value: '否' },
        { key: 1, value: '是' }
      ],
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
        { key: 'name', title: '名称', slot: 'name' },
        { key: 'examId', title: '考试编号', slot: 'examId' },
        { key: 'questionType', title: '题型', slot: 'questionType' },
        { key: 'questionCount', title: '题量', slot: 'questionCount' },
        { key: 'startDifficultRate', title: '起始难度系数', slot: 'startDifficultRate' },
        { key: 'endDifficultRate', title: '终止难度系数', slot: 'endDifficultRate' },
        { key: 'eachValue', title: '每题分值', slot: 'eachValue' },
        { key: 'isEnable', title: '是否可用', slot: 'isEnable' },
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
    handleEdit (row, index) {
      this.editIndex = index
      this.editData = { ...row }
      this.edit = true
    },
    handleSave (row, index) {
      let _this = this
      let now = _this.tableData[index]
      if (_this.edit) {
        rest.putOne('examRules', _this.editData).then(res => {
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
        rest.addOne('examRules', _this.tableData[0]).then(res => {
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
    rest.getAll('examRules').then(res => {
      this.tableData = res.data._embedded.examRules.map(item => {
        item._checked = false
        return item
      })
    }).catch(error => {
      console.log(error)
      this.$Message.error('获取数据失败')
    })
  }
}
</script>

<style lang="less" scoped>

</style>
