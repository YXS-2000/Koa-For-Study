# Koa框架自行搭建尝试

### 1、搭建过程

在终端输入指令之后直接输入

```
yarn add koa
```

然后自己搭建文件结构，自行搭建路由，自行编写启动指令

其中文件结构是按照前端常见文件结构搭建

### 2、启动方式

安装包：

```
yarn
```

启动服务：

```
yarn start
```

### 3、文件目录

```
Koa-test
├── README.md
├── package.json
├── src
│   ├── api // 各种API方法
│   │   ├── init.ts
│   │   └── weather.ts
│   ├── app.ts // Koa配置路由中间件文件
│   └── router.ts // 路由配置文件
├── tsconfig.json 
├── yarn-error.log
└── yarn.lock
```
