import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader({
            svgo: false,
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets:['logo-192.png'],
            manifest: {
                name: 'INVOICIFY',
                short_name: 'INVOICIFY',
                description: 'Simple invoice maker',
                theme_color: '#ffffff',
                icons: [
                  {
                    src: 'logo-192.png',
                    sizes: '192x192',
                    type: 'image/png'
                  },
                  {
                    src: 'invoicify.png',
                    sizes: '512x512',
                    type: 'image/png'
                  }
                ]
              },
            injectRegister:'auto',
            devOptions: {
              enabled: true
            }
          }) 
    ],
    server: {
        host: true
    }
})
