import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, useTheme } from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ImageChoiceQuestion as ImageChoiceQuestionType } from '../../types/survey.types';

interface ImageChoiceQuestionProps extends ImageChoiceQuestionType {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  error?: string;
}

export const ImageChoiceQuestion: React.FC<ImageChoiceQuestionProps> = ({
  choices,
  value,
  onChange,
  allowMultiple,
  error,
}) => {
  const theme = useTheme();
  const values = Array.isArray(value) ? value : value ? [value] : [];

  const handleClick = (clickedValue: string) => {
    if (allowMultiple) {
      const newValues = values.includes(clickedValue)
        ? values.filter(v => v !== clickedValue)
        : [...values, clickedValue];
      onChange(newValues);
    } else {
      onChange(clickedValue === value ? null : clickedValue);
    }
  };

  return (
    <BaseQuestion
      error={error}
      fullWidth={true}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 2,
          width: '100%',
          mt: 2,
        }}
      >
        {choices.map(choice => {
          const isSelected = values.includes(choice.value);
          return (
            <Box
              key={choice.value}
              onClick={() => handleClick(choice.value)}
              sx={{
                position: 'relative',
                aspectRatio: '1',
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                border: '2px solid',
                borderColor: isSelected ? 'primary.main' : theme.palette.divider,
                transition: theme.transitions.create([
                  'transform',
                  'border-color',
                  'box-shadow'
                ], {
                  duration: theme.transitions.duration.shorter,
                }),
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: isSelected 
                    ? 'primary.main' 
                    : theme.palette.primary.light,
                  boxShadow: theme.shadows[4],
                },
                '&:active': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[2],
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: isSelected 
                    ? `${theme.palette.primary.main}14` 
                    : 'transparent',
                  transition: theme.transitions.create('background-color'),
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={choice.imageUrl}
                alt={choice.imageAlt || choice.label}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1.5,
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  transition: theme.transitions.create('background-color'),
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    fontWeight: isSelected ? 600 : 400,
                  }}
                >
                  {choice.label}
                </Typography>
              </Box>
              {isSelected && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: theme.shadows[2],
                    zIndex: 2,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16 }} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </BaseQuestion>
  );
};
