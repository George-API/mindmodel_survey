import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MindModelSurvey',
      fileName: (format) => `mindmodel-survey.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@mui/icons-material': 'MaterialIcons'
        }
      }
    }
  }
}) 