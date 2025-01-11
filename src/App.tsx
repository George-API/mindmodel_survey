import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ComponentPreview } from './pages/ComponentPreview';
import { surveyTheme } from './theme/surveyTheme';

function App() {
  return (
    <ThemeProvider theme={surveyTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/preview" element={<ComponentPreview />} />
          <Route path="*" element={<Navigate to="/preview" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
