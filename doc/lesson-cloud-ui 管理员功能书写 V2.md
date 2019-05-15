# lesson-cloud-ui 管理员功能书写 V2

由于现在前面变化过多，所以现在又来了 V2 的书写方式，方式会直接去带你寻找你需要修改的地方，以最快速度完成单表操作。分为如下步骤

1. 路由、菜单配置
2. 复制 course 修改

## 路由、菜单配置

这个和第一篇的没有区别

我们现在选择的是教师管理，将他归类到教务管理，那么应该在菜单中做如下修改：
- 添加一个一级菜单，教务管理
- 添加一个二级菜单，教师管理

菜单数据位于 `src/views/the-admin/TheAdmin.vue` 中，你可以看到一个代码块如下：

![data](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512144802.png)

我们添加一级和二级菜单后，修改如下：

> 注意，一律不使用复数！！！

```json
{
  "menuList": [
    {
      "title": "系统管理",
      "name": "系统管理",
      "icon": "md-cube",
      "children": [
        {
          "title": "日志管理",
          "name": "sysLogs",
          "icon": "md-color-filter"
        }
      ]
    },
    {
      "title": "教务管理",
      "name": "教务管理",
      "icon": "logo-buffer",
      "children": [
        {
          "title": "教师管理",
          "name": "teacher",
          "icon": "ios-man"
        }
      ]
    }
  ]
}
```

访问后台路径：http://127.0.0.1:8080/admin
运行效果如下

![menu](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512145533.png)

当然，现在点击是没有任何效果的。菜单的图标请参见 [iview icon](https://www.iviewui.com/components/icon)

接下来我们路由的配置，这样点击以后才会有效果。不过在这之前我们需要准备一个教师管理的页面，组件化思想，我们的页面应该由一个个组件组成，那么我们现在就要将他作为一个组件来进行创建。如下：

1. `src/components/the-admin` 新建一个文件夹 `the-teacher`
2. 新建两个文件 `index.js` 和 `TheTeacher.vue`

两个文件内容如下：
![index.js](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512150259.png)

![TheTeacher.vue](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512150656.png)

> 为什么加 `the`？`the` 表示特指，在这里的意思是，顶多出现一次，也就是说他是一个只会被使用一次组件。这里的 `TheTeacher` 组件只会被 `admin` 使用，所以加上 `the`。如果不是只使用一次的，那么就不能加。

有了页面，我们需要进行配置，让他能够显示出来。对于管理员，他的核心路由配置文件为 `src/route/modules/admin.js`，如下：

![route](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512145730.png)

我们修改一下，让他能够显示出来我们刚刚写的页面，如下
```javascript
const TheAdmin = () => import('_views/the-admin')
const TheSysLogs = () => import('_components/the-admin/the-sys-logs')
const TheTeacher = () => import('_components/the-admin/the-teacher')

export default {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  redirect: 'sysLogs',
  children: [
    {
      path: '/sysLogs',
      name: 'sysLogs',
      component: TheSysLogs,
      meta: {
        title: '日志管理'
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TheTeacher,
      meta: {
        title: '教师管理'
      }
    }
  ]
}

```
然后访问 http://127.0.0.1:8080/admin 一下并点击菜单试试

![菜单](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512151401.png)

这样第一步就完成了。

## 复制 course 修改

直接把 course 的 `template` 、 `script` 复制过来修改。

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115429.png)

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115318.png)

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115957.png)

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115657.png)

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115739.png)

![](https://resources.echocow.cn/file/2019/05/15/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190515115817.png)