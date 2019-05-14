<template lang="pug">
#lesson-paper
  Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
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
          span 试卷名称：
          span(v-if="!isEdit") {{ showData.name }}
          Input(v-else, v-model="showData.name", placeholder="请输入试卷名称", clearable, style="width: auto")
        Col(span="12")
          span 试卷编号：
          span(v-if="!isEdit") {{ showData.examId }}
          Input(v-else, v-model="showData.examId", placeholder="请输入试卷编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 学生姓名：
          span(v-if="!isEdit") {{ showData.studentId }}
          Input(v-else, v-model="showData.studentId", placeholder="请输入学生姓名", clearable, style="width: auto")
        Col(span="12")
          span 考试成绩：
          span(v-if="!isEdit") {{ showData.score }}
          Input(v-else, v-model="showData.score", placeholder="请输入学生姓名", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 考试开始时间：
          span(v-if="!isEdit") {{ showData.startTime }}
          Input(v-else, v-model="showData.startTime", placeholder="请输入考试开始时间", clearable, style="width: auto")
        Col(span="12")
          span 考试开始时间：
          span(v-if="!isEdit") {{ showData.submitTime }}
          Input(v-else, v-model="showData.submitTime", placeholder="请输入考试结束时间", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 单项选择题id列表：
          span(v-if="!isEdit") {{ showData.singleSelIds }}
          Input(v-else, v-model="showData.singleSelIds", placeholder="请选择单项选择题编号", clearable, style="width: auto")
        Col(span="12")
          span 单项选择题排序id列表：
          span(v-if="!isEdit") {{ showData.submitTime }}
          Input(v-else, v-model="showData.submitTime", placeholder="请选择单项选择题编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 多项选择题id列表：
          span(v-if="!isEdit") {{ showData.multiSelIds }}
          Input(v-else, v-model="showData.multiSelIds", placeholder="请选择多项选择题编号", clearable, style="width: auto")
        Col(span="12")
          span 多项选择题排序id列表：
          span(v-if="!isEdit") {{ showData.multiSelOpts }}
          Input(v-else, v-model="showData.multiSelOpts", placeholder="请选择多项选择题编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 判断题id列表：
          span(v-if="!isEdit") {{ showData.judgementIds }}
          Input(v-else, v-model="showData.judgementIds", placeholder="请选择判断题编号", clearable, style="width: auto")
        Col(span="12")
          span 判断题排序id列表：
          span(v-if="!isEdit") {{ showData.judgementOpts }}
          Input(v-else, v-model="showData.judgementOpts", placeholder="请选择判断题编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 问答题id列表：
          span(v-if="!isEdit") {{ showData.essayIds }}
          Input(v-else, v-model="showData.essayIds", placeholder="请选择问答题编号", clearable, style="width: auto")
        Col(span="12")
          span 编程题id列表：
          span(v-if="!isEdit") {{ showData.programIds }}
          Input(v-else, v-model="showData.programIds", placeholder="请选择编程题编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 是否可用：
          span(v-if="!isEdit") {{ showData.isEnable }}
          Input(v-else, v-model="showData.isEnable", placeholder="填写是否可用（0：不可用/1：可用）", clearable, style="width: auto")
        Col(span="12")
          span 排序：
          span(v-if="!isEdit") {{ showData.sort }}
          Input(v-else, v-model="showData.sort", placeholder="请输入排序编号", clearable, style="width: auto")
      Row.lesson-table-expand-row
        Col(span="12")
          span 备注：
          span(v-if="!isEdit") {{ showData.remark }}
          Input(v-else, v-model="showData.remark", placeholder="请输入备注", clearable, style="width: auto")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'
export default {
  name: 'ThePaper',
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
      // 分页
      page: {},
      // 设置列头
      columns: [
        // 多选框
        { type: 'selection', width: 50, align: 'center' },
        { key: 'name', title: '名称' },
        { key: 'examId', title: '考试编号' },
        { key: 'studentId', title: '学生编号' },
        { key: 'startTime', title: '开始时间' },
        { key: 'submitTime', title: '结束时间' },
        { key: 'score', title: '考试得分' },
        { key: 'isEnable', title: '是否可用' },
        { key: 'sort', title: '排序' },
        { key: 'remark', title: '备注' },
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
    rest.getAll('papers').then(res => {
      this.tableData = res.data._embedded.papers.map(item => {
        item._checked = false
        return item
      })
    }).catch(error => {
      console.log(error)
      this.$Message.error('获取数据失败')
    })
  },
  methods: {
    handleInfo (row, index) {
      // 数据复制
      this.showData = this.tableData[index]
      this.showData.index = index
      // 显示对话框
      this.visible = true
    },
    handleAdd () {
      this.showData = {}
      this.visible = true
      this.isEdit = true
    },
    handleDelete (row) {
      rest.deleteByLink(row._links.self.href).then(res => {
        this.$Message.success('删除成功')
        // 表格中的数据一并删除
        this.tableData.splice(this.tableData.indexOf(row), 1)
      }).catch(error => {
        this.$Message.error('删除失败')
        console.log(error)
      })
    },
    handleSelect (row, index) {
      this.tableData[index]._checked = !this.tableData[index]._checked
    },
    handleDate (date) {
      this.showData.birthday = date
    },
    handleOk () {
      let _this = this
      console.log(_this.tableData[_this.showData.index])
      if ('_links' in _this.showData) {
        // 编辑操作
        rest.putOne('papers', _this.showData).then(res => {
          _this.tableData[_this.showData.index] = _this.showData
          _this.$Message.success('修改成功')
          _this.visible = false
          _this.isEdit = false
        }).catch(error => {
          _this.$Message.success('修改失败')
          console.log(error)
        })
      } else {
        // 增加操作
        rest.addOne('papers', _this.showData).then(res => {
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
