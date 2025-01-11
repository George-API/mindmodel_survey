import React from 'react';
import { Box } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { ChoiceCard } from './ChoiceCard';
import { MultipleChoiceQuestion as MultipleChoiceQuestionType } from '../../types/survey.types';

interface MultipleChoiceQuestionProps extends MultipleChoiceQuestionType {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  error?: string;
}

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  value,
  onChange,
  choices = [],
  allowMultiple = false,
  allowOther = false,
  error,
  ...baseProps
}) => {
  const handleSelect = (choiceValue: string) => {
    if (allowMultiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(choiceValue)
        ? currentValue.filter(v => v !== choiceValue)
        : [...currentValue, choiceValue];
      onChange(newValue);
    } else {
      onChange(choiceValue);
    }
  };

  return (
    <BaseQuestion
      {...baseProps}
      error={error}
      fullWidth={false}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        {choices.map((choice, index) => (
          <ChoiceCard
            key={choice.value}
            label={choice.label}
            selected={
              allowMultiple
                ? Array.isArray(value) && value.includes(choice.value)
                : value === choice.value
            }
            onClick={() => handleSelect(choice.value)}
            type={allowMultiple ? 'checkbox' : 'radio'}
            index={index}
          />
        ))}
      </Box>
    </BaseQuestion>
  );
};
