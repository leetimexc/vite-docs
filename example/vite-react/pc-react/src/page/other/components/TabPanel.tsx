import React from "react";
import type { TabType } from "../const";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  tabRef: (el: HTMLButtonElement | null) => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  tabRef,
  children
}) => (
  <button
    ref={tabRef}
    className={`h-[50px] text-[18px] border-none cursor-pointer transition-all bg-transparent ${
      active ? " text-[#61A7FF] font-medium" : " text-[#000]"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

interface TabPanelProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  setTabRef: (key: TabType) => (el: HTMLButtonElement | null) => void;
  underlineStyle: { width: number; left: number };
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  activeTab,
  onTabChange,
  setTabRef,
  underlineStyle,
  children
}) => {
  return (
    <div
      className="mt-14px flex flex-col flex-grow-1"
      style={{ height: "calc(100vh - 400px)" }}
    >
      {/* Tab 头部 */}
      <div className="relative">
        <div className="flex gap-[20px]">
          <TabButton
            active={activeTab === "info"}
            onClick={() => onTabChange("info")}
            tabRef={setTabRef("info")}
          >
            调度信息
          </TabButton>
          <TabButton
            active={activeTab === "llm"}
            onClick={() => onTabChange("llm")}
            tabRef={setTabRef("llm")}
          >
            LLM自动调参
          </TabButton>
        </div>
        {/* 动态下划线 */}
        <div
          className="absolute bottom-0 h-[3px] bg-[#61A7FF] transition-all duration-300 ease-in-out"
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`
          }}
        />
      </div>

      {/* Tab 内容区域 */}
      <div className="flex-1 mt-24px p-[20px] bg-white overflow-auto border-1px border-solid border-[#61A7FF]">
        {children}
      </div>
    </div>
  );
};
