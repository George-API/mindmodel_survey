import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme/surveyTheme';
import { HomePage } from './pages/HomePage';
import { ComponentPreview } from './pages/ComponentPreview';
import { BaselineTestSurvey } from './pages/BaselineTestSurvey';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<ComponentPreview />} />
          <Route path="/test-survey" element={<BaselineTestSurvey />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
