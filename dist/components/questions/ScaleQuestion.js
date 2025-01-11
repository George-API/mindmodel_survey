import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, useTheme } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
export const ScaleQuestion = ({ value, onChange, scale = 7, leftLabel, rightLabel, error, previewMode = false, ...baseProps }) => {
    const theme = useTheme();
    // Calculate dynamic widths based on scale and mode
    const labelWidth = `${Math.max(20, Math.min(30, 100 / scale))}%`;
    const scaleWidth = `${Math.min(80, 100 - (2 * parseInt(labelWidth)))}%`;
    return (_jsx(BaseQuestion, { title: baseProps.title, description: baseProps.description, required: baseProps.required, error: error, fullWidth: true, children: _jsx(Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                mt: 2,
            }, children: _jsxs(Box, { sx: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    width: '100%',
                    mb: 3,
                }, children: [_jsx(Typography, { variant: "body1", sx: {
                            color: 'text.secondary',
                            width: labelWidth,
                            textAlign: 'right',
                            pr: 2,
                            pt: 1,
                        }, children: leftLabel }), _jsx(Box, { sx: {
                            display: 'grid',
                            gridTemplateColumns: `repeat(${scale}, minmax(0, 1fr))`,
                            gap: previewMode ? 2 : 1.5,
                            width: scaleWidth,
                        }, children: Array.from({ length: scale }, (_, i) => i + 1).map((rating) => {
                            const isSelected = value === rating;
                            return (_jsx(Box, { onClick: () => onChange(rating), sx: {
                                    position: 'relative',
                                    aspectRatio: '1',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    borderRadius: 1.5,
                                    border: '2px solid',
                                    borderColor: isSelected ? 'primary.main' : theme.palette.divider,
                                    backgroundColor: isSelected
                                        ? `${theme.palette.primary.main}08`
                                        : 'background.paper',
                                    transform: 'translateY(0)',
                                    transition: theme.transitions.create([
                                        'transform',
                                        'border-color',
                                        'background-color',
                                        'box-shadow'
                                    ], {
                                        duration: theme.transitions.duration.shorter,
                                    }),
                                    '&:hover': {
                                        borderColor: isSelected
                                            ? 'primary.main'
                                            : theme.palette.primary.light,
                                        backgroundColor: isSelected
                                            ? `${theme.palette.primary.main}12`
                                            : theme.palette.action.hover,
                                        transform: 'translateY(-4px)',
                                        boxShadow: theme.shadows[2],
                                    },
                                    '&:active': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: theme.shadows[1],
                                    },
                                    minWidth: previewMode ? 56 : 40,
                                    minHeight: previewMode ? 56 : 40,
                                }, children: _jsx(Typography, { variant: previewMode ? "h6" : "body1", sx: {
                                        color: isSelected ? 'primary.main' : 'text.primary',
                                        fontWeight: isSelected ? 600 : 400,
                                        transition: theme.transitions.create(['color', 'font-weight']),
                                    }, children: rating }) }, rating));
                        }) }), _jsx(Typography, { variant: "body1", sx: {
                            color: 'text.secondary',
                            width: labelWidth,
                            textAlign: 'left',
                            pl: 2,
                            pt: 1,
                        }, children: rightLabel })] }) }) }));
};
