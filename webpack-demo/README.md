# Vue.js Webpack Demo
练习《Vue.js实战》一书上的第10章使用webpack。


## 此项目的构建过程

1. 新建目录：`mkdir webpack-demo`
2. 初始化：`npm init`
3. 安装webpack：`npm install webpack --save-dev`
4. 安装webpack dev server: `npm install webpack-dev-server --save-dev`
5. 创建webpack配置文件: `touch webpack.config.js`
6. 在package.json文件的`scripts`中增加快速启动webpack-dev-server服务的脚本。
7. 新建main.js作为入口的文件：`touch main.js`
8. 配置webpack中最重要的两项：**入口**`entry`和**出口**`output`
9. 创建一个index.html，就可以直接运行服务了。`npm run dev`

> 这里需要注意的是，我在按照上面步骤配置完以后，运行服务的时候报了如下错：`Error: Cannot find module 'webpack-cli/bin/config-yargs'`，
因此我们还需要安装webpack-cli: `npm install webpack-cli --save-dev`


## webpack-dev-server热更新功能

我们可以直接在`main.js`文件通过js代码更新index.html的标签内容，更新后不用刷新浏览器，页面内容就会自动更新。这是因为webpack-dev-server是
通过**建立一个WebSocket连接来实时响应代码的修改**。

## Loader

在webpack的世界里，**每个文件都是一个模块**, 比如css、js、html、jpg、less等。对于不同的模块，需要用不同的加载器(Loader)来处理。实例中使用
了`css-loader`和`style-loader`来通过js动态创建`<style>`标签写入css样式。

## Plugins

插件是webpack强大的功能，并且可以定制。实例中通过使用`mini-css-extract-plugin`将散落在各处的css文件整合在一个文件中，并通过`<link>`标签在
index.html中加载。

> 入口Entry、出口Output、加载器Loaders、插件Plugins是webpack的四大核心概念。

