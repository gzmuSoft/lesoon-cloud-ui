<template lang="pug">
  #lesson-exam
    Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
    Table(:columns="columns", :data="tableData", ref="selection", @on-row-click="handleSelect")
      template(slot-scope="{ row, index }" slot="action")
        Button(type="primary", size="small", @click="handleInfo(row, index)") 详情
        Poptip.lesson-text-left(confirm, title="你确定删除这条数据吗？", @on-ok="handleDelete(row, index)",
          ok-text="确定", placement="left-start")
          Button(type="error", size="small", v-if='editIndex !== index',
            style="margin-left: 0.8rem") 删除
    Page.lesson-text-center.lesson-margin-top(:total="page.totalElements", @on-change="handleChange")
    Modal(v-model="visible", title="修改考试信息", @on-ok="handleOk", fullscreen)
      div(slot="footer")
        Button(v-if="!isEdit", type="success", @click="isEdit=!isEdit") 编辑
        Button(v-else, type="primary", @click="handleOk") 保存
      table-expand(:row="showData")
        Row.lesson-table-expand-row
          Col(span="12")
            span 考试名称：
            span(v-if="!isEdit") {{ showData.name }}
            Input(v-else, v-model="showData.name", placeholder="请输入考试名称", clearable, style="width: auto")
          Col(span="12")
            span 考试开始时间：
            span(v-if="!isEdit") {{ showData.startTime }}
            DatePicker(v-else, type="date", v-model="showData.startTime", placeholder="请输入考试开始时间", style="width: auto",
              format="yyyy-MM-dd", @on-change="handleDate")
        Row.lesson-table-expand-row
          Col(span="12")
            span 考试结束时间：
            span(v-if="!isEdit") {{ showData.endTime }}
            DatePicker(v-else, type="date", v-model="showData.endTime", placeholder="请输入考试结束时间", style="width: auto",
              format="yyyy-MM-dd", @on-change="handleDate")
          Col(span="12")
            span 考试总用时限制（正数，如：60分钟）：
            span(v-if="!isEdit") {{ showData.totalUseTime }}
            Input(v-else, type="number" v-model="showData.totalUseTime", placeholder="请输入考试时间(分钟)", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 满分分值：
            span(v-if="!isEdit") {{ showData.totalScore }}
            Input(v-else, type="number" v-model="showData.totalScore", placeholder="请输入考试总分分值", clearable, style="width: auto")
          Col(span="12")
            span 课程编号：
            span(v-if="!isEdit") {{ showData.courseId }}
            Select(v-else, v-model="showData.courseId" style="width: auto")
              Option(v-for="option in courseOptions" :key="option.value" v-bind:value="option.value") {{ option.text }}
        Row.lesson-table-expand-row
          Col(span="12")
            span 班级编号：
              span(v-if="!isEdit") {{ showData.classIds }}
              Select(v-else, v-model="showData.classIds" style="width: auto")
                Option(v-for="option in classOptions" :key="option.value" v-bind:value="option.value") {{ option.text }}
          Col(span="12")
            span 考试的次数限制（正数，0代表可以无限次考试）：
            span(v-if="!isEdit") {{ showData.allowTimes }}
            Input(v-else, type="number" v-model="showData.allowTimes", placeholder="请输入考试的次数限制", clearable, style="width: auto")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'

export default {
  name: 'the-exam',
  components: {
    TableExpand
  },
  data () {
    return {
      // 预留给课程编号的选项
      courseOptions: [
        { text: 'web技术实战', value: '1' },
        { text: 'C语言程序设计', value: '2' },
        { text: 'JAVAEE开发与核心', value: '3' }
      ],
      // 预留给班级编号的选项
      classOptions: [
        { text: '2016级软件工程1班', value: '1' },
        { text: '2016级软件工程2班', value: '2' },
        { text: '2016级软件工程3班', value: '3' },
        { text: '2016级软件工程4班', value: '4' }
      ],
      // modal 是否显示
      visible: false,
      // 确定按钮的文字
      okText: '编辑',
      // 当前显示的数据
      showData: {},
      page: {},
      editIndex: -1,
      // 是否正在编辑
      isEdit: false,
      // 设置列头
      columns: [
        // 多选框
        { type: 'selection', width: 50, align: 'center' },
        { key: 'name', title: '考试名称' },
        { key: 'startTime', title: '考试开始时间' },
        { key: 'endTime', title: '考试结束时间' },
        { key: 'totalUseTime', title: '考试总用时限制（正数，如：60分钟）' },
        { key: 'totalScore', title: '满分分值' },
        { key: 'courseId', title: '课程编号' },
        { key: 'classIds', title: '参与班级id' },
        { key: 'allowTimes', title: '考试的次数限制（正数，0代表可以无限次考试）' },
        { key: 'createTime', title: '创建日期' },
        { key: 'createUser', title: '创建用户' },
        { key: 'modifyTime', title: '末次更新时间' },
        { key: 'modifyUser', title: '末次更新用户' },
        { key: 'remark', title: '备注' },
        { key: 'isEnable', title: '是否启用' },
        {
          key: 'action',
          title: '操作',
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
    this.initData(0)
  },
  methods: {
    initData (page) {
      let _this = this
      rest.getAll(`exams?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.exams.map(item => {
          item._checked = false
          return item
        })
        _this.page = res.data.page
      }).catch(error => {
        console.log(error)
        _this.$Message.error('获取数据失败')
      })
    },
    handleInfo (row, index) {
      // 数据复制
      this.showData = this.tableData[index]
      this.showData.index = index
      // 显示对话框
      this.visible = true
    },
    /**
     * 分页,选择不同页面
     * @param page
     */
    handleChange (page) {
      this.initData(page - 1)
    },
    handleAdd () {
      this.showData = {}
      this.visible = true
      this.isEdit = true
    },
    handleDelete (row, index) {
      rest.deleteByLink(row._links.self.href).then(res => {
        this.$Message.success('删除成功')
        // 表格中的数据一并删除
        this.tableData.splice(index, 1)
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
        rest.putOne('exams', _this.showData).then(res => {
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
        rest.addOne('exams', _this.showData).then(res => {
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
