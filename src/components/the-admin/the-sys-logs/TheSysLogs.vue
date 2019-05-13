<template lang="pug">
  #lesson-logs
    Alert(type="warning") 对于日志来说，我们仅仅提供查看和删除操作，不可对其进行增加和修改。
    Table(:columns="columns", :data="tableData", ref="selection")
      template(slot-scope="{ row, index }" slot="browser")
        Tag(color="blue") {{ row.browser }}
    Modal(v-model="deleteTip", @on-ok='deleteRow', title="确定删除吗？", :loading="loading")
      p 你确定删除这一行吗？
    Page.lesson-text-center.lesson-margin-top(:total="1000")
</template>

<script>
/**
 * 这个组件中采取了三种不同的方式自定义渲染表格
 * 1. render 函数 —— 最复杂 —— action 列
 * 2. react jsx —— 较为可读 —— ip 列
 * 3. slot-scope —— 最简单 —— browser 列
 * 你可以自由选择学习
 */
import TableExpand from '_components/teble-expand'
import * as sysLog from '_api/sysLog'

export default {
  name: 'the-sys-logs',
  components: {
    TableExpand
  },
  data () {
    return {
      // 当前聚焦的输入框的行数
      deleteTip: false,
      loading: true,
      deleteData: {},
      tableData: [],
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
        { key: 'name', title: '名称' },
        { key: 'browser', title: '浏览器', slot: 'browser' },
        { key: 'operation', title: '操作' },
        { key: 'from_url', title: '来源' },
        {
          key: 'ip',
          title: 'ip',
          render: (h, params) => {
            // react jsx
            return (
              <div>
                <i-tag color="red">{params.row.ip}</i-tag>
              </div>
            )
          }
        },
        { key: 'url', title: '地址' },
        { key: 'sort', title: '排序', width: '60', align: 'center' },
        {
          key: 'action',
          title: 'Action',
          width: 100,
          align: 'center',
          render: (h, params) => {
            // render 函数
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.deleteTip = true
                    this.deleteData = params.row
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    /**
     * 数据初始化
     */
    initData () {
      sysLog.getAll().then(res => {
        this.tableData = res.data._embedded.sysLogs.map(item => {
          item._checked = false
          return item
        })
      }).catch(error => {
        console.log(error)
        this.$Message.error('获取数据失败')
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
