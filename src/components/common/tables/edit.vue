<template lang='pug'>
  span(v-if="!isEditting") {{value}}
  div(v-else)
    InputNumber(v-show="editType==='number'" :value="Number(value)", placeholder="请输入数字", clearable  @on-change="handleChange")
    Input(v-show="editType==='string'", :value="String(value)", placeholder="请输入字符串", clearable  @on-change="handleChange")
    DatePicker(v-show="editType==='date'", type="date", :value="String(value)", placeholder="请输入日期",
  format="yyyy-MM-dd"  @on-change="handleChange")
    DatePicker(v-show="editType==='year'", type="year", :value="String(value)", placeholder="请输入年份",
  format="yyyy"   @on-change="handleChange")
    DatePicker(v-show="editType==='month'", type="month", :value="String(value)", placeholder="请输入月份",
  format="yyyy"  @on-change="handleChange")
</template>

<script>
export default {
  name: 'TablesEdit',
  props: {
    value: [String, Number],
    edittingCellId: Number,
    params: Object,
    editType: String
  },
  computed: {
    isEditting () {
      return this.edittingCellId === this.params.index && this.editType !== ''
    }
  },
  methods: {
    handleChange (val) {
      let v
      if (this.editType === 'date' || this.editType === 'month' || this.editType === 'year' || this.editType === 'select') {
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
.tables-edit-outer {
  height: 100%;
  .tables-edit-con {
    position: relative;
    height: 100%;
    .value-con {
      vertical-align: middle;
    }
    .tables-edit-btn {
      position: absolute;
      right: 10px;
      top: 0;
      display: none;
    }
    &:hover {
      .tables-edit-btn {
        display: inline-block;
      }
    }
  }
  .tables-editting-con {
    .tables-edit-input {
      width: ~"calc(100% - 60px)";
    }
  }
}
</style>
