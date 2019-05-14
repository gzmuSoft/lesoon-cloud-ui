<template lang = "pug">
  #lesson-data
    Table(:columns="columns", :data="tableData", ref="selection")
</template>

<script>
import * as rest from '_api/rest'
import TableExpand from '_components/common/table-expand'

export default {
  name: 'TheSysData',
  comment: {
    TableExpand
  },
  data () {
    return {
      tableData: [],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '编号',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '名称全拼',
          key: 'spell'
        },
        {
          title: '父级',
          key: 'parent_id'
        },
        {
          title: '父级',
          key: 'parent_id'
        },
        {
          title: '简介',
          key: 'brief'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '排序',
          key: 'sort'
        },
        {
          title: '创建用户名称',
          key: 'create_user'
        },
        {
          title: '创建日期',
          key: 'create_time'
        },
        {
          title: '末次更新用户名称',
          key: 'modify_user'
        },
        {
          title: '末次更新时间',
          key: 'modify_time'
        },
        {
          title: '备注',
          key: 'remark'
        }
      ]
    }
  },
  mounted () {
    this.initData(0)
  },
  methods: {
    /**
     * 数据初始化
     */
    initData (page) {
      let _this = this
      rest.getAll(`sysData?page=${page}`).then(res => {
        _this.tableData = res.data._embedded.sysLogs.map(item => {
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
     * 删除行
     */
    deleteRow () {
      let _this = this
      // 模拟删除等待时间
      setTimeout(() => {
        _this.tableData.splice(_this.tableData.indexOf(_this.deleteData), 1)
        _this.deleteTip = false
      }, 2000)
    },
    handleSelect (row, index) {
      this.tableData[index]._checked = !this.tableData[index]._checked
    },
    handleChange (page) {
      this.initData(page - 1)
    }
  }
}
</script>

<style scoped>

</style>
