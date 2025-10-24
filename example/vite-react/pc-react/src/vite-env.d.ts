/// <reference types="vite/client" />

// 环境变量类型声明
interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  readonly VITE_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// SVG 文件类型声明
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// 图片文件类型声明
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.ico" {
  const content: string;
  export default content;
}
