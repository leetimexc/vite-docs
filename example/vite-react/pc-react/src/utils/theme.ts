/**
 * 主题管理工具
 */

// 主题类型
export type ThemeType = "light" | "dark" | "blue" | "green" | "purple";

// 主题配置接口
export interface ThemeConfig {
  key: ThemeType;
  name: string;
  description: string;
}

// 可用主题列表
export const THEME_LIST: ThemeConfig[] = [
  {
    key: "light",
    name: "浅色主题",
    description: "默认浅色主题，适合日间使用"
  },
  {
    key: "dark",
    name: "深色主题",
    description: "深色主题，适合夜间使用，减少眼睛疲劳"
  },
  {
    key: "blue",
    name: "蓝色主题",
    description: "蓝色主题，清新专业"
  },
  {
    key: "green",
    name: "绿色主题",
    description: "绿色主题，自然舒适"
  },
  {
    key: "purple",
    name: "紫色主题",
    description: "紫色主题，高贵优雅"
  }
];

// 默认主题
export const DEFAULT_THEME: ThemeType = "light";

// 本地存储 key
export const THEME_STORAGE_KEY = "app-theme";

/**
 * 获取当前主题
 */
export const getTheme = (): ThemeType => {
  const theme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType;
  return theme && THEME_LIST.some((t) => t.key === theme)
    ? theme
    : DEFAULT_THEME;
};

/**
 * 设置主题
 */
export const setTheme = (theme: ThemeType): void => {
  // 保存到 localStorage
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  // 应用主题到 DOM
  applyTheme(theme);
};

/**
 * 应用主题到 DOM
 */
export const applyTheme = (theme: ThemeType): void => {
  const root = document.documentElement;

  // 移除所有主题类
  THEME_LIST.forEach((t) => {
    if (t.key === "light") {
      root.removeAttribute("data-theme");
    } else {
      root.removeAttribute(`data-theme`);
    }
  });

  // 应用新主题
  if (theme !== "light") {
    root.setAttribute("data-theme", theme);
  }
};

/**
 * 初始化主题
 */
export const initTheme = (): void => {
  const theme = getTheme();
  applyTheme(theme);
};
