import type { ComponentType } from "react";
import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../page/notFound/index";
import Layout from "../components/Layout";

// 使用交叉类型扩展 RouteObject
export type IRoute = RouteObject & {
  /**
   * 是否是菜单项
   * @default true
   */
  isMenu?: boolean;
  /**
   * 生成菜单的姓名
   */
  name: string;
  component: ComponentType;
  /**
   * 是否触发守卫逻辑
   * @default true
   */
  needGuard?: boolean;
  children?: IRoute[];
};

interface IRouteConfig {
  routes: IRoute[];
}

const routeConfig: IRouteConfig = {
  routes: [
    {
      name: "layout",
      path: "/",
      component: Layout,
      needGuard: false, // Layout 本身不需要守卫
      isMenu: false,
      children: [
        // {
        //   name: "home",
        //   path: "/",
        //   component: lazy(() => import("../page/home/index"))
        // },
        {
          name: "other",
          path: "/",
          component: lazy(() => import("../page/other/index"))
        }
      ]
    },
    {
      name: "404",
      path: "/*",
      component: NotFound,
      isMenu: false,
      needGuard: false
    }
  ]
};

export default routeConfig;
