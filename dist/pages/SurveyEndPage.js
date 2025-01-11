import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Paper, Container, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export const SurveyEndPage = () => {
    const theme = useTheme();
    return (_jsx(Container, { maxWidth: "sm", sx: { py: 8 }, children: _jsx(Paper, { elevation: 0, sx: {
                p: 4,
                textAlign: 'center',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
            }, children: _jsxs(Box, { sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }, children: [_jsx(CheckCircleOutlineIcon, { sx: {
                            fontSize: 64,
                            color: theme.palette.primary.main,
                            filter: `drop-shadow(0 4px 8px ${theme.palette.primary.main}40)`,
                        } }), _jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: "Thank You!" }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: "Your survey responses have been submitted successfully." })] }) }) }));
};
