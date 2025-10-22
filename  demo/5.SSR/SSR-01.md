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
import express from "express";
import fs from 'node:fs/promises';
import { createServer as createViteServer } from "vite";

const PORT = 4000;

async function setupServer() {
    const app = express();
    const vite = await createViteServer(
        server: { middlewareMode: true },
        appType: "custom",
    );
    app.use(vite.middlewares);

    app.get("*all", async (req, res) => {
        // const url = req.originalUrl;
        try {
            // const { html } = await vite.transformIndexHtml(url, fs.readFile)
            const temp = await fs.readFile("./index.html", "utf-8");
            temp = await vite.transformIndexHtml(req.url, temp);

            const { render } = await vite.ssrLoadModule('/src/server-entry.js')
            const renderRes = await render(req.url)
            const html = renderRes && renderRes.html?renderRes.html:'';

            const resHtml = temp.replace('<!-- APP_HTML -->', html)
            resHtml.set('Content-Type', 'text/html').send(resHtml)
        } catch (error) {
            vite.ssrFixStacktrace(error)
            console.error(error)
            res.status(500).send("Internal Server Error")
        }
    })

    app.listen(PORT, () => {
        console.log("server start at http://localhost:",PORT);
    })
}

setupServer()
```

创建客户端入口 src/client-entry.js

```js
import "./style.css";
import { createApp } from "./createApp.js";

const app = createApp();
app.mount("#app");
```

创建服务端入口 src/server-entry.js

```js
import { renderToString } from "vue/server-renderer";
import { createApp } from "./createApp.js";

export async function render(_url) {
  const app = createApp();

  const ctx = {};
  const html = await renderToString(app, ctx);

  return {
    html,
  };
}
```

创建应用入口 src/createApp.js

```js
// src/createApp.js
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  return createSSRApp(App);
}
```

替换根目录下的 index.html 文件

```
<body>
    <div id="app"><!-- APP_HTML --></div>
    <script type="module" src="/src/client-entry.js"></script>
</body>
```
