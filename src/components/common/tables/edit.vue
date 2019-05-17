<template lang='pug'>
  span(v-if="!isEditing") {{value}}
  div(v-else)
    InputNumber(v-if="editType==='number'" :value="value instanceof Number?Number(value):null", placeholder="请输入数字", clearable  @on-change="handleChange")
    Input(v-if="editType==='string'", :value="String(value||'')", placeholder="请输入字符串", clearable  @on-change="handleChange")
    DatePicker(v-if="editType==='date'", type="date", :value="String(value||'')", placeholder="请输入日期",
  format="yyyy-MM-dd"  @on-change="handleChange")
    DatePicker(v-if="editType==='year'", type="year", :value="String(value||'')", placeholder="请输入年份",
  format="yyyy"   @on-change="handleChange")
    DatePicker(v-if="editType==='month'", type="month", :value="String(value||'')", placeholder="请输入月份",
  format="yyyy"  @on-change="handleChange")
    Select(v-if="editType==='select'", :value="String(value||'')" placeholder="请单选" @on-change="handleChange")
      Option(v-for="item in params.column.options", :value="item.value", :key="item.value") {{item.label}}
    Select(v-if="editType==='multiple'", multiple, :value="value instanceof Array?value:[]" placeholder="请多选" @on-change="handleChange")
      Option(v-for="item in params.column.options", :value="item.value", :key="item.value") {{item.label}}
    Input(v-if="editType==='textarea'", :value="String(value||'')", type="textarea",placeholder="请输入文本", clearable  @on-change="handleChange")
</template>

<script>
export default {
  name: 'TablesEdit',
  props: {
    value: [String, Number, Array],
    editingCellId: Number,
    params: Object,
    editType: String
  },
  computed: {
    isEditing () {
      return this.editingCellId === this.params.index && this.editType !== ''
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
      let v
      if (this.editType === 'date' || this.editType === 'month' ||
        this.editType === 'year' || this.editType === 'select' || this.editType === 'multiple' ||
        this.editType === 'number') {
        v = val
      } else {
        v = val.target.value
      }
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="less">
</style>
