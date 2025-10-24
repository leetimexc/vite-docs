import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      {/* 头部 */}
      <header className="layout-header">
        <h1>多岛礁无人艇集群运输调度平台</h1>
      </header>

      {/* 主体区域 */}
      <div className="layout-body">
        {/* 内容区域 - 子路由渲染在这里 */}
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
