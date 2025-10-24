import React from "react";
import iconTitle from "../../../assets/svgs/icon-title.svg";

interface FormFieldProps {
  label: string;
  placeholder: string;
  options?: string[];
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder }) => (
  <div className="flex items-center">
    <label className="text-[14px] text-[#666] w-[80px] text-right">
      {label}：
    </label>
    <select className="flex-1 h-[32px] px-[12px] border border-[#E5E5E5] text-[14px] text-[#999] outline-none">
      <option>{placeholder}</option>
    </select>
  </div>
);

interface FormSectionProps {
  title: string;
  fields: FormFieldProps[];
}

const FormSection: React.FC<FormSectionProps> = ({ title, fields }) => (
  <div className="flex-1">
    <div className="flex items-center gap-[8px] mb-[16px]">
      <div className="w-[20px] h-[20px] flex items-center justify-center">
        <img className="w-[20px] h-[20px]" src={iconTitle} alt="" />
      </div>
      <p className="text-[16px] font-medium text-[#3D3D3D] m-0">{title}</p>
    </div>
    <div className="pl-26px space-y-[12px]">
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </div>
  </div>
);

export const ScheduleForm: React.FC = () => {
  const formSections = [
    {
      title: "调度任务",
      fields: [
        { label: "出发地", placeholder: "请选择集群出发地" },
        { label: "需求点", placeholder: "请选择需求点" }
      ]
    },
    {
      title: "海洋环境",
      fields: [
        { label: "高海况区", placeholder: "请选择区域" },
        { label: "级别", placeholder: "请选择海况等级" }
      ]
    },
    {
      title: "无人艇集群",
      fields: [{ label: "船型", placeholder: "请选择船型" }]
    }
  ];

  return (
    <div className="gap-[40px] flex border-[#61A7FF] border-solid border-1px p-12px pr-17px pb-15px">
      {formSections.map((section, index) => (
        <FormSection key={index} {...section} />
      ))}
    </div>
  );
};
