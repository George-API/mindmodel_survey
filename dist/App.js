import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ComponentPreview } from './pages/ComponentPreview';
import { surveyTheme } from './theme/surveyTheme';
function App() {
    return (_jsxs(ThemeProvider, { theme: surveyTheme, children: [_jsx(CssBaseline, {}), _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/preview", element: _jsx(ComponentPreview, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/preview", replace: true }) })] }) })] }));
}
export default App;
