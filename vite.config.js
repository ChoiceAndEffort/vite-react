/*
 * @Author: lg
 * @Date: 2023-11-08 08:59:37
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 13:04:18
 * @Description:
 * @FilePath: \vite-react\vite.config.js
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_MODE } = env;
  console.log('启动环境---', env);
  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001/api', //目标url
          changeOrigin: true, //支持跨域
          rewrite: (path) => path.replace(/^\/api/, '')
          //重写路径,替换/api
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.ts', '.json', '.jsx'] // 导入时想要省略的扩展名列表
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },

    plugins: [
      react(),
      VITE_MODE === 'mock' &&
        viteMockServe({
          mockPath: './mock/', //mock文件地址
          // localEnabled: !!process.env.USE_MOCK, // 开发打包开关
          // prodEnabled: !!process.env.USE_CHUNK_MOCK, // 生产打包开关
          localEnabled: true, // 是否应用于本地
          prodEnabled: false, // 是否应用于生产
          logger: false, //是否在控制台显示请求日志
          supportTs: false,
          watchFiles: true // 监视文件更改 这样更改mock的时候，不需要重新启动编译
        })
    ]
  });
};
