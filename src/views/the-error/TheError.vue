<template lang='pug'>
  Tables(ref='tables', editable, addable, v-model='tableData', :columns='columns', @on-delete='handleDelete' @on-save-edit='handleSave')

</template>

<script>
import Tables from '_components/common/tables'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: 'Name', key: 'name', sortable: true },
        { title: 'Email', key: 'email', editType: 'string' },
        { title: 'Create-Time', key: 'createTime', editType: 'date' },
        {
          title: 'Handle',
          key: 'handle',
          fixed: 'right',
          options: ['update', 'delete']
        },
        { title: 'select',
          key: 'select',
          editType: 'select',
          options: [{ label: '单选1', value: '1' },
            { label: '单选2', value: '2' }] },
        { title: 'multiple',
          key: 'multiple',
          editType: 'multiple',
          options: [{ label: '多选1', value: '1' },
            { label: '多选2', value: '2' },
            { label: '多选2', value: '3' },
            { label: '多选2', value: '4' },
            { label: '多选2', value: '5' },
            { label: '多选2', value: '6' }] }
      ],
      tableData: [
        { 'name': 'Joseph Martin', 'email': 'c.bfsn@geefob.dk', 'createTime': '1972-08-10', 'initRowIndex': 0, 'multiple': 'asd' },
        { 'name': 'Jose Smith', 'email': 'w.qxdqgjh@obyevw.tf', 'createTime': '1994-08-02', 'initRowIndex': 1 },
        { 'name': 'Timothy Martin', 'email': 'h.gpbyeucjf@croahflyr.cn', 'createTime': '1991-08-30', 'initRowIndex': 2 },
        { 'name': 'Elizabeth Harris', 'email': 'y.ylvsl@exuj.tk', 'createTime': '2001-08-06', 'initRowIndex': 3 },
        { 'name': 'Laura Clark', 'email': 'd.jeumwgni@gdomyhnp.uk', 'createTime': '2014-03-31', 'initRowIndex': 4 }
      ]
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    handleSave (params) {
      console.log('123')
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
