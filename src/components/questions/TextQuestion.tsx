import React from 'react';
import { TextField, Typography, useTheme } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { TextQuestion as TextQuestionType } from '../../types/survey.types';

interface TextQuestionProps extends TextQuestionType {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  previewMode?: boolean;
}

export const TextQuestion: React.FC<TextQuestionProps> = ({
  value = '',
  onChange,
  placeholder,
  multiline = false,
  rows = 3,
  error,
  previewMode = false,
  ...baseProps
}) => {
  const theme = useTheme();

  return (
    <BaseQuestion {...baseProps} error={error}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => !previewMode && onChange(e.target.value)}
        placeholder={placeholder}
        multiline={multiline}
        minRows={multiline ? rows : 1}
        disabled={previewMode}
        variant="outlined"
        inputProps={{ 
          style: {
            padding: theme.spacing(1.75),
            fontSize: '1rem',
            lineHeight: 1.6,
          }
        }}
        error={!!error}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            transition: theme.transitions.create(
              ['border-color', 'box-shadow', 'background-color'],
              { duration: theme.transitions.duration.shorter }
            ),
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              borderColor: 'primary.light',
            },
            '&.Mui-focused': {
              backgroundColor: 'background.paper',
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}14`,
            },
            '&.Mui-error': {
              boxShadow: `0 0 0 2px ${theme.palette.error.main}14`,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.action.disabledBackground,
              borderColor: theme.palette.action.disabled,
            },
          },
          '& .MuiOutlinedInput-input': {
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 0.7,
            },
          },
        }}
      />
    </BaseQuestion>
  );
};
