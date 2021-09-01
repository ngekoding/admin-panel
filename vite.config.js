import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/admin-panel/' : '/',
    plugins: [
      vue(),
      ViteComponents({
        dirs: ['./src/components'],
        customComponentResolvers: [
          // Heroicons
          // 'S' for solid & 'O' for outline
          (name) => {
            if (name.endsWith('IconS') || name.endsWith('IconO')) {
              const type = name.endsWith('IconS') ? 'solid' : 'outline'
              return { 
                importName: name.slice(0, -1),
                path: `@heroicons/vue/${type}` 
              }
            }
          }
        ]
      })
    ],
    resolve: {
      alias: [
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js'
        },
        { 
          find: '@', 
          replacement: path.resolve(__dirname, './src')
        }
      ]
    },
    server: {
      port: 3000
    },
    build: {
      rollupOptions: {
        plugins: [visualizer()]
      }
    }
  }
})
