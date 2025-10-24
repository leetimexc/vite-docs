import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
axiosRetry(axios, { retries: 3 });

// 取到对应的环境变量url
export const baseURL = import.meta.env.VITE_BASE_API;

// 定义一个枚举code
const ResCode = {
  notLogin: 1001,
  notPower: 1002
  // ... 其他状态码
} as const;

// 自定义配置
interface IAxiosParam extends AxiosRequestConfig<any> {
  /**
   * 接口是否需要完整的res，默认不需要，直接返回res.data
   */
  needRes?: boolean;
  /**
   * 接口异常时是否进行统一拦截提示
   */
  noAlert?: boolean;
}

// 定义一个接口类型
export interface IResponse<T = any> {
  code?: number;
  data?: T;
  msg?: string;
}

// 创建一个axios实例
const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true // 浏览器是否应该发送凭据（如 cookies、授权头等）到跨域请求的服务器
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // const token = getToken(); // 自定义获取token
    // if (config?.headers && token) {
    //   config.headers["Authorization"] = token || "";
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 将方法封装成一个函数
const http = async (config: IAxiosParam): Promise<any> => {
  return request(config)
    .then((res: IResponse) => {
      switch (res.code) {
        case ResCode.notLogin:
          // 未登录
          // window.location.href = '/login';
          break;
        case ResCode.notPower:
          // 无权限
          // window.location.href = '/403';
          break;
      }

      if (res.code !== 0 && !config.noAlert) {
        // 异常提示
        alert(res.msg || "出现问题啦~");
        return;
      }
      return config.needRes ? res : res.data;
    })
    .catch((res) => {
      return Promise.reject(res);
    });
};

export default http;
