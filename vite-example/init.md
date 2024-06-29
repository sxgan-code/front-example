## 项目创建

```text
PS D:\Note\front-example> cnpm init vue@latest
Need to install the following packages:
create-vue@3.10.4
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vite-example
√ 是否使用 TypeScript 语法？ ... 否 / 是  选是，其他全选否
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否 / 是

正在初始化项目 D:\Note\front-example\vite-example...

项目初始化完成，可执行以下命令：

  cd vite-example
  npm install
  npm run dev

npm notice
npm notice New major version of npm available! 9.9.2 -> 10.8.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.1
npm notice Run npm install -g npm@10.8.1 to update!
npm notice
PS D:\Note\front-example\vite-example>

```

Vue3官方已经默认使用vite创建项目了,使用WebStorm打开

```
npm install
// or
npm i
```

如果慢的话可以安装cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

然后启动

```
npm run dev
```

然后是配置文件[vite.config.ts](vite.config.ts)，该配置文件表示这是一个vite构建的项目

以前使用的是webpack，现在都使用的是vite

Vite官网配置：https://www.vitejs.net/config/

接下来你就可以看官方文档了，关于vue3的还有路由，声明周期都可以慢慢加到这个项目里

## 安装Sass

```shell
cnpm install sass -D
```

## 安装vue-router

vue-router官网：https://next.router.vuejs.org/zh/

```shell
cnpm install vue-router@4
```

编写配置文件[index.ts](src%2Frouter%2Findex.ts)

在[main.ts](src%2Fmain.ts)中使用

```typescript
import router from "@/router";

app.use(router)
```

Vue3生命周期查看官网：https://cn.vuejs.org/guide/essentials/lifecycle.html

Vue3生命周期API查看：https://cn.vuejs.org/api/options-lifecycle.html

element-plus官网：https://element-plus.gitee.io/zh-CN/guide/quickstart.html

axios官网：https://www.axios-http.cn/

pinia官网：https://pinia.web3doc.top/


