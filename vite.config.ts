import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
    host: true,
    open: true
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MindModelSurvey',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MuiMaterial',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled',
          '@mui/icons-material': 'MuiIcons'
        }
      }
    }
  }
}) 