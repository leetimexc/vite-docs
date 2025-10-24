import { useState, useRef, useEffect } from "react";
import "./index.css";
import iconProcess from "../../assets/svgs/icon-process.svg";
import iconNm from "../../assets/svgs/icon-nm.svg";
import iconRmb from "../../assets/svgs/icon-rmb.svg";
import iconNum from "../../assets/svgs/icon-num.svg";
import iconTitle from "../../assets/svgs/icon-title.svg";
import imageMap from "../../assets/imgs/map.png";

const menus = [
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
];

const bgColors = ["#C7F5F5", "#CDE1FD", "#E7D4FF", "#FFD7ED"];

const Other = () => {
  const [activeTab, setActiveTab] = useState<"info" | "llm">("info");
  const infoRef = useRef<HTMLButtonElement>(null);
  const llmRef = useRef<HTMLButtonElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const updateUnderline = () => {
      const activeRef = activeTab === "info" ? infoRef : llmRef;
      if (activeRef.current) {
        const { offsetWidth, offsetLeft } = activeRef.current;
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
      }
    };
    updateUnderline();
  }, [activeTab]);

  return (
    <div className="w-full h-full">
      <div className="menu flex gap-[20px] w-full">
        {menus.map((item, index) => (
          <div
            className={`flex-1 flex flex-col items-center p-22px  text-white cursor-pointer hover:shadow-lg transition-shadow text-20px  lh-30px`}
            key={index}
            style={{ backgroundColor: bgColors[index], color: "#3D3D3D" }}
          >
            <div className="flex items-center gap-[10px]">
              <img className="w-[20px] h-[20px]" src={item.icon} />
              <span className="">{item.name}</span>
            </div>
            <div className="fw-bold mt-20px">
              {item.progress}/{item.total}
            </div>
          </div>
        ))}
      </div>
      <div className="content mt-24px flex gap-[20px]">
        {/* 三个表单卡片 */}
        <div className="flex-1 w-full flex flex-col">
          <div className="gap-[40px] flex border-[#61A7FF] border-solid border-1px p-12px pr-17px pb-15px">
            {/* 调度任务 */}
            <div className="flex-1">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <img className="w-[20px] h-[20px]" src={iconTitle} />
                </div>
                <p className="text-[16px] font-medium text-[#3D3D3D] m-0">
                  调度任务
                </p>
              </div>
              <div className="pl-26px space-y-[12px]">
                <div className="flex items-center">
                  <label className="text-[14px] text-[#666] w-[80px] text-right">
                    出发地：
                  </label>
                  <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
                    <option>请选择集群出发地</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="text-[14px] text-[#666] w-[80px] text-right">
                    需求点：
                  </label>
                  <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
                    <option>请选择需求点</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 海洋环境 */}
            <div className="flex-1">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <img className="w-[20px] h-[20px]" src={iconTitle} />
                </div>
                <p className="text-[16px] font-medium text-[#3D3D3D] m-0">
                  海洋环境
                </p>
              </div>
              <div className="pl-26px space-y-[12px]">
                <div className="flex items-center">
                  <label className="text-[14px] text-[#666] w-[80px] text-right">
                    高海况区：
                  </label>
                  <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
                    <option>请选择区域</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="text-[14px] text-[#666] w-[80px] text-right">
                    级别：
                  </label>
                  <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
                    <option>请选择海况等级</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 无人艇集群 */}
            <div className="flex-1">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <img className="w-[20px] h-[20px]" src={iconTitle} />
                </div>
                <p className="text-[16px] font-medium text-[#3D3D3D] m-0">
                  无人艇集群
                </p>
              </div>
              <div className="pl-26px space-y-[12px]">
                <div className="flex items-center">
                  <label className="text-[14px] text-[#666] w-[80px] text-right">
                    船型：
                  </label>
                  <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
                    <option>请选择船型</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div id="map" className="mt-14px flex-1">
            <img className="w-full h-full" src={imageMap} />
          </div>
        </div>
        <div className="w-[calc(25%-20px)] flex-shrink-0 flex flex-col">
          <div className="flex flex-col gap-[20px]">
            <button className="h-62px flex-shrink-0 bg-[#F5F5F5] text-18px border-none cursor-pointer">
              清除输入信息
            </button>
            <button className="h-62px flex-shrink-0 font-900 color-white bg-[#61A7FF] text-18px border-none cursor-pointer">
              开始运行
            </button>
          </div>
          <div
            className="mt-14px flex flex-col flex-grow-1"
            style={{ height: "calc(100vh - 400px)" }}
          >
            {/* Tab 头部 */}
            <div className="relative">
              <div className="flex gap-[20px]">
                <button
                  ref={infoRef}
                  className={`h-[50px] text-[18px] border-none cursor-pointer transition-all bg-transparent ${
                    activeTab === "info"
                      ? " text-[#61A7FF] font-medium"
                      : " text-[#000]"
                  }`}
                  onClick={() => setActiveTab("info")}
                >
                  调度信息
                </button>
                <button
                  ref={llmRef}
                  className={`h-[50px] text-[18px] border-none cursor-pointer transition-all bg-transparent ${
                    activeTab === "llm"
                      ? " text-[#61A7FF] font-medium"
                      : " text-[#000]"
                  }`}
                  onClick={() => setActiveTab("llm")}
                >
                  LLM自动调参
                </button>
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
              {activeTab === "info" && (
                <div>
                  <h5 className="text-[16px] font-medium text-[#3D3D3D] mb-[6px] mt-0">
                    调度路径：
                  </h5>
                  <div className="text-[13px] text-[#666]">
                    <p className="m-0">太平岛→双黄沙洲→渚碧礁→太平岛(12/16)</p>
                    <p className="m-0">
                      太平岛→西月岛→费信岛→马欢岛→太平岛(13/16)
                    </p>
                    <p className="m-0">
                      太平岛+毕生礁+南华礁→人骏滩→太平岛(16/16)
                    </p>
                    <p className="m-0">
                      太平岛→鸿庑岛+染青沙洲→南薰礁+太平岛(14/16)
                    </p>
                    <p className="m-0">
                      太平岛,西礁,李淮滩→万安滩→太平岛(15/16)
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "llm" && (
                <div>
                  <h5 className="text-[16px] font-medium text-[#3D3D3D] mb-[6px] mt-0">
                    LLM自动调参内容：
                  </h5>
                  <div className="text-[13px] text-[#666]">
                    <p className="m-0">这里显示LLM自动调参的相关信息...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
