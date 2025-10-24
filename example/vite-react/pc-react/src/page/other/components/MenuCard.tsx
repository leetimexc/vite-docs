import React from "react";
import type { MenuItem } from "../model/otherModel";

interface MenuCardProps {
  item: MenuItem;
  bgColor: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, bgColor }) => {
  return (
    <div
      className="flex-1 flex flex-col items-center p-22px text-white cursor-pointer hover:shadow-lg transition-shadow text-20px lh-30px"
      style={{ backgroundColor: bgColor, color: "#3D3D3D" }}
    >
      <div className="flex items-center gap-[10px]">
        <img className="w-[20px] h-[20px]" src={item.icon} alt={item.name} />
        <span>{item.name}</span>
      </div>
      <div className="fw-bold mt-20px">
        {item.progress}/{item.total}
      </div>
    </div>
  );
};
