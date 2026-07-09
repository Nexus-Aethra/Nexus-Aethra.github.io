import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * GitHub Pages 配置：
 * - org/user page 的 base 必须是 "./"（动态相对路径，适配 https://<org>.github.io/）
 * - 我们用 HashRouter（SPA 无需 server fallback），但相对 base 仍是稳妥选择
 *
 * 如以后切换到子路径页面（project page: https://<org>.github.io/<repo>/），把 base 改回
 *   "/<repo>/" 即可。
 */
export default defineConfig({
  base: "./",
  build: {
    sourcemap: false,
    // 切分 chunk：第三方（如 zustand）单独成包，提升缓存复用
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["lucide-react"],
          state: ["zustand"],
        },
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths()
  ],
})
