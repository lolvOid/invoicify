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
                ],
                start_url:"/",
                display:"portrait",
                background_color:"#ffffff",
                lang:"en",
                display_override:"standalone",
                share_target:{
                    action:"create",
                    params:{
                        title:"INVOICIFY",
                        url:"/"
                    }
                },
                categories:"Productivity",
                
                shortcuts:{
                    name: 'INVOICIFY',
                    short_name: 'INVOICIFY',
                    description: 'Simple invoice maker',
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
                      ],
                      url:"/"
                }
              },
            injectRegister:'auto',
            devOptions: {
              enabled: true
            },
            workbox: {
                cleanupOutdatedCaches: false
            },
            
          }) 
    ],
    server: {
        host: true
    }
})
