
## yo使用方式

    安装generator：   npm install -g "@nfe/generator-sigma" --registry=http://nfe.baidu.com:8881
    安装yoeman：      npm install -g yo
    使用generator:    yo "@nfe/sigma"
    发布generator:    npm publish --registry=http://nfe.baidu.com:8881

## 项目启动

    安装某个组件：npm install @nfe/xxx --registry=http://nfe.baidu.com:8881 --save
    安装全部依赖：npm install --registry=http://nfe.baidu.com:8881

    npm run 查看可以执行的命令

    npm run server 运行本地开发环境，启动webpack-dev-server；默认为mk环境
    npm run server -- --qa 运行测试开发环境，启动webpack-dev-server，为qa环境；与npm run qa -- -dest配合使用
    npm run server -- --ol 运行线上开发环境，启动webpack-dev-server；为ol环境；与npm run ol -- -dest配合使用

    // Server启动端口默认为8257，如果想更改端口，如下即可；不过记得内网允许访问的端口在8000~9000之间
    npm run server -- --port 8258

    npm run qa 运行QA测试环境，打包文件生成在dist目录下
    npm run qa -- --dest 运行QA测试环境，打包HTML页面请求了本机的JS，CSS，IMG资源
    npm run qa -- --dest-cloud 运行QA测试环境，打包HTML页面请求了[QA云端](http://nfe.baidu.com:8040/webpack-dev-server)的JS，CSS，IMG资源

    npm run ol 运行ol线上环境，打包文件生成在dist目录下
    npm run ol -- --dest 运行OL线上环境，打包HTML页面请求了本机的JS，CSS，IMG资源
    npm run ol -- --dest-cloud 运行OL线上环境，打包HTML页面请求了[OL云端](http://nfe.baidu.com:8050/webpack-dev-server)的JS，CSS，IMG资源


三种环境的存在是为了支持NA端项目的开发流程：
1. FE使用mk环境模拟本地mock数据，完成开发；
2. FE使用mk环境配合联调数据，完成与RD的联调（通过修改webpack.proxy.js）；
3. FE联调完成后，打包代码到dist目录下，产出项目代码、ZIP组件包（如：rechargecenter_1.2.8.zip）；FE上传组件包到QA测试环境；
4. FE测试完成后，打包代码到dist目录下，产出项目代码、ZIP组件包（如：rechargecenter_1.2.8.zip）；FE上传组件包到线上环境；

## 组件化生态

组件化代码：http://gitlab.baidu.com/groups/nfe，属于NFE命名空间；

NFE私服npm服务器地址为：http://nfe.baidu.com:8882/；

## 打开页面

    PC端打开页面：http://localhost:8080/webpack-dev-server可以看到webpack加载的所有的页面；

    NA端加载页面：bainuo://component?url=http://ipxxxx:port/page-path就可以看到页面了，注：ip地址不能是localhost哦；

## 项目结构

 - ./dist 产出目录，npm run qa/ol会在这里生成打包内容；
 - ./dist/name_version.zip 打包生成的组件包；
 - ./dist/pack 产出打包内容的文件目录；
 - ./lib 依赖公共库：zepto等非npm开源库
 - ./src 所有源代码均在这里：组件，页面，文档等；
 - ./src/common/components 公用的技术组件；
 - ./src/xxx 具体的某一个项目，如：上门频道，充值；
 - ./src/doc/demo/index.html 工程示例页面；
 - ./src/doc/vcdoc/xxx/index.html 组件示例页面；
 - ./src/config.json 配置webpack扫描哪个文件夹以完成项目页面的加载；
 - ./src/xxx/config.json 配置最终生成的组件包config.json，如：id, https等；
 - ./src/xxx/mock/ajax 配置本地路由的JSON文件，与webpack.proxy.js配合使用；

## 项目工程

本项目采用Webpack+Vue来搭建环境，webpack的启动依赖config/webpack.*.js的配置文件：项目可以不适用vue框架；

1. webpack.config.js 配置了依赖JS库、产出路径、插件等；
2. webpack.env.js 定义了三类环境（MODE_MK、MODE_QA、MODE_OL），可以在浏览器中引用envMode对象；
2. webpack.proxy.js 配置了路由规则，页面所发的请求是本地转发或代理跳转；
3. webpack.pack.js 配置了JS与HTML的关联规则：在page目录下，找到同名的JS,HTML，就会把JS作为entry point，关联到html上，最后产出；
4. webpack.util.js 配置了一些常用到的JS；


## 项目特性

 - 多环境配置

以往开发中，不同环境需要配置不同的Server地址、以及请求不同的本地Mock数据，然后重新打包；在该环境中无需重新打包，兼容全部的环境支持；

 - 动态路由

在Server运行起来后，FE可以修改webpack.proxy.js中的路由规则，采取是：本地JSON模拟，还是请求RD的Server数据；

 - VUE组件化

VUE的公共技术组件放置在了src/pack/common/components目录下，当前已经有组件：频道页的banner、金刚位、豆腐块、POI列表、页签等；

 - DeferredBNJS

BNJS提供的API异步比较多，需要Promise化来提升复杂业务代码的可维护性；

 - 组件打包

要开发的组件包在打包时自动从dev.nuomi.com上获取最新的版本，最终生成：./dist/package_1.2.9.zip的形式；

 - 组件文档化

技术性组件要提高复用性、让别人快速上手，需要提供丰富的DEMO配置示例，目录放置在：./src/page/doc/vcdoc；

 - 多业务工程（不推荐）

多个业务工程使用相同的组件，但出于同一项目下，在./src/page下以不同的目录命名；

 - 组件包配置

组件包中的config.json可以在开发中配置，支持扩展；如：page中支持login，HTTPS等；

 - 开发、测试、线上环境的适配

在本地开发环境下，DeferredBNJS.http.post()的URL如果是localhost:8080的话，在糯米APP端访问会被替换为具体Server的IP地址，如：172.20.204.189:8080，避免报错或者具体IP写入代码中的囧境；

开发者可以通过webpack.config.js中定义的DefinePlugin或者JS脚本的envMode来做灵活的取值；

 - 小Feature

MK环境下自动打开浏览器；HTML页面中对JS,CSS的访问从绝对路径访问改为相对路径访问（依赖于WebpackPluginSigma插件）；

 - 组件仓库管理

各类技术组件能够在npm仓库中管理，并完成版本化、tag化，实现按需引入；

- QA/OL环境下远程调试

执行**npm run qa -- -dest**打包生成QA测试组件包并上传到移动开发平台，执行**npm run server -- --qa**启动QA环境的Server，供手机中的组件包远程访问JS,CSS,IMG等资源，并且可以做到自动刷新；

## Vue 最佳实践

 - vue 组件采用 .vue 形式的文件进行编写，配合 webpack 的 vue-loader 进行使用

 Reference: [vue-loader](http://vue-loader.vuejs.org/en/index.html)
![](https://camo.githubusercontent.com/14e5f4477f49cf0fc0d8f228facb17772a0b1025/687474703a2f2f626c6f672e6576616e796f752e6d652f696d616765732f7675652d636f6d706f6e656e742e706e67 ".vue format")


 - 引用 vue 组件时，采用局部注册方式，即通过在实例选项 components 里注册

Reference: [局部注册](http://vuejs.org.cn/guide/components.html#局部注册)

    var Child = Vue.extend({ /* ... */ })

    var Parent = Vue.extend({
      template: '...',
      components: {
        // <my-component> 只能用在父组件模板内
        'my-component': Child
      }
    })


## 后续规划

 - 暂无

## 当前缺点

 - 由于组件包页面以file协议打开，且相对路径；publicPath中的打包地址以：../../..固定了；意味着页面路径固定位于page/project-dir/function-dir/pagename.html；

 - JS对于依赖的分析，当前使用 lib/base 统一管理了常用的所有，在 webpack.pack.js 中也只能写死成这个了；需要想个办法解决一下；

## DeferredBNJS使用说明

DeferredBNJS是通过使用**$.Deferred**来辅助增强BNJS的Promise化，由于时间问题并未重写Promise来替代**$.Deferred**；如无特殊需求，**默认请使用DeferredBNJS替代BNJS**以提高代码可维护型与可读性！

当前它已经能够替换我们用到的所有BNJS的方法，在了解到BNJS某个API之后，对其如何使用DeferredBNJS仅有以下三种分类：

 - BNJS.page.start()由于该方法古老，请使用BNJS.page.startPageforResult()替代

 - BNJS的API的参数为options对象，属性onSuccess,onFail为函数：

        // HTTP
        DeferredBNJS.http.postNA({
            url:        'xxxx',
            params:     data
        }).then(function(res){
            // 请求成功时回调，如同onSuccess属性
        }, function(res){
            // 请求失败时回调，如同onFail属性
        });

        // localStorage
        DeferredBNJS.localStorage.setItem({
            key:    'DeferredBNJS.keyTest1',
            value:  'DeferredBNJS.valueTest1'
        }).then(function () {
            console.info('DeferredBNJS.localStorage.setItem succeed');
        }, function () {
            console.info('DeferredBNJS.localStorage.setItem error');
        });

        DeferredBNJS.localStorage.getItem({
            key:    'DeferredBNJS.keyTest1'
        }).then(function (res) {
            console.info('DeferredBNJS.localStorage.getItem succeed', res);
        }, function () {
            console.warn('DeferredBNJS.localStorage.getItem error');
        });

        // Login
        DeferredBNJS.account.login({}).then(function (res) {
           console.info('Login succeed');
        }, function () {
           console.warn('Login failed');
        });

 - BNJS的API的参数为callback函数，传递**Function**标识为回调：

        DeferredBNJS.page.getData(Function).then(function(res){
            // 参数回调
        });

 - BNJS的API不涉及回调函数：

        DeferredBNJS.ui.title.setTitle('XXX);

 - BNJS的API的参数为options，options.callback为函数：

         // 对于options.callback的方式
         DeferredBNJS.ui.title.addActionButton({
             tag: '1',
             text: 'Search',
             icon: 'search',
             callback: Function
         }).then(null, null, function(res){
             alert('clicked button: ' + JSON.stringify(res));
         });

##参考文档

 - [组件化文档](http://nfe.baidu.com:8030/webpack-dev-server)

 - [组件化仓库](http://gitlab.baidu.com/groups/nfe)

 - [项目MK环境](http://nfe.baidu.com:8030/webpack-dev-server)

 - [项目QA环境](http://nfe.baidu.com:8040/webpack-dev-server)

 - [项目OL环境](http://nfe.baidu.com:8050/webpack-dev-server)


