vite 如何去写一个 SSR 的项目
SSR 就是服务端渲染
先创建一个空的 vite 项目
npm create vite@latest
用 vue 模版
vite-ssr-demo
开发模式 devserver 如何集成服务端渲染
cd vite-ssr-demo
服务端渲染就需要用到 nodejs，先安装一个 node 框架 express
pnpm add express
pnpm dev
浏览器访问 http://localhost:5173/
根目录创建 server.js

修改 dev
scripts: {
"dev": "node server.js",
"build": "vite build",
"serve": "vite preview"
}

```js
server.js;
const express = require("express");
const { createServer as createViteServer } from "vite";

const PORT = 4000;

async function setupServer() {
    const app = express();
    const vite = await createViteServer(
        server: { middlewareMode: true },
        appType: "custom",
    );
    app.use(vite.middlewares);

    app.get("*all", async (req, res) => {

    })

    app.listen(PORT, () => {
        console.log("server start at http://localhost:",PORT);
    })
}

setupServer()
```

创建客户端入口 src/client-entry.js

创建服务端入口 src/server-entry.js

改造 src/main.js

```js
// src/main.js
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return { app };
}
```
