import React from "react";
import type { ScheduleRoute } from "../model/otherModel";

interface ScheduleInfoProps {
  routes: ScheduleRoute[];
}

export const ScheduleInfo: React.FC<ScheduleInfoProps> = ({ routes }) => {
  return (
    <div>
      <h5 className="text-[16px] font-medium text-[#3D3D3D] mb-[6px] mt-0">
        调度路径：
      </h5>
      <div className="text-[13px] text-[#666]">
        {routes.map((route) => (
          <p key={route.id} className="m-0">
            {route.route}
          </p>
        ))}
      </div>
    </div>
  );
};
