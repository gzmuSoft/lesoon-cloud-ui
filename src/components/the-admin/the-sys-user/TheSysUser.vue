<template lang="pug">
  #lesson-users
    Button.lesson-table-add(size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
    Table(:columns="columns", :data="tableData", ref="selection")
      template(slot-scope="{ row, index }", slot="name")
        span(v-if="editIndex!==index") {{row.name}}
        input(v-else, v-model="editData.name", placeholder="姓名", clearable)
      template(slot-scope="{ row, index }", slot="entityId")
        span(v-if="editIndex!==index") {{row.entityId}}
        inputNumber(v-else, v-model="editData.entityId", placeholder="用户主体编号", clearable)
      template(slot-scope="{ row, index }", slot="entityType")
        span(v-if="editIndex!==index") {{row.entityType}}
        select(v-else, v-model="editData.entityType")
          option(v-for="(item, index) in entityTypes") {{item.value}}
      template(slot-scope="{ row, index }", slot="pwd")
        span(v-if="editIndex!==index") {{row.pwd}}
        input(v-else, v-model="editData.pwd", placeholder="密码", clearable)
      template(slot-scope="{ row, index }", slot="status")
        span(v-if="editIndex!==index") {{row.status}}
        select(v-else, v-model="editData.status")
          option(v-for="(item, index) in statuses") {{item.value}}
      template(slot-scope="{ row, index }", slot="icon")
        span(v-if="editIndex!==index") {{row.icon}}
        input(v-else, v-model="editData.icon", placeholder="图标", clearable)
      template(slot-scope="{ row, index }", slot="email")
        span(v-if="editIndex!==index") {{row.email}}
        input(v-else, v-model="editData.email", placeholder="电子邮箱", clearable)
      template(slot-scope="{ row, index }", slot="phone")
        span(v-if="editIndex!==index") {{row.phone}}
        input(v-else, v-model="editData.phone", placeholder="联系电话", clearable)
      template(slot-scope="{ row, index }", slot="onlineStatus")
        span(v-if="editIndex!==index") {{row.onlineStatus}}
        select(v-else, v-model="editData.onlineStatus")
          option(v-for="(item, index) in onlineStatuses") {{item.value}}
      template(slot-scope="{ row, index }", slot="isEnable")
        span(v-if="editIndex!==index") {{row.isEnable}}
        select(v-else, v-model="editData.isEnable")
          option(v-for="(item, index) in isEnables") {{item.value}}
      template(slot-scope="{ row, index }" slot="action")
        div(v-if='editIndex !== index')
          Button(type="primary", size="small", @click="handleEdit(row, index)") 编辑
          Poptip.lesson-text-left(confirm, title="你确定删除这条数据吗？", @on-ok="handleDelete(row, index)",
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
  name: 'the-sys-user',
  components: {
    TableExpand
  },
  data () {
    return {
      // 是否正在编辑
      editIndex: -1,
      editData: {},
      edit: false,
      // 设置数据
      tableData: [],
      isEnables: [
        { key: 0, value: '否' },
        { key: 1, value: '是' }
      ],
      entityTypes: [
        { key: 0, value: '系统管理员' },
        { key: 1, value: '教务管理员' },
        { key: 2, value: '课程管理员' },
        { key: 3, value: '教师' },
        { key: 4, value: '学生' }
      ],
      statuses: [
        { key: 1, value: '正常' },
        { key: 2, value: '锁定一小时' },
        { key: 3, value: '禁用' }
      ],
      onlineStatuses: [
        { key: 1, value: '在线' },
        { key: 2, value: '离线' }
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
        { key: 'entityId', title: '用户主体编号', slot: 'entityId' },
        { key: 'entityType', title: '用户主体类型', slot: 'entityType' },
        { key: 'pwd', title: '密码', slot: 'pwd' },
        { key: 'status', title: '账号状态', slot: 'status' },
        { key: 'icon', title: '图标', slot: 'icon' },
        { key: 'email', title: '电子邮箱', slot: 'email' },
        { key: 'phone', title: '联系电话', slot: 'phone' },
        { key: 'onlineStatus', title: '在线状态 ', slot: 'onlineStatus' },
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
  mounted () {
    rest.getAll('sysUsers').then(res => {
      this.tableData = res.data._embedded.sysUsers.map(item => {
        item._checked = false
        return item
      })
    }).catch(error => {
      console.log(error)
      this.$Message.error('获取数据失败')
    })
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
        rest.putOne('sysUsers', _this.editData).then(res => {
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
        rest.addOne('sysUsers', _this.tableData[0]).then(res => {
          _this.tableData[0]._links = res.data._links
          _this.editIndex = -1
          this.$Message.success('添加成功')
        }).catch(error => {
          console.log(error)
          this.$Message.error('添加失败')
        })
      }
    },
    handleDelete (row, index) {
      let _this = this
      rest.deleteByLink(row._links.self.href).then(res => {
        _this.tableData.splice(index, 1)
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
  }
}
</script>

<style lang="less" scoped>

</style>
