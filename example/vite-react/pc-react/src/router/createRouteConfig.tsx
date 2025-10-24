import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import routeConfig from ".";
import type { IRoute } from ".";
import Guard from "./Guard";
import ErrorRouterCom from "./errorRouterCom";
/**
 * 将简单路由配置转化为 react-router-dom 所需要的配置
 * @param routeList
 * @returns
 */
function createRouteConfig(routeList: IRoute[]): RouteObject[] {
  return routeList.map((route) => {
    route.needGuard = route.needGuard === undefined || route.needGuard === true;
    const { component: Component, children, ...rest } = route;

    const routeObject: RouteObject = {
      ...rest,
      element: route.needGuard ? (
        <Guard>
          <Suspense fallback={<p>Loading...</p>}>
            <Component />
          </Suspense>
        </Guard>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <Component />
        </Suspense>
      ),
      errorElement: <ErrorRouterCom />
    };

    if (children) {
      routeObject.children = createRouteConfig(children);
    }

    return routeObject;
  });
}

export const router = createRouteConfig(routeConfig.routes);
