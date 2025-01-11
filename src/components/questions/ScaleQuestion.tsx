import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { ScaleQuestion as ScaleQuestionType } from '../../types/survey.types';

interface ScaleQuestionProps extends ScaleQuestionType {
  value: number | null;
  onChange: (value: number) => void;
  error?: string;
  previewMode?: boolean;
}

export const ScaleQuestion: React.FC<ScaleQuestionProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  labels = {},
  error,
  previewMode = false,
  ...baseProps
}) => {
  const theme = useTheme();
  const range = Array.from({ length: (max - min) / step + 1 }, (_, i) => min + (i * step));

  return (
    <BaseQuestion {...baseProps} error={error} fullWidth>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
            mb: 2,
          }}
        >
          {range.map((num) => (
            <Box
              key={num}
              onClick={() => !previewMode && onChange(num)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: previewMode ? 'default' : 'pointer',
                flex: 1,
                position: 'relative',
                '&:hover': previewMode ? {} : {
                  '& .scale-button': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[2],
                  },
                },
              }}
            >
              <Box
                className="scale-button"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: value === num ? 'primary.main' : 'background.paper',
                  color: value === num ? 'primary.contrastText' : 'text.primary',
                  border: '1px solid',
                  borderColor: value === num ? 'primary.main' : 'divider',
                  transition: theme.transitions.create(
                    ['background-color', 'border-color', 'transform', 'box-shadow'],
                    { duration: theme.transitions.duration.shorter }
                  ),
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                {num}
              </Box>
              {labels[num] && (
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: value === num ? 'primary.main' : 'text.secondary',
                    fontSize: '0.875rem',
                    maxWidth: 80,
                    transition: theme.transitions.create('color'),
                  }}
                >
                  {labels[num]}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </BaseQuestion>
  );
};
