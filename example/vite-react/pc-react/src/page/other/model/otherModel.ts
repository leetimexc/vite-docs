import { createModel } from "@rematch/core";
import type { RootModel } from "../../../model/models";
import { getMenuData, getScheduleRoutes } from "../../../service/other";

export interface MenuItem {
  icon: string;
  name: string;
  progress: number;
  total: number;
}

export interface ScheduleRoute {
  id: string;
  route: string;
}

interface IOtherModelState {
  menus: MenuItem[];
  scheduleRoutes: ScheduleRoute[];
  loading: boolean;
  error: string | null;
}

export const other = createModel<RootModel>()({
  state: {
    menus: [],
    scheduleRoutes: [],
    loading: false,
    error: null
  } as IOtherModelState,
  reducers: {
    setMenus(state, payload: MenuItem[]) {
      return {
        ...state,
        menus: payload
      };
    },
    setScheduleRoutes(state, payload: ScheduleRoute[]) {
      return {
        ...state,
        scheduleRoutes: payload
      };
    },
    setLoading(state, payload: boolean) {
      return {
        ...state,
        loading: payload
      };
    },
    setError(state, payload: string | null) {
      return {
        ...state,
        error: payload
      };
    },
    updateMenuProgress(state, payload: { index: number; progress: number }) {
      const newMenus = [...state.menus];
      if (newMenus[payload.index]) {
        newMenus[payload.index].progress = payload.progress;
      }
      return {
        ...state,
        menus: newMenus
      };
    }
  },
  effects: (dispatch) => ({
    async fetchMenuData() {
      try {
        dispatch.other.setLoading(true);
        dispatch.other.setError(null);
        const res = await getMenuData();
        dispatch.other.setMenus(res);
      } catch (error: any) {
        dispatch.other.setError(error.message || "获取菜单数据失败");
      } finally {
        dispatch.other.setLoading(false);
      }
    },
    async fetchScheduleRoutes() {
      try {
        const res = await getScheduleRoutes();
        dispatch.other.setScheduleRoutes(res);
      } catch (error: any) {
        console.error("获取调度路径失败:", error);
      }
    }
  })
});
