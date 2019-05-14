<template lang="pug">
  #lesson-essay
    Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")

    Table(:columns="columns", :data="tableData", ref="selection")
      template(slot-scope="{ row, index }", slot="name")
        span(v-if="editIndex!==index") {{row.name}}
        Input(v-else, v-model="editData.name", placeholder="题目名称", clearable)
      template(slot-scope="{ row, index }", slot="answer")
        span(v-if='editIndex!==index') {{row.answer}}
        Input(v-else, v-model="editData.answer", placeholder="题目答案", clearable)
      template(slot-scope="{ row, index }", slot="explanation")
        span(v-if='editIndex!==index') {{row.explanation}}
        Input(v-else, v-model="editData.explanation", placeholder="答案解析", clearable)
      template(slot-scope="{ row, index }", slot="courseId")
        span(v-if='editIndex!==index') {{row.courseId}}
        Input(v-else, v-model="editData.courseId", placeholder="课程", clearable)
      template(slot-scope="{ row, index }", slot="sectionId")
        span(v-if='editIndex!==index') {{row.sectionId}}
        Input(v-else, v-model="editData.sectionId", placeholder="章节", clearable)
      template(slot-scope="{ row, index }", slot="knowledgeId")
        span(v-if='editIndex!==index') {{row.knowledgeId}}
        Input(v-else, v-model="editData.knowledgeId", placeholder="知识点", clearable)
      template(slot-scope="{ row, index }", slot="difficultRate")
        span(v-if='editIndex!==index') {{row.difficultRate}}
        Input(v-else, v-model="editData.difficultRate", placeholder="难度系数", clearable)
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
import TableExpand from '_components/common/table-expand'

export default {
  name: 'TheEssay',
  components: {
    TableExpand
  },
  /**
     * 数据定义
     * @returns {{editData: {}, edit: boolean, editIndex: number, columns: *[], tableData: Array, page: {}}}
     */
  data () {
    return {
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
        { key: 'answer', title: '答案', slot: 'answer' },
        { key: 'explanation', title: '答案解析', slot: 'explanation' },
        { key: 'courseId', title: '关联课程', slot: 'courseId' },
        { key: 'sectionId', title: '关联章节', slot: 'sectionId' },
        { key: 'knowledgeId', title: '关联知识点', slot: 'knowledgeId' },
        { key: 'difficultRate', title: '难度系数', slot: 'difficultRate' },
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
  /**
     * 构造函数
     */
  mounted () {
    this.initData(0)
  },
  methods: {
    /**
       * 获取数据
       * @param page
       */
    initData (page) {
      let _this = this
      rest.getAll(`essays?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.essays.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).catch(error => {
        console.log(error)
        _this.$Message.error('获取数据失败')
      })
    },
    /**
       * 分页,选择不同页面
       * @param page
       */
    handleChange (page) {
      this.initData(page - 1)
    },
    /**
       * 弹出添加行
       */
    handleAdd () {
      this.tableData.unshift({})
      this.editData = {}
      this.editIndex = 0
    },
    /**
       * 删除
       * @param row
       */
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
    /**
       * 变为编辑行
       * @param row
       * @param index
       */
    handleEdit (row, index) {
      this.editIndex = index
      this.editData = { ...row }
      this.edit = true
      console.log(this.editIndex)
    },
    /**
       * 保存
       * @param row
       * @param index
       */
    handleSave (row, index) {
      let _this = this
      let now = _this.tableData[index]
      if (_this.edit) {
        // 更新保存
        rest.putOne('essays', _this.editData).then(res => {
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
        // 添加保存
        rest.addOne('essays', _this.tableData[0]).then(res => {
          _this.tableData[0]._links = res.data._links
          _this.editIndex = -1
          this.$Message.success('添加成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('添加失败')
        })
      }
    },
    /**
       * 取消
       * @param row
       * @param index
       */
    handleCancel (row, index) {
      this.editIndex = -1
      if (!this.edit) {
        this.tableData.splice(this.tableData.indexOf(row), 1)
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
