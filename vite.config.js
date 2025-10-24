import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true, // 古いキャッシュを削除
      },
      manifest: {
        name: 'My Vite React App',
        short_name: 'MyApp',
        description: 'This is a Vite + React PWA app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pic_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pic_512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pic_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
