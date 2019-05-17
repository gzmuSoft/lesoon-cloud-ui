const btns = {
  delete: (h, params, vm) =>
    h('Poptip', {
      props: {
        transfer: true,
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params.row, params.index)
        }
      }
    }, [h('Button', {
      'class': 'lesson-tables-btn',
      props: {
        type: 'error',
        size: 'small'
      }
    }, '删除')
    ]),
  update: (h, params, vm) =>
    h('RadioGroup', [h('Button', {
      'class': 'lesson-tables-btn',
      props: {
        type: 'primary',
        size: 'small'
      },
      on: {
        click: () => {
          if (vm.editingCellId !== -1) {
            if (vm.editingCellId === params.index) {
              vm.editingCellId = -1
              if (vm.editing['add']) {
                vm.insideTableData.shift()
              }
              vm.$emit('on-cancel-edit', params.row, params.index)
            } else {
              vm.$Message.error('请保存后再进行编辑')
            }
          } else {
            vm.editingCellId = params.index
            vm.editing = { ...params.row }
            vm.$emit('on-start-edit', params.row, params.index)
          }
        }
      }
    }, vm.editingCellId === params.index ? '取消' : '修改'),
    h('Button', {
      'class': 'lesson-tables-btn',
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        display: vm.editingCellId === params.index ? '' : 'none'
      },
      on: {
        click: () => {
          // 更新后的逻辑发送到最顶层组件处理 不在此处理
          // // 新增
          // if (vm.editing['add']) {

          // }
          // // 更新
          // else {
          //   for (const name in vm.editing) {
          //     vm.value[params.row.initRowIndex][name] = vm.editing[name]
          //   }
          // }

          // 不知道什么用
          // vm.$emit('input', vm.value)
          vm.$emit('on-save-edit', params.row, params.index, { ...vm.editing })
          vm.editingCellId = -1
        }
      }
    }, '保存')])
}

export default btns
