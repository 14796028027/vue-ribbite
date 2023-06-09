import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, ElementUiResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
     // ...
     AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        //sacc：1.配置elementPlus采用sass样式配色系统
        ElementPlusResolver({importStyle:'sass'}),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        //sacc：2.自动导入自定义样式文件进行覆盖
        additionalData:`
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/element/var.scss" as *;
        `
        ,
      }
    }
  }
})
