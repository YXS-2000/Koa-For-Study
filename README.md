# Koa框架自行搭建尝试

### 1、搭建过程

#### 1.1 搭建背景

在终端输入指令之后直接输入

```
yarn add koa
```

然后自己搭建文件结构，自行搭建路由，自行编写启动指令

其中文件结构是按照前端常见文件结构搭建

#### 1.2文件目录结构

```
Koa-test
├── README.md
├── package.json
├── src
│   ├── utils // 以下存放公共方法
│   ├── api // 各种API方法
│   │   ├── init.ts
│   │   └── weather.ts
│   ├── schedule // 定时任务
│   │   ├── weatherSchedule // 具体定时任务方法
│   │   └── index.ts // 定时任务入口文件
│   ├── app.ts // Koa配置路由中间件文件
│   └── router.ts // 路由配置文件
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

### 2、启动方式

安装包：

```
yarn
```

启动服务：

```
yarn start
```
