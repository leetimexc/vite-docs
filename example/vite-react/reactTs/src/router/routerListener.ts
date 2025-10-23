import type { Location } from "@remix-run/router";
import type { NavigateFunction } from "react-router-dom";

/**
 * 全局路由监听
 * * notice: 暂时仅支持同步逻辑，异步逻辑会闪屏，如果想实现异步的话建议封装高阶组件
 * @param next 满足某些条件时支持跳转到指定页面
 * @param to 跳转目标页路由信息
 * @param from 发起跳转页路由信息
 */
const routerListener = (
  next: NavigateFunction,
  to: Location,
  from?: Location
) => {
  console.log("next", next, "from", from, "to", to);

  // 逻辑处理
  // 权限控制
  // 权限控制
  // 数据获取与加载控制
  // 导航控制埋点
  // ......
};

export default routerListener;
