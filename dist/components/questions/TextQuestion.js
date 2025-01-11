import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextField, Typography, useTheme } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
export const TextQuestion = ({ value, onChange, placeholder, multiline, maxLength, error, ...baseProps }) => {
    const theme = useTheme();
    return (_jsxs(BaseQuestion, { ...baseProps, error: error, children: [_jsx(TextField, { value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, multiline: multiline, minRows: multiline ? 3 : 1, inputProps: {
                    maxLength,
                    style: {
                        padding: theme.spacing(1.5),
                        borderRadius: theme.shape.borderRadius,
                    }
                }, error: !!error, sx: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                        transition: theme.transitions.create(['box-shadow', 'border-color'], {
                            duration: theme.transitions.duration.short,
                        }),
                        '&:hover': {
                            borderColor: 'primary.main',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                        },
                        '&.Mui-focused': {
                            boxShadow: '0 2px 8px rgba(33, 150, 243, 0.15)',
                        },
                    },
                } }), maxLength && (_jsxs(Typography, { variant: "caption", color: "text.secondary", sx: {
                    mt: 0.5,
                    display: 'block',
                    textAlign: 'right',
                    fontSize: '0.75rem',
                }, children: [value?.length || 0, "/", maxLength] }))] }));
};
