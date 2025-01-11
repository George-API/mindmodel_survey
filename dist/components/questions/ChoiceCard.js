import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
export const ChoiceCard = ({ label, selected, onClick, type, index, }) => {
    const theme = useTheme();
    const Icon = type === 'radio' ? RadioButtonCheckedIcon : CheckCircleIcon;
    const keyNumber = index + 1;
    const showNumber = keyNumber <= 9;
    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === keyNumber.toString()) {
                onClick();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [keyNumber, onClick]);
    return (_jsxs(Paper, { onClick: onClick, elevation: 0, sx: {
            p: 2.5,
            mb: 1.5,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid',
            borderColor: selected ? 'primary.main' : theme.palette.divider,
            backgroundColor: selected ? `${theme.palette.primary.main}08` : 'background.paper',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
                'transform'
            ], {
                duration: theme.transitions.duration.shorter,
            }),
            '&:hover': {
                borderColor: selected ? 'primary.main' : theme.palette.primary.light,
                backgroundColor: selected ? `${theme.palette.primary.main}12` : theme.palette.action.hover,
                boxShadow: theme.shadows[1],
                transform: 'translateY(-1px)',
            },
            '&:active': {
                transform: 'translateY(0)',
            },
        }, children: [showNumber && (_jsx(Typography, { variant: "body2", sx: {
                    color: 'text.secondary',
                    opacity: 0.5,
                    minWidth: '24px',
                    mr: 2,
                    fontFamily: theme.typography.fontFamily,
                }, children: keyNumber })), _jsx(Typography, { variant: "body1", sx: {
                    color: selected ? 'primary.main' : 'text.primary',
                    fontWeight: selected ? 500 : 400,
                    flex: 1,
                    transition: theme.transitions.create(['color', 'font-weight']),
                }, children: label }), _jsx(Box, { sx: {
                    opacity: selected ? 1 : 0,
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    transition: theme.transitions.create('opacity'),
                    ml: 2,
                }, children: _jsx(Icon, {}) })] }));
};
