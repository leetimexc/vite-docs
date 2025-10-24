import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

export default defineConfig({
  // 预设
  presets: [
    presetUno(), // 默认预设，包含 Tailwind CSS / Windi CSS 的常用工具类
    presetAttributify(), // 属性化模式
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetTypography(), // 排版预设
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono"
      }
    })
  ],

  // 转换器
  transformers: [
    transformerDirectives(), // 支持 @apply、@screen 等指令
    transformerVariantGroup() // 支持变体组简写
  ],

  // 快捷方式
  shortcuts: [
    [
      "btn",
      "px-4 py-2 rounded inline-block bg-primary text-white cursor-pointer hover:bg-primary-dark disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
    ],
    ["flex-center", "flex items-center justify-center"],
    ["flex-col-center", "flex flex-col items-center justify-center"]
  ],

  // 主题
  theme: {
    colors: {
      primary: {
        DEFAULT: "#1890ff",
        light: "#40a9ff",
        dark: "#096dd9"
      }
    }
  }
});
