<template lang="pug">
  #lesson-teacher
    Button(@click="handleAdd") 增加
    Table(:columns="columns", :data="tableData", ref="selection", @on-row-click="handleSelect")
      template(slot-scope="{ row, index }" slot="gender")
        Tag(:color="row.gender === '男'? 'blue' : 'magenta'") {{ row.gender }}
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
            span 教师名称：
            span(v-if="!isEdit") {{ showData.name }}
            Input(v-else, v-model="showData.name", placeholder="请输入教师名称", clearable, style="width: auto")
          Col(span="12")
            span 管理账户：
            span(v-if="!isEdit") {{ showData.userId }}
            Input(v-else, v-model="showData.userId", placeholder="请输入管理账户", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 学校：
            span(v-if="!isEdit") {{ showData.schoolId }}
            Input(v-else, v-model="showData.schoolId", placeholder="请输入学校", clearable, style="width: auto")
          Col(span="12")
            span 学院：
            span(v-if="!isEdit") {{ showData.collegeId }}
            Input(v-else, v-model="showData.collegeId", placeholder="请输入学院", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 系部：
            span(v-if="!isEdit") {{ showData.depId }}
            Input(v-else, v-model="showData.depId", placeholder="请输入系部", clearable, style="width: auto")
          Col(span="12")
            span 性别：
            span(v-if="!isEdit") {{ showData.gender }}
            RadioGroup(v-else, v-model="showData.gender")
              Radio(label="男", value="男") 男
              Radio(label="女", value="女") 女
        Row.lesson-table-expand-row
          Col(span="12")
            span 生日：
            span(v-if="!isEdit") {{ showData.birthday }}
            DatePicker(v-else, type="date", v-model="showData.birthday", placeholder="请输入生日", style="width: auto",
              format="yyyy-MM-dd", @on-change="handleDate")
          Col(span="12")
            span 民族：
            span(v-if="!isEdit") {{ showData.nation }}
            Input(v-else, v-model="showData.nation", placeholder="请输入民族", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 身份证号码：
            span(v-if="!isEdit") {{ showData.idNumber }}
            Input(v-else, v-model="showData.idNumber", placeholder="请输入身份证号码", clearable, style="width: auto")
          Col(span="12")
            span 联系电话：
            span(v-if="!isEdit") {{ showData.phone }}
            Input(v-else, v-model="showData.phone", placeholder="请输入联系电话", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="24")
            span 邮箱：
            span(v-if="!isEdit") {{ showData.email }}
            Input(v-else, v-model="showData.email", placeholder="请输入邮箱", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 学位：
            span(v-if="!isEdit") {{ showData.degree }}
            Input(v-else, v-model="showData.degree", placeholder="请输入学位", clearable, style="width: auto")
          Col(span="12")
            span 最后学历：
            span(v-if="!isEdit") {{ showData.academic }}
            Input(v-else, v-model="showData.academic", placeholder="请输入最后学历", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 最后学历毕业时间：
            span(v-if="!isEdit") {{ showData.graduationDate }}
            Input(v-else, v-model="showData.graduationDate", placeholder="请输入最后学历毕业时间", clearable, style="width: auto")
          Col(span="12")
            span 最后学历所学专业：
            span(v-if="!isEdit") {{ showData.major }}
            Input(v-else, v-model="showData.major", placeholder="请输入最后学历所学专业", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 最后学历毕业院校：
            span(v-if="!isEdit") {{ showData.graduateInstitution }}
            Input(v-else, v-model="showData.graduateInstitution", placeholder="请输入最后学历毕业院校", clearable, style="width: auto")
          Col(span="12")
            span 主要研究方向：
            span(v-if="!isEdit") {{ showData.majorResearch }}
            Input(v-else, v-model="showData.majorResearch", placeholder="请输入主要研究方向", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 最后学历毕业时间：
            span(v-if="!isEdit") {{ showData.resume }}
            Input(v-else, v-model="showData.resume", placeholder="请输入最后学历毕业时间", clearable, style="width: auto")
          Col(span="12")
            span 参加工作时间：
            span(v-if="!isEdit") {{ showData.workDate }}
            Input(v-else, v-model="showData.workDate", placeholder="请输入参加工作时间", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 职称：
            span(v-if="!isEdit") {{ showData.profTitle }}
            Input(v-else, v-model="showData.profTitle", placeholder="请输入职称", clearable, style="width: auto")
          Col(span="12")
            span 职称评定时间：
            span(v-if="!isEdit") {{ showData.profTitleAssDate }}
            Input(v-else, v-model="showData.profTitleAssDate", placeholder="请输入职称评定时间", clearable, style="width: auto")
        Row.lesson-table-expand-row
          Col(span="12")
            span 是否学术学科带头人：
            span(v-if="!isEdit") {{ showData.isAcademicLeader }}
            Input(v-else, v-model="showData.isAcademicLeader", placeholder="请输入是否学术学科带头人", clearable, style="width: auto")
          Col(span="12")
            span 所属学科门类：
            span(v-if="!isEdit") {{ showData.subjectCategory }}
            Input(v-else, v-model="showData.subjectCategory", placeholder="请输入所属学科门类", clearable, style="width: auto")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/teble-expand'

export default {
  name: 'the-teacher',
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
        { key: 'userId', title: '关联用户' },
        { key: 'schoolId', title: '学校' },
        { key: 'collegeId', title: '学院' },
        { key: 'depId', title: '系部' },
        { key: 'gender', title: '性别', slot: 'gender' },
        { key: 'birthday', title: '生日' },
        { key: 'nation', title: '民族' },
        { key: 'degree', title: '学位' },
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
    rest.getAll('teachers').then(res => {
      this.tableData = res.data._embedded.teachers.map(item => {
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
        // 增加操作
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
