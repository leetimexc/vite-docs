import { createModel } from "@rematch/core";
import { RootModel } from "../../../model/models";
import { getUserInfo } from "../../../service";

interface IhomeModelState {}

export const home = createModel<RootModel>()({
  state: {
    useInfo: {},
  } as IhomeModelState, // initial state
  reducers: {
    setUseInfo(state, payload: any = {}) {
      return {
        ...state,
        useInfo: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getUserInfo2() {
      const res = await getUserInfo();
      dispatch.home.setUseInfo(res);
    },
  }),
});
