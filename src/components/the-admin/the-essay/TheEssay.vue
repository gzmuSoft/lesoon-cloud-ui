<template lang="pug">
  #lesson-essay
    Button(@click="handleAdd") 增加
    Table(:columns="columns", :data="tableData", ref="selection", @on-row-click="handleSelect")
      template(slot-scope="{ row, index }" slot="action")
        Button(type="primary", size="small", @click="handleInfo(row, index)") 详情
        Button(type="error", size="small", style="margin-left: 0.8rem", @click="handleDelete(row, index)") 删除
    Modal(v-model="visible", title="详情", @on-ok="handleOk", fullscreen)
      div(slot="footer")
        Button(v-if="!isEdit", type="success", @click="isEdit=!isEdit") 编辑
        Button(v-else, type="primary", @click="handleOk") 保存
      table-expand(:row="showData")
        Row.lesson-table-expand-row
          Col(span="12")
            span 题目名称：
            span(v-if="!isEdit") {{ showData.name }}
            Input(v-else, v-model="showData.name", placeholder="请输入题目名称", clearable, style="width: auto")
          Col(span="12")
            span 题目答案：
            span(v-if="!isEdit") {{ showData.answer }}
            Input(v-else, v-model="showData.answer", placeholder="请输入题目答案", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 答案解析：
            span(v-if="!isEdit") {{ showData.explanation }}
            Input(v-else, v-model="showData.explanation", placeholder="请输入答案解析", clearable, style="width: auto")
          Col(span="12")
            span 课程：
            span(v-if="!isEdit") {{ showData.courseId }}
            Input(v-else, v-model="showData.courseId", placeholder="请输入课程", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 章节：
            span(v-if="!isEdit") {{ showData.sectionId }}
            Input(v-else, v-model="showData.sectionId", placeholder="请输入章节", clearable, style="width: auto")
          Col(span="12")
            span 知识点：
            span(v-if="!isEdit") {{ showData.knowledgeId }}
            Input(v-else, v-model="showData.knowledgeId", placeholder="请输入知识点", clearable, style="width: auto")
          Col(span="12")
            span 难度系数：
            span(v-if="!isEdit") {{ showData.difficultRate }}
            Input(v-else, v-model="showData.difficultRate", placeholder="请输入难度系数", clearable, style="width: auto")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'

export default {
  name: 'TheEssay',
  components: {
    TableExpand
  },
  data () {
    return {
      // modal 是否显示
      visible: false,
      // 确定按钮的文字
      okText: '编辑',
      // 当前显示的数据
      showData: {},
      // 是否正在编辑
      isEdit: false,
      // 设置列头
      columns: [
        // 多选框
        { type: 'selection', width: 50, align: 'center' },
        { key: 'name', title: '名称' },
        { key: 'answer', title: '答案' },
        { key: 'explanation', title: '答案解析' },
        { key: 'courseId', title: '关联课程' },
        { key: 'sectionId', title: '关联章节' },
        { key: 'knowledgeId', title: '关联知识点' },
        { key: 'difficultRate', title: '难度系数' },
        {
          key: 'action',
          title: 'Action',
          width: 140,
          align: 'center',
          slot: 'action'
        }
      ],
      // 设置数据
      tableData: []
    }
  },
  mounted () {
    rest.getAll('essays').then(res => {
      this.tableData = res.data._embedded.essays.map(item => {
        item._checked = false
        return item
      })
    }).catch(error => {
      console.log(error)
      this.$Message.error('获取数据失败')
    })
  },
  methods: {
    // 行内编辑
    handleInfo (row, index) {
      this.showData = this.tableData[index]
      this.showData.index = index
      this.visible = true
    },
    // 添加数据
    handleAdd () {
      this.showData = {}
      this.visible = true
      this.isEdit = true
    },
    // 删除数据
    handleDelete (row) {
      rest.deleteByLink(row._links.self.href).then(res => {
        this.$Message.success('删除成功')
        this.tableData.splice(this.tableData.indexOf(row), 1)
      }).catch(error => {
        this.$Message.error('删除失败')
        console.log(error)
      })
    },
    // 查询数据
    handleSelect (row, index) {
      this.tableData[index]._checked = !this.tableData[index]._checked
    },
    // 保存按钮
    handleOk () {
      let _this = this
      console.log(_this.tableData[_this.showData.index])
      if ('_links' in _this.showData) {
        // 保存编辑操作
        rest.putOne('teachers', _this.showData).then(res => {
          _this.tableData[_this.showData.index] = _this.showData
          _this.$Message.success('修改成功')
          _this.visible = false
          _this.isEdit = false
        }).catch(error => {
          _this.$Message.success('修改失败')
          console.log(error)
        })
      } else {
        // 保存增加操作
        rest.addOne('teachers', _this.showData).then(res => {
          _this.$Message.success('增加成功')
          _this.tableData.push(res.date)
          _this.showData = {}
          _this.visible = false
          _this.isEdit = false
        }).catch(error => {
          _this.$Message.success('增加失败')
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .lesson-table-expand-row {
    .ivu-col {
      height: 32px;
    }
  }
</style>
