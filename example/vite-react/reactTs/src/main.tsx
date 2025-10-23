import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./style/index.css";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./model/store";

// 自动添加 hash 路由前缀
if (!window.location.hash) {
  const pathname = window.location.pathname;
  const search = window.location.search;
  // 如果 URL 中没有 hash，则将 pathname 转换为 hash 路由
  if (pathname && pathname !== "/") {
    // 保留原有路径信息，例如 /other 转换为 #/other
    window.location.replace(window.location.origin + "/#" + pathname + search);
  } else {
    // 默认添加 #/
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
