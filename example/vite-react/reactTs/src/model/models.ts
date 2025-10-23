import type { Models } from "@rematch/core";
import { home } from "../page/home/model/homeModel";

// RootModel接口定义了整个应用的状态模型类型规范；
export interface RootModel extends Models<RootModel> {
  home: typeof home;
}

// models对象是实际存放各个业务模块状态类型的容器；
export const models: RootModel = {
  home,
};
