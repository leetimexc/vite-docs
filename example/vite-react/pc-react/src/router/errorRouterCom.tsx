// import React from "react";
/**
 * 路由异常组件，路由中异常时显示
 * @returns
 */
const ErrorRouterCom = () => {
  return (
    <div>
      404
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        {" "}
        点击回到首页
      </button>
    </div>
  );
};

export default ErrorRouterCom;
