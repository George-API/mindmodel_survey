import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, Typography, useTheme, } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
export const MatrixQuestion = ({ value = {}, onChange, statements = [], scale = 5, scaleLabels, error, ...baseProps }) => {
    const theme = useTheme();
    const handleChange = (statement, rating) => {
        onChange({ ...value, [statement]: rating });
    };
    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (document.activeElement?.tagName === 'INPUT')
                return;
            const keyNumber = parseInt(event.key);
            if (keyNumber > 0 && keyNumber <= scale) {
                const focusedRow = document.querySelector('tr:hover');
                if (focusedRow) {
                    const statement = focusedRow.getAttribute('data-statement');
                    if (statement) {
                        handleChange(statement, keyNumber);
                    }
                }
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [scale, handleChange]);
    if (!statements || statements.length === 0) {
        return (_jsx(BaseQuestion, { ...baseProps, error: error || 'No statements provided', children: _jsx(Typography, { color: "error", children: "No statements available for this matrix." }) }));
    }
    return (_jsx(BaseQuestion, { ...baseProps, error: error, children: _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { sx: {
                                        width: '40%',
                                        backgroundColor: theme.palette.background.default,
                                        fontWeight: 500,
                                    }, children: "Statement" }), Array.from({ length: scale }, (_, i) => i + 1).map((rating) => (_jsxs(TableCell, { align: "center", sx: {
                                        backgroundColor: theme.palette.background.default,
                                        fontWeight: 500,
                                        minWidth: '80px',
                                    }, children: [rating === 1 && scaleLabels?.start && (_jsx(Typography, { variant: "caption", display: "block", sx: { mb: 0.5, color: 'text.secondary' }, children: scaleLabels.start })), rating, rating === scale && scaleLabels?.end && (_jsx(Typography, { variant: "caption", display: "block", sx: { mt: 0.5, color: 'text.secondary' }, children: scaleLabels.end }))] }, rating)))] }) }), _jsx(TableBody, { children: statements.map((statement, index) => (_jsxs(TableRow, { "data-statement": statement, sx: {
                                '&:nth-of-type(odd)': {
                                    backgroundColor: theme.palette.action.hover,
                                },
                                '&:hover': {
                                    backgroundColor: theme.palette.action.selected,
                                },
                            }, children: [_jsx(TableCell, { component: "th", scope: "row", sx: {
                                        verticalAlign: 'middle',
                                        lineHeight: 1.5,
                                    }, children: statement }), Array.from({ length: scale }, (_, i) => i + 1).map((rating) => (_jsx(TableCell, { align: "center", padding: "none", sx: {
                                        transition: theme.transitions.create('background-color'),
                                    }, children: _jsx(Radio, { checked: value[statement] === rating, onChange: () => handleChange(statement, rating), value: rating, name: `matrix-${index}`, size: "small", sx: {
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover,
                                            },
                                        } }) }, rating)))] }, index))) })] }) }) }));
};
