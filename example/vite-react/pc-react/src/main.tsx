import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "virtual:uno.css"; // UnoCSS
import "./style/index";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./model/store";
import { initTheme } from "./utils/theme.ts";

// 初始化主题
initTheme();

// 自动添加 hash 路由前缀
if (!window.location.hash) {
  const pathname = window.location.pathname;
  const search = window.location.search;
  // 从环境变量获取 base 路径
  const base = (import.meta.env.VITE_BASE_PATH || "/").replace(/\/$/, ""); // 移除末尾斜杠

  // 如果 URL 中没有 hash，则添加 #/
  if (pathname === base || pathname === base + "/") {
    // 如果是 base 路径，直接添加 #/
    window.location.hash = "/";
  } else if (pathname.startsWith(base + "/")) {
    // 如果路径以 base 开头，提取后面的路径转为 hash
    const routePath = pathname.slice(base.length);
    window.location.replace(
      window.location.origin + base + "/#" + routePath + search
    );
  } else {
    // 其他情况，默认添加 #/
    window.location.hash = "/";
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
