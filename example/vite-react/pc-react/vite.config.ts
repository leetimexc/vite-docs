import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import UnoCSS from "unocss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || "/";
  // 移除前后的斜杠，用于 outDir
  const outDir = basePath.replace(/^\//, "").replace(/\/$/, "") || "dist";

  return {
    base: basePath.endsWith("/") ? basePath : basePath + "/", // 确保以 / 结尾
    build: {
      outDir: outDir // 输出目录
    },
    plugins: [
      UnoCSS(),
      react(),
      viteMockServe({
        mockPath: "mock"
      })
    ],
    server: {
      port: 1074
    }
  };
});
