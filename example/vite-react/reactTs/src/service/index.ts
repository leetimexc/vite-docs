import http from "../utils/http";

export function getGradeOptions(): Promise<OptionItem[]> {
  return http({
    url: "/gradeOptions",
    method: "get",
    noAlert: true,
    needRes: true,
  });
}

export function getUserInfo(): Promise<any> {
  return http({
    url: "/mock/userInfo",
    method: "GET",
  });
}
