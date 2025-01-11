import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { ChoiceCard } from './ChoiceCard';
export const MultipleChoiceQuestion = ({ value, onChange, choices = [], allowMultiple = false, allowOther = false, error, ...baseProps }) => {
    const handleSelect = (choiceValue) => {
        if (allowMultiple) {
            const currentValue = Array.isArray(value) ? value : [];
            const newValue = currentValue.includes(choiceValue)
                ? currentValue.filter(v => v !== choiceValue)
                : [...currentValue, choiceValue];
            onChange(newValue);
        }
        else {
            onChange(choiceValue);
        }
    };
    return (_jsx(BaseQuestion, { ...baseProps, error: error, fullWidth: false, children: _jsx(Box, { sx: {
                width: '100%',
            }, children: choices.map((choice, index) => (_jsx(ChoiceCard, { label: choice.label, selected: allowMultiple
                    ? Array.isArray(value) && value.includes(choice.value)
                    : value === choice.value, onClick: () => handleSelect(choice.value), type: allowMultiple ? 'checkbox' : 'radio', index: index }, choice.value))) }) }));
};
