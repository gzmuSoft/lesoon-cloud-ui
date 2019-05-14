<template lang="pug">
#lesson-judgement
  Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
  Table(:columns="columns", :data="tableData", ref="selection")
    template(slot-scope="{ row, index }", slot="name")
      span(v-if="editIndex!==index") {{row.name}}
      Input(v-else, v-model="editData.name", placeholder="题目", clearable)
    template(slot-scope="{ row, index }", slot="difficultRate")
      span(v-if='editIndex!==index') {{row.difficultRate}}
      InputNumber(v-else, v-model="editData.difficultRate", placeholder="难度系数", clearable)
    template(slot-scope="{ row, index }", slot="answer")
      span(v-if='editIndex!==index') {{row.answer}}
      InputNumber(v-else, v-model="editData.answer", placeholder="参考答案", clearable)
    template(slot-scope="{ row, index }", slot="explanation")
      span(v-if='editIndex!==index') {{row.explanation}}
      InputNumber(v-else, v-model="editData.explanation", placeholder="答案解析", clearable)
    template(slot-scope="{ row, index }", slot="courseId")
      span(v-if='editIndex!==index') {{row.courseId}}
      InputNumber(v-else, v-model="editData.courseId", placeholder="课程编号", clearable)
    template(slot-scope="{ row, index }", slot="sectionId")
      span(v-if='editIndex!==index') {{row.sectionId}}
      InputNumber(v-else, v-model="editData.sectionId", placeholder="章节编号", clearable)
    template(slot-scope="{ row, index }", slot="knowledgeId")
      span(v-if='editIndex!==index') {{row.knowledgeId}}
      InputNumber(v-else, v-model="editData.knowledgeId", placeholder="知识点编号", clearable)
    template(slot-scope="{ row, index }", slot="remark")
      span(v-if='editIndex!==index') {{row.remark}}
      Input(v-else, v-model="editData.remark",
        type="textarea", :autosize="true",
        placeholder="备注", clearable)
    template(slot-scope="{ row, index }", slot="sort")
      span(v-if='editIndex!==index') {{row.sort}}
      InputNumber(v-else, v-model="editData.sort", placeholder="排序", clearable)
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
import TableExpand from '_components/common/table-expand'

export default {
  name: 'the-judgement',
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
        { key: 'difficultRate', title: '难度系数', slot: 'difficultRate' },
        { key: 'answer', title: '参考答案', slot: 'answer' },
        { key: 'explanation', title: '答案解析', slot: 'explanation' },
        { key: 'courseId', title: '课程编号', slot: 'courseId' },
        { key: 'sectionId', title: '章节编号', slot: 'sectionId' },
        { key: 'knowledgeId', title: '知识点编号', slot: 'knowledgeId' },
        { key: 'remark', title: '备注', slot: 'remark' },
        { key: 'sort', title: '排序', slot: 'sort' },
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
      rest.getAll(`judgements?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.judgements.map(item => {
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
        rest.putOne('judgements', _this.editData).then(res => {
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
        rest.addOne('judgements', _this.tableData[0]).then(res => {
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

<style  lang="less"  scoped>

</style>
