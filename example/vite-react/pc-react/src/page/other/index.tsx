import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import imageMap from "../../assets/imgs/map.png";
import { MenuCard, ScheduleForm, TabPanel, ScheduleInfo } from "./components";
import { useTabUnderline } from "./hooks/useTabUnderline";
import { bgColors, TAB_TYPES, type TabType } from "./const";
import type { RootState, Dispatch } from "../../model/store";

const Other = () => {
  const dispatch = useDispatch<Dispatch>();
  const { menus, scheduleRoutes, loading } = useSelector(
    (state: RootState) => state.other
  );
  const [activeTab, setActiveTab] = useState<TabType>(TAB_TYPES.INFO);
  const { setTabRef, underlineStyle } = useTabUnderline(activeTab);

  // 组件加载时获取数据
  useEffect(() => {
    dispatch.other.fetchMenuData();
    dispatch.other.fetchScheduleRoutes();
  }, [dispatch]);

  return (
    <div className="w-full h-full">
      {/* 顶部统计卡片 */}
      <div className="menu flex gap-[20px] w-full">
        {loading ? (
          <div className="flex-1 text-center p-22px">加载中...</div>
        ) : (
          menus.map((item, index) => (
            <MenuCard key={index} item={item} bgColor={bgColors[index]} />
          ))
        )}
      </div>

      <div className="content mt-24px flex gap-[20px]">
        {/* 左侧表单和地图 */}
        <div className="flex-1 w-full flex flex-col">
          <ScheduleForm />
          <div id="map" className="mt-14px flex-1">
            <img className="w-full h-full" src={imageMap} alt="map" />
          </div>
        </div>

        {/* 右侧操作区 */}
        <div className="w-[calc(25%-20px)] flex-shrink-0 flex flex-col">
          <div className="flex flex-col gap-[20px]">
            <button className="h-62px flex-shrink-0 bg-[#F5F5F5] text-18px border-none cursor-pointer">
              清除输入信息
            </button>
            <button className="h-62px flex-shrink-0 font-900 color-white bg-[#61A7FF] text-18px border-none cursor-pointer">
              开始运行
            </button>
          </div>

          {/* Tab 面板 */}
          <TabPanel
            activeTab={activeTab}
            onTabChange={setActiveTab}
            setTabRef={setTabRef}
            underlineStyle={underlineStyle}
          >
            {activeTab === TAB_TYPES.INFO && (
              <ScheduleInfo routes={scheduleRoutes} />
            )}
            {activeTab === TAB_TYPES.LLM && (
              <div>
                <h5 className="text-[16px] font-medium text-[#3D3D3D] mb-[6px] mt-0">
                  LLM自动调参内容：
                </h5>
                <div className="text-[13px] text-[#666]">
                  <p className="m-0">这里显示LLM自动调参的相关信息...</p>
                </div>
              </div>
            )}
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Other;
