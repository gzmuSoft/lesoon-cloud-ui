<template lang="pug">
  Form.lesson-form(ref="form", :label-width="labelWidth", :model="formData", :label-position="labelPosition")
    Row(:gutter="rowGutter")
      Col(:span="item.span", v-for="(item, index) in formItems", :key="`_${index}`")
        FormItem(:label="item.label", :label-position="item.labelPosition", :prop="item.name")
          component(:is="item.component", :type="item.type", v-model="currentFormData[item.name]",
            :placeholder="item.placeholder", :clearable="item.clearable", :maxlength="item.maxlength",
            :disabled="typeof item.disabled === 'undefined' ? false : item.disabled", :show-input="item.showInput",
            :readonly="typeof item.readonly === 'undefined' ? readonly : item.readonly", :suffix="item.suffix",
            :icon="item.icon", :prefix="item.prefix",  :show-stops="item.showStops",
            :range="item.range", :step="item.step",
            :tip-format="item.tipFormat", :min="item.min", :max="item.max", :show-tip="item.showTip",
            :input-size="item.inputSize", :active-change="item.activeChange",
            :format="item.format", :placement="item.placement", :options="item.options", :split-panels="item.splitPanels",
            :multiple="item.multiple", :show-week-numbers="item.showWeekNumbers", :start-date="item.startDate", :confirm="item.confirm",
            :open="item.open", :size="item.size", :editable="item.editable", :transfer="item.transfer", :separator="item.separator",
            :time-picker-options="item.timePickerOptions",
            :render-format="item.renderFormat", :trigger="item.trigger", :data="item.data", :change-on-select="item.changeOnSelect",
            :load-data="item.loadData", :filterable="item.filterable", :not-found-text="item.notFoundText",
            :formatter="item.formatter", :parser="item.parser", :precision="item.precision",
            :count="item.count", :allow-half="item.allowHalf", :show-text="item.showText", :character="item.character",
            :custom-icon="item.customIcon",
            :alpha="item.alpha", :hue="item.hue", :recommend="item.recommend", :colors="item.colors",
            :style="item.styles"
          ) {{ item.component === 'p' ? currentFormData[item.name] : ''}}
            template(v-if="item.children")
              component(
                v-for="(child, i) in item.children.list"
                :is="item.children.component"
                :key="`${index}_${i}`"
                :label="child.label"
                :value="child.value"
              ) {{ child.title }}
      slot(name="footer")
        Col(:span="24")
          Button.lesson-form-btn(type="primary", v-if='readonly', @click="handleModify") 修改
          Button.lesson-form-btn(type="success", v-if='!readonly', @click="handleOk") 完成
          Button(type="info", @click="handleReset") 重置
</template>

<script>
export default {
  name: 'DynamicForm',
  data () {
    return {
      currentFormData: {},
      readonly: this.value
    }
  },
  watch: {
    value (val) {
      this.readonly = val
    },
    // 他丫儿的卡了我三个小时的地方，气死我了快
    readonly (val) {
      this.$emit('input', val)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    formItems: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every(value =>
          value.hasOwnProperty('name') &&
          value.hasOwnProperty('label')
        )
      }
    },
    formData: {
      type: Object,
      default: () => {}
    },
    labelWidth: Number,
    labelPosition: {
      type: String,
      default: 'top'
    },
    rowGutter: {
      type: Number,
      default: 32
    }
  },
  mounted () {
    let _this = this
    // 设置一些字段的默认值
    _this._.forEach(_this.formItems, value => {
      if (!_this._.has(value, 'span')) value.span = 12
      if (!_this._.has(value, 'label')) value.label = ''
      if (!_this._.has(value, 'component')) value.component = 'i-input'
      if (!_this._.has(value, 'labelPosition')) value.labelPosition = 'top'
      if (!_this._.has(value, 'clearable')) value.clearable = false
      if (!_this._.has(value, 'disabled')) value.disabled = null
      if (!_this._.has(value, 'readonly')) value.readonly = null
    })
    console.log(_this.formItems)
    _this.handleReset()
  },
  methods: {
    handleModify () {
      this.readonly = false
    },
    handleOk () {
      this.readonly = true
      this.$emit('on-ok', this._.isEqual(this.currentFormData, this.formData), this.currentFormData)
    },
    handleReset () {
      this.readonly = true
      this.currentFormData = this._.cloneDeep(this.formData)
    },
    status () {
      return this._.isEqual(this.currentFormData, this.formData)
    }
  }
}
</script>

<style lang="less" scoped>
.lesson-form-btn {
  margin-right: 8px;
}
</style>
