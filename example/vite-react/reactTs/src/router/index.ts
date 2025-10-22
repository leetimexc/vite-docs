import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

// 使用交叉类型扩展 RouteObject
export type IRoute = RouteObject & {
  /**
   * 是否是菜单项
   * @default true
   */
  isMenu?: boolean
  /**
   * 生成菜单的姓名
   */
  name: string
  component: ComponentType
  /**
   * 是否触发守卫逻辑
   * @default true
   */
  needGuard?: boolean
  children?: IRoute[]
}

interface IRouteConfig {
  routes: IRoute[]
}

const routeConfig: IRouteConfig = {
  routes: [
    {
      name: 'home',
      path: '/',
      component: lazy(() => import('../page/home')),
    },
    {
      name: 'other',
      path: '/other',
      component: lazy(() => import('../page/other')),
    },
  ],
}

export default routeConfig
