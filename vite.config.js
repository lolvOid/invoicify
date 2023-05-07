import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePluginRadar } from 'vite-plugin-radar'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader({
            svgo: false,
        }),
        VitePluginRadar({
            // Google Analytics tag injection
            analytics: [
                {
                    id: 'G-B6XTCBGQRB',
                    consentDefaults: {
                        analytics_storage: 'granted',
                        ad_storage: 'denied',
                        wait_for_update: 500,
                    },
                    persistentValues: {
                        currency: 'USD',
                    },
                },
            ],
        }),
    ],
})
