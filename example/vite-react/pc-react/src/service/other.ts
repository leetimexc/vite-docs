import iconProcess from "../assets/svgs/icon-process.svg";
import iconNm from "../assets/svgs/icon-nm.svg";
import iconRmb from "../assets/svgs/icon-rmb.svg";
import iconNum from "../assets/svgs/icon-num.svg";
import type { MenuItem, ScheduleRoute } from "../page/other/model/otherModel";

// Mock 菜单数据
export const getMenuData = (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          icon: iconProcess,
          name: "任务完成率（%）",
          progress: 10,
          total: 100
        },
        {
          icon: iconNm,
          name: "总里程（NM）",
          progress: 100,
          total: 300
        },
        {
          icon: iconRmb,
          name: "总成本（RMB）",
          progress: 20,
          total: 200
        },
        {
          icon: iconNum,
          name: "调度舰数",
          progress: 10,
          total: 60
        }
      ]);
    }, 300);
  });
};

// Mock 调度路径数据
export const getScheduleRoutes = (): Promise<ScheduleRoute[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", route: "太平岛→双黄沙洲→渚碧礁→太平岛(12/16)" },
        { id: "2", route: "太平岛→西月岛→费信岛→马欢岛→太平岛(13/16)" },
        { id: "3", route: "太平岛+毕生礁+南华礁→人骏滩→太平岛(16/16)" },
        { id: "4", route: "太平岛→鸿庑岛+染青沙洲→南薰礁+太平岛(14/16)" },
        { id: "5", route: "太平岛,西礁,李淮滩→万安滩→太平岛(15/16)" }
      ]);
    }, 300);
  });
};
