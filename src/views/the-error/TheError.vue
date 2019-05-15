<template lang='pug'>
  Tables(ref='tables', editable, searchable, search-place='top', v-model='tableData', :columns='columns', @on-delete='handleDelete' @on-save-edit='handleSave')

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
        { title: 'Create-Time', key: 'createTime', editType: 'year' },
        {
          title: 'Handle',
          key: 'handle',
          options: ['update', 'delete']
        }
      ],
      tableData: [
        { 'name': 'Joseph Martin', 'email': 'c.bfsn@geefob.dk', 'createTime': '1972-08-10', 'initRowIndex': 0 },
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
