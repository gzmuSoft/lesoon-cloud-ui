<template lang="pug">
  #lesson-logs
    Table(:columns="columns", :data="tableData")
      template(slot-scope="{ row, index }" slot="browser")
        Tag(color="blue") {{ row.browser }}
</template>

<script>
/**
 * 这个组件中采取了三种不同的方式自定义渲染表格
 * 1. render 函数 —— 最复杂 —— action 列
 * 2. react jsx —— 较为可读 —— ip 列
 * 3. slot-scope —— 最简单 —— browser 列
 * 你可以自由选择学习
 */
export default {
  name: 'the-sys-logs',
  data () {
    return {
      // 当前聚焦的输入框的行数
      tableData: [{
        name: '123',
        spell: '123',
        sort: 1,
        createTime: '2019-04-13T23:03:34',
        createUser: null,
        modifyTime: '2019-04-13T23:18:52',
        modifyUser: null,
        remark: null,
        isEnable: true,
        browser: '123',
        operation: '123',
        fromUrl: '123',
        ip: '1232',
        url: '123',
        status: '1',
        _links: {
          'self': {
            'href': 'http://127.0.0.1:8080/sysLogs/1'
          },
          'sysLog': {
            'href': 'http://127.0.0.1:8080/sysLogs/1'
          }
        }
      }],
      columns: [
        { type: 'selection', width: 50, align: 'center' },
        { type: 'index', width: 60, align: 'center' },
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
                    this.delete(params.row)
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
    }
  },
  methods: {
    delete (row) {
      let _this = this
      _this.tableData.splice(_this.tableData.indexOf(row), 1)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
