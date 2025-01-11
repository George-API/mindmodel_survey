import React from 'react';
import { Box } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { ChoiceCard } from './ChoiceCard';
import { MultipleChoiceQuestion as MultipleChoiceQuestionType } from '../../types/survey.types';

interface MultipleChoiceQuestionProps extends MultipleChoiceQuestionType {
  value: string | string[] | null;
  onChange: (value: string | string[]) => void;
  error?: string;
  previewMode?: boolean;
}

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  value,
  onChange,
  options = [],
  choices = [],
  multiple = false,
  error,
  previewMode = false,
  ...baseProps
}) => {
  // Use options if provided, otherwise use choices
  const items = options.length > 0 ? options : choices;

  const handleSelect = (choiceValue: string) => {
    if (multiple) {
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
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5
        }}
      >
        {items.map((item, index) => (
          <ChoiceCard
            key={item.value}
            label={item.label}
            selected={
              multiple
                ? Array.isArray(value) && value.includes(item.value)
                : value === item.value
            }
            onClick={() => !previewMode && handleSelect(item.value)}
            type={multiple ? 'checkbox' : 'radio'}
            index={index}
          />
        ))}
      </Box>
    </BaseQuestion>
  );
};
