#react项目重构
##webpack3.0
```
├── README.md				        //项目描述文件
├── index.html				      //项目主页面入口
├── index.jsx				        //项目主入口
├── package.json			      //配置文件
├── routes					        //项目路由配置文件
├── state					          //项目状态管理文件
├── pages					          //页面文件文件
├── src						          //项目源文件
│   ├── App.jsx				      //源文件主入口
│   ├── components		      //项目组件库
│   │   └── First			      //单个组件库
│   │       ├── First.jsx	  //jsx
│   │       ├── First.scss  //css module
│   │       └── bg.jpg		  //图片文件
│   └── static              //项目静态文件
│       └── favicon.ico		  //网页图标icon
├── webpack.config.js		    //webpack基础配置
└── yarn.lock				        //yarn依赖管理
```
##项目安装依赖
```
npm i（国外资源，比较慢）
cnpm i(淘宝镜像库)
```
##项目启动
```
npm run dev
```
##路由配置
```
./src/routes/Routes.jsx 进行配置
```

##ajax通讯
```
./src/common/http.js 进行拦截器配置
继承Base基类
this.getRespons(url,params)获取数据
```

##项目打包
```
npm run build
```

