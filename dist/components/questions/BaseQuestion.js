import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, useTheme } from '@mui/material';
export const BaseQuestion = ({ title, description, required, children, error, fullWidth = false, }) => {
    const theme = useTheme();
    return (_jsxs(Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            p: 3,
            mb: 2,
        }, children: [_jsxs(Box, { sx: {
                    width: '100%',
                    mb: 3,
                }, children: [_jsxs(Typography, { variant: "h5", component: "h2", gutterBottom: true, sx: {
                            fontWeight: 500,
                            color: 'text.primary',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }, children: [title, required && (_jsx(Typography, { component: "span", sx: {
                                    color: 'error.main',
                                    ml: 0.5,
                                    fontSize: '1.25rem',
                                }, children: "*" }))] }), description && (_jsx(Typography, { variant: "body1", color: "text.secondary", sx: {
                            mt: 1,
                            fontSize: '1rem',
                            lineHeight: 1.6,
                        }, children: description }))] }), _jsxs(Box, { sx: {
                    width: fullWidth ? '100%' : { xs: '100%', sm: '85%', md: '75%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }, children: [children, error && (_jsx(Typography, { variant: "body2", color: "error", sx: {
                            mt: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }, children: error }))] })] }));
};
