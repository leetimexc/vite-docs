import  { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import routeConfig from ".";
import type { IRoute } from ".";
/**
 * 将简单路由配置转化为 react-router-dom 所需要的配置
 * @param routeList
 * @returns
 */
function createRouteConfig(routeList: IRoute[]): RouteObject[] {
  return routeList.map((route) => {
    const { component: Component, children, ...rest } = route;

    const routeObject: RouteObject = {
      ...rest,
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Component />
        </Suspense>
      ),
    };

    if (children) {
      routeObject.children = createRouteConfig(children);
    }

    return routeObject;
  });
}

export const router = createRouteConfig(routeConfig.routes);