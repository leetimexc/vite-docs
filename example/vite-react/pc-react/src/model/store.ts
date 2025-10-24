// init: 用于初始化 Rematch store 的函数
// RematchDispatch: 类型，用于定义符合 Rematch 规范的 dispatch 类型
// RematchRootState: 类型，用于生成根状态的类型
import { init } from "@rematch/core";
import type { RematchDispatch, RematchRootState } from "@rematch/core";
// 从 redux-logger 导入日志工具，用于在控制台打印 Redux 状态变化日志
import { createLogger } from "redux-logger";

// 导入应用的模型定义：
// models: 实际的状态模型集合（包含各个模块的 state、reducers、effects 等）
// RootModel: 根模型的类型定义，用于类型推导
import { models } from "./models";
import type { RootModel } from "./models";
// 初始化 Rematch store
export const store = init({
  // 传入应用的状态模型，这些模型定义了应用的所有状态和修改逻辑
  models,
  // Redux 相关配置
  redux: {
    // 配置 Redux 中间件，这里添加了日志中间件
    // createLogger() 会生成一个日志中间件，用于在控制台输出状态变化信息（便于调试）
    middlewares: [createLogger()]
  }
});

// 定义 Store 类型，其类型与初始化后的 store 保持一致
// 用于在需要传入 store 实例的地方提供类型约束
export type Store = typeof store;

// 定义 Dispatch 类型，基于 RootModel 生成符合 Rematch 规范的 dispatch 类型
// 在组件中使用 dispatch 时会获得类型提示和校验
export type Dispatch = RematchDispatch<RootModel>;

// 定义 RootState 类型，基于 RootModel 生成根状态的类型
// 用于在组件中获取状态时提供类型提示（如使用 useSelector 时）
export type RootState = RematchRootState<RootModel>;
