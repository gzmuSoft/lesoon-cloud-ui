# lesson-cloud-ui 管理员功能书写

这篇文将会带你去书写一个管理员的完整的功能，从数据模拟到接口请求，再到页面渲染的过程，都会一一叙述。但我们是以实用性为主，不会告诉你原理是什么，以及为什么这么写，你只需要照着做保证没有错就行，当你熟悉以后你再回来分析这么一个过程，有些东西就会很容易懂和明白。

> 长文预警！！！长文预警！！！长文预警！！！长文预警！！！长文预警！！！长文预警！！！长文预警！！！没有毅力完成的慎做！

-------
> 如果你不想看过程，直接看最后，看看修改了哪些文件然后直接弄吧。

## 在这之前

你需要搭建好你的前端 `mock` 环境以及 `vue` 项目环境并能够正常的登录。

其次，你需要明白我们前端的一个数据模拟与请求的过程，对于前端来说，由于不用搭建后端环境，所以需要自己写接口进行数据的模拟。整个管理员页面的每个功能的书写大概分为如下步骤：

1. 菜单、路由配置
2. 数据初始化与页面渲染
3. 数据删除操作
4. 数据更新操作
5. 数据新增操作

但是每个步骤里面都有更加详细的过程，对于第 2—5，他们都有更加细致化的操作，大概如下：

1. 获取数据格式
2. 接口模拟
3. 请求数据
4. 更新页面

后面两点很容易理解，我们来解释一下前面两个重要的点。

### 获取数据格式
我们现在已经拥有的接口，均是我默认生成出来的，也就是说他们是规范和统一的，但是同样，他们也是死板的，仅仅只有 **单表操作**，具体的接口规范请参见 [接口规范](https://echocow.cn/articles/2019/04/12/1555059704413.html#b3_solo_h3_5)

但是由于我们没有一个完整接口文档，所以前端同学并不知道后端的数据格式到底是怎么样的，所以这个时候我们需要向后端同学进行询问。过程大概如下：

1. 选择一张表作为你此次的书写的功能
2. 找寻一位环境已经搭建成功的后端人员
3. 询问他指定表的数据接口格式

举个例子，我选择表为 sys_logs，需要做的功能是 日志管理，那么我找寻一位后端人员，他已经搭建好了环境，他只需要使用 `GET` 方法请求数据，获取到了如下的数据：
```json
{
  "_embedded": {
    "sysLogs": [
      {
        "name": "123",
        "spell": "123",
        "sort": 1,
        "createTime": "2019-04-13T23:03:34",
        "createUser": null,
        "modifyTime": "2019-04-13T23:18:52",
        "modifyUser": null,
        "remark": null,
        "isEnable": true,
        "browser": "123",
        "operation": "123",
        "fromUrl": "123",
        "ip": "1232",
        "url": "123",
        "status": "1",
        "_links": {
          "self": {
            "href": "http://127.0.0.1:8080/sysLogs/1"
          },
          "sysLog": {
            "href": "http://127.0.0.1:8080/sysLogs/1"
          }
        }
      },
      {
        "name": null,
        "spell": null,
        "sort": null,
        "createTime": "2019-05-10T22:58:27",
        "createUser": null,
        "modifyTime": "2019-05-10T22:58:27",
        "modifyUser": null,
        "remark": null,
        "isEnable": true,
        "browser": "PostmanRuntime/7.11.0",
        "operation": "POST",
        "fromUrl": "http://localhost:8080/oauth/token",
        "ip": "0:0:0:0:0:0:0:1",
        "url": "/oauth/token",
        "status": "1",
        "_links": {
          "self": {
            "href": "http://127.0.0.1:8080/sysLogs/20"
          },
          "sysLog": {
            "href": "http://127.0.0.1:8080/sysLogs/20"
          }
        }
      }
    ]
  },
  "_links": {
    "first": {
      "href": "http://127.0.0.1:8080/sysLogs?page=0&size=20"
    },
    "self": {
      "href": "http://127.0.0.1:8080/sysLogs{?page,size,sort}",
      "templated": true
    },
    "next": {
      "href": "http://127.0.0.1:8080/sysLogs?page=1&size=20"
    },
    "last": {
      "href": "http://127.0.0.1:8080/sysLogs?page=1&size=20"
    },
    "profile": {
      "href": "http://127.0.0.1:8080/profile/sysLogs"
    },
    "search": {
      "href": "http://127.0.0.1:8080/sysLogs/search"
    }
  },
  "page": {
    "size": 10,
    "totalElements": 33,
    "totalPages": 2,
    "number": 0
  }
}
```
然后交付于我即可。作为一个前端人员，你有义务去把 json 学好，然后一眼应该能够分析出来他是什么意思：

- `_embedded` 是数据节点，存放我们需要的数据
- `_links` 是与此资源相关的链接
- `page` 是他的分页信息

而他的实体就是在 `_embedded` 的 `sysLogs` 节点之下。作为前端人员你必须明白如何去读取这个 json 数据

### 接口模拟

当你获取到数据以后，就是对已经规范好的接口进行数据模拟了，对于数据模拟请参见 `mock` 文件夹，我说过，请让一个人来对他进行维护，所以最好的是前端一个同学专门书写此块，对他进行对接。数据模拟在我们获取数据格式之后，去模拟一个假的后端，这个后端是写死的东西，没有任何复杂的业务逻辑，就是一些简单的校验而已。我们需要模拟如下的接口：

1. GET 获取所有资源
2. POST 增加某个资源
3. DELETE 删除某个资源
4. PUT 更新某个资源

所以来管理这个模块的人务必对我们项目生成的接口熟悉才行。

## 准备开始

我们先选择一张表，以教师 teacher 表为例，那么我们需要做的就是 教师管理功能。

## 菜单、路由配置

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
const TheTeacher = () => import("_components/the-admin/the-teacher')

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

## 数据初始化与页面渲染

在初始化之前，我们需要按照上面说的步骤来。

### 获取数据格式

我们需要向一位后端的同学要一下 teacher 表的数据格式，拿到的数据应该如下（必须相似，因为是自动生成的）：
```json
{
    "_embedded": {
        "teachers": [
            {
                "name": "教师",
                "spell": "teacher",
                "sort": 1,
                "createTime": "2019-05-12T15:19:49",
                "createUser": "admin",
                "modifyTime": "2019-05-12 07:20:46",
                "modifyUser": "admin",
                "remark": null,
                "isEnable": true,
                "userId": 11,
                "schoolId": 1,
                "collegeId": 1,
                "depId": 1,
                "gender": "男",
                "birthday": "2019-05-30",
                "nation": "苗",
                "degree": "1",
                "academic": "1",
                "graduationDate": "1970-01-22",
                "major": "软件工程",
                "graduateInstitution": "s",
                "majorResearch": "1",
                "resume": "1",
                "workDate": "1970-01-29",
                "profTitle": "1",
                "profTitleAssDate": "2019-05-30",
                "isAcademicLeader": 1,
                "subjectCategory": "12",
                "idNumber": "1",
                "phone": "13112341234",
                "email": "123@123.com",
                "_links": {
                    "self": {
                        "href": "http://127.0.0.1:8080/teachers/1"
                    },
                    "teacher": {
                        "href": "http://127.0.0.1:8080/teachers/1"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "http://127.0.0.1:8080/teachers{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "http://127.0.0.1:8080/profile/teachers"
        },
        "search": {
            "href": "http://127.0.0.1:8080/teachers/search"
        }
    },
    "page": {
        "size": 10,
        "totalElements": 1,
        "totalPages": 1,
        "number": 0
    }
}
```

**再次强调，作为一个前端人员你必须了解 json 数据结构。**通过他我们就得到了接口的数据规范，现在我们需要模拟接口。

### 模拟接口

如何模拟？通过 mock，我们现在需要的是页面的初始化的数据，也就是列表，按照我们的规范，得到的数据应该就是后端给我们的数据，所以我们需要写一个 `get` 方法的数据模拟。

在 `mock/routes/data` 下，创建一个 `teachers.js`，**名字必须为复数！！！**加入如下配置：

```javascript
const express = require('express')
const router = express.Router()

// get 请求，路径必须为复数！！！
/**
 * @param req 请求
 * @param res 响应
 */
router.get('/teachers', (req, res) => {
  let teachers = []
  // 创建十个教师对象
  for (let i = 0; i < 10; i++) {
    teachers.push({
      'name': '教师' + i,
      'spell': 'teacher' + i,
      'sort': 1,
      'createTime': '2019-05-12T15:19:49',
      'createUser': null,
      'modifyTime': null,
      'modifyUser': '2019-05-12 07:20:46',
      'remark': null,
      'isEnable': true,
      'userId': 11,
      'schoolId': 1,
      'collegeId': 1,
      'depId': 1,
      // 男女
      'gender': i % 2 === 0 ? '男' : '女',
      'birthday': '2019-05-30',
      'nation': '苗',
      'degree': '1',
      'academic': '1',
      'graduationDate': '1970-01-22',
      'major': '软件工程',
      'graduateInstitution': 's',
      'majorResearch': '1',
      'resume': '1',
      'workDate': '1970-01-29',
      'profTitle': '1',
      'profTitleAssDate': '2019-05-30',
      'isAcademicLeader': 1,
      'subjectCategory': '12',
      'idNumber': '1',
      'phone': '13112341234',
      'email': '123@123.com',
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/teachers/1'
        },
        'teacher': {
          'href': 'http://127.0.0.1:8080/teachers/1'
        }
      }
    })
  }
  res.status(200)
    .json({
      '_embedded': {
        'teachers': teachers
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/teachers{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/teachers'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/teachers/search'
        }
      },
      'page': {
        'size': 10,
        'totalElements': 1,
        'totalPages': 1,
        'number': 0
      }
    })
})

module.exports = router

```
然后引入路由文件 `mock/index.js` 中

![index.js](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512153501.png)

启动 `mock` 使用 `Postman` 测试一下：

![test](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512153653.png)

接口数据简单模拟完成！

### 页面书写

接下来我们就是去写页面了，我们先暂时以最简单的方式写出来，后面再去美化。所以我们暂时只写一个 table 表格显示数据即可！

我们需要先定义有哪些列，如下：

![列](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512155925.png)

与他的 数据模拟文件 的字段一一对应，不过对于公共字段，即蓝色选中部分，我们不需要显示，为什么后面再说，并且由于这个表的字段太多，我们只显示非常有价值的字段，**大概十个左右即可。**

- key：键
- title：列名
- slot：插槽,用来自定义显示

然后定义数据，我们暂时什么都不写，如下：

![定义数据](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512160449.png)


然后使用 [iview Table](https://www.iviewui.com/components/table) 组件书写如下

![teacher](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512161301.png)

查看效果

![show](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512161435.png)

现在我们来初始化数据，就是需要请求数据了

### 请求数据(请求方式已经废弃)

> **请求数据的最新方式请查看最后的更新部分！！！！**
>
> **请求数据的最新方式请查看最后的更新部分！！！！**
>
> **请求数据的最新方式请查看最后的更新部分！！！！**



~~我们需要向我们的 mock 服务器请求数据，那么需要写相应的 api 请求了，我们将他放置在 `src/api` 下，直接创建一个 `teacher.js`，内容如下~~

![api](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512162306.png)


~~然后在组件里面测试一下是否能使用~~

![con](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512162525.png
)

~~刷新测试一下~~

![数据请求](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512162744.png)

~~那么现在我们就需要处理一下数据的逻辑，我们需要他的 `data` 里面的 `_embedded` 里面的 `teachers`，因为那就是表格的数据。一个简单的赋值就完成了，修改 `mounted` 方法如下：~~
```Javascript
  mounted () {
    teacher.getAll().then(res => {
      // 将结果打印在浏览器控制台
      console.log(res)
      this.tableData = res.data._embedded.teachers
    }).catch(error => {
      console.log(error)
    })
  }
```

~~再去看看效果~~

![result](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512163037.png)

~~表格数据简单初始化完成！~~

但是现在数据显示不全，因为我们现在还有很多没有显示，怎么办呢？有两种处理方式

1. 将那些数据置于 展开列中，见 日志管理 和 [官网例子](https://www.iviewui.com/components/table#KZK)，适用于不变的数据，即不能被修改的数据。
2. 置于模态框中更好的显示，适用于数据字段多且经常修改的数据。

这里的数据多，并且很多都是需要进行修改的，所以我们选择第二种

### 更多的数据显示

我们先去掉 slot 插槽的自定义，他会默认使用 span 进行替换。同样上面的一堆 template 都要去掉。同时新增加一列操作列：

![next](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512164610.png)

![template](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512164858.png)

创建两个方法，什么都不写

![methods](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512165012.png)

现在我们需要显示 对话框，使用 [iview modal](https://www.iviewui.com/components/modal) 组件

![modal](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512170643.png)

method 内容修改如下：
```javascript
  methods: {
    handleInfo (row, index) {
      // 数据复制
      this.showData = row
      // 显示对话框
      this.visible = true
    },
    handleDelete (row, index) {
      //
    }
  }
```
测试一下，进入页面，点击详情如下：

![详情](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512170844.png)

接下来就是对没有的字段的显示了

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512171914.png)

效果如下：
![result](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512172037.png)


至于排版、样式什么的问题，由前端调吧，我没那个精力了=-=


## 数据删除操作

同样，先写接口模拟，由于上面操作过，就直接上代码了。


将 `mock/index.js` 
```
app.use(teachers) 改为 app.use('/teachers', teachers)
```

`mock/routes/data/teachers.js` 如下：

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512173432.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512174703.png)

> 我后面把名字改成了 deleteByLink

`src/components/the-admin/the-teacher/TheTeacher.vue` 删除逻辑如下
```
handleDelete (row, index) {
  teacher.deleteByLink(row._links.self.href).then(res => {
    this.$Message.success('删除成功')
    // 表格中的数据一并删除
    this.tableData.splice(this.tableData.indexOf(row), 1)
  }).catch(error => {
    this.$Message.error('删除失败')
    console.log(error)
  })
}
```

这就删除完成

## 数据更新操作

好多啊，写的我好累啊=-=最麻烦的就是更新和增加操作了。

在 `src/components/the-admin/the-teacher/TheTeacher.vue` 的 `data` 中添加如下标识

```
// 是否正在编辑
isEdit: false,
```

然后我就没心情写了啊！！！！！！

操作都是一样样的，先模拟接口在去写请求再去写页面。。。

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512184652.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512185151.png)


我修改了一些东西没有截图，不过不多，一眼就能看懂的那种代码。

## 分页

对于分页请参见我写的 course 表，主要两个文件需要修改，一个是他的数据模拟里面的 get，如下

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095032.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095122.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095150.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095220.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095249.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095235.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095311.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095338.png)

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190514095805.png)

## 最后

本次修改的东西 ，绿色为新增的文件，蓝色为修改的文件

![](https://resources.echocow.cn/file/2019/05/12/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20190512185229.png)

实在写不动了，新增和编辑大家看看吧，不懂得再问。

## 更新

### 请求数据

我在做第三张的表的时候发现，其实对于这几个请求，都是重复的操作，代码大量重复，所以我将它抽取了出来，见文件 `src/api/rest.js`，如何使用抽取出来的呢？

1. 引用 `import * as rest from '_api/rest'`
2. 调用 `getAll` `addOne` `putOne` 这三个方法的时候传递一个 `resource` 参数，也就是你当前正在写得表名的复数形式，例如对于 `teacher` 表，调用方式如下：

```javascript
// teachers 就是资源名称的复数
rest.getAll('teachers').then(res => {
  //...
}).catch(error => {
  //...
})
```