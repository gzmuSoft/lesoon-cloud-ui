const btns = {
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params)
          vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        }
      }
    }, [h('Button', {
      props: {
        type: 'error',
        size: 'small'
      }
    }, '删除')
    ])
  },
  update: (h, params, vm) => {
    return h('RadioGroup', [h('Button', {
      props: {
        type: 'primary',
        size: 'small'
      },
      on: {
        click: () => {
          if (vm.edittingCellId !== -1) {
            if (vm.edittingCellId === params.index) {
              vm.edittingCellId = -1
              vm.$emit('on-cancel-edit', params)
            } else {
              console.log('请先保存其他行')
            }
          } else {
            vm.edittingCellId = params.index
            vm.editting = []
            vm.$emit('on-start-edit', params)
          }
        }
      }
    }, vm.edittingCellId === params.index ? '取消' : '修改'),
    h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        display: vm.edittingCellId === params.index ? '' : 'none'
      },
      on: {
        click: () => {
          for (const name in vm.editting) {
            vm.value[params.row.initRowIndex][name] = vm.editting[name]
          }
          // 不知道什么用
          // vm.$emit('input', vm.value)
          vm.$emit('on-save-edit', Object.assign(params, { value: vm.editting }))
          vm.edittingCellId = -1
        }
      }
    }, '保存')])
  }
}

export default btns
