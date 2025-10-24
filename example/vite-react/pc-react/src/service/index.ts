import http from "../utils/http";

// 定义 OptionItem 类型
interface OptionItem {
  label: string;
  value: string | number;
}

export function getGradeOptions(): Promise<OptionItem[]> {
  return http({
    url: "/gradeOptions",
    method: "get",
    noAlert: true,
    needRes: true
  });
}

export function getUserInfo(): Promise<any> {
  return http({
    url: "/mock/userInfo",
    method: "GET"
  });
}
