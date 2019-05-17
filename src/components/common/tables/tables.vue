<template lang='pug'>
  div
    Button.lesson-table-add(v-if="addable" size="large", icon="md-add", shape="circle", type="success", @click="handleAdd")
    slot(name='header', slot='header')
    slot(name='footer', slot='footer')
    slot(name='loading', slot='loading')
    Table(ref='tablesMain', :data='insideTableData', :columns='insideColumns',
      :stripe='stripe', :border='border', :show-header='showHeader', :width='width',
      :height='height', :loading='loading', :disabled-hover='disabledHover',
      :highlight-row='highlightRow', :row-class-name='rowClassName', :size='size',
      :no-data-text='noDataText', :no-filtered-data-text='noFilteredDataText',
      @on-current-change='onCurrentChange', @on-select='onSelect',
      @on-select-cancel='onSelectCancel', @on-select-all='onSelectAll',
      @on-selection-change='onSelectionChange', @on-sort-change='onSortChange',
      @on-filter-change='onFilterChange', @on-row-click='onRowClick',
      @on-row-dblclick='onRowDblclick', @on-expand='onExpand')

</template>

<script>
import TablesEdit from './edit.vue'
import handleBtns from './handle-btns'
import './index.less'
export default {
  name: 'Tables',
  props: {
    size: String,
    width: [Number, String],
    height: [Number, String],
    context: Object,
    noDataText: String,
    noFilteredDataText: String,
    disabledHover: Boolean,
    value: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    rowClassName: {
      type: Function,
      default: () => ''
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @description 全局设置是否可编辑
     */
    editable: {
      type: Boolean,
      default: false
    }
  },
  /**
   * Events
   * @on-start-edit 返回值 {Object} ：同iview中render函数中的params对象 { row, index, column }
   * @on-cancel-edit 返回值 {Object} 同上
   * @on-save-edit 返回值 {Object} ：除上面三个参数外，还有一个value: 修改后的数据
   */
  data () {
    return {
      insideColumns: [],
      insideTableData: [],
      editingCellId: -1,
      editing: []
    }
  },
  methods: {
    supportEdit (item, index) {
      item.render = (h, params) => {
        return h(TablesEdit, {
          props: {
            params: params,
            value: this.insideTableData[params.index][params.column.key],
            editingCellId: this.editingCellId,
            editType: this.editable ? params.column.editType || '' : ''
          },
          on: {
            'input': val => {
              this.editing[params.column.key] = val
            }
          }
        })
      }
      return item
    },
    supportHandle (item) {
      let options = item.options || []
      let insideBtns = []
      options.forEach(item => {
        if (handleBtns[item]) insideBtns.push(handleBtns[item])
      })
      let btns = item.button ? [].concat(insideBtns, item.button) : insideBtns
      item.render = (h, params) => {
        params.tableData = this.value
        return h('div', btns.map(item => item(h, params, this)))
      }
      return item
    },
    handleColumns (columns) {
      this.insideColumns = columns.map((item, index) => {
        let res = item
        if (res.editType) res = this.supportEdit(res, index)
        if (res.key === 'handle') res = this.supportHandle(res)
        return res
      })
    },
    handleAdd () {
      if (this.editingCellId === -1) {
        this.editing = []
        this.insideTableData.unshift({})
        this.editingCellId = 0
        this.editing['add'] = true
        this.$emit('on-add')
      } else {
        this.$Message.error('请保存后再进行编辑')
      }
    },
    handleTableData () {
      this.insideTableData = this.value.map((item, index) => {
        let res = item
        res.initRowIndex = index
        return res
      })
    },
    exportCsv (params) {
      this.$refs.tablesMain.exportCsv(params)
    },
    clearCurrentRow () {
      this.$refs.talbesMain.clearCurrentRow()
    },
    onCurrentChange (currentRow, oldCurrentRow) {
      this.$emit('on-current-change', currentRow, oldCurrentRow)
    },
    onSelect (selection, row) {
      this.$emit('on-select', selection, row)
    },
    onSelectCancel (selection, row) {
      this.$emit('on-select-cancel', selection, row)
    },
    onSelectAll (selection) {
      this.$emit('on-select-all', selection)
    },
    onSelectionChange (selection) {
      this.$emit('on-selection-change', selection)
    },
    onSortChange (column, key, order) {
      this.$emit('on-sort-change', column, key, order)
    },
    onFilterChange (row) {
      this.$emit('on-filter-change', row)
    },
    onRowClick (row, index) {
      this.$emit('on-row-click', row, index)
    },
    onRowDblclick (row, index) {
      this.$emit('on-row-dblclick', row, index)
    },
    onExpand (row, status) {
      this.$emit('on-expand', row, status)
    }
  },
  watch: {
    columns (columns) {
      this.handleColumns(columns)
    },
    value (val) {
      this.handleTableData()
    }
  },
  mounted () {
    this.handleColumns(this.columns)
    this.handleTableData()
  }
}
</script>
