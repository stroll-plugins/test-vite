import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginInspect from 'vite-plugin-inspect'
import vitePluginTest from './lib'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginTest()]
})
