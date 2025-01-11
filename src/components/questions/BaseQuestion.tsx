import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { BaseQuestion as BaseQuestionType } from '../../types/survey.types';

interface BaseQuestionProps extends BaseQuestionType {
  children: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
}

export const BaseQuestion: React.FC<BaseQuestionProps> = ({
  title,
  description,
  required,
  children,
  error,
  fullWidth = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        p: 3,
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 500,
            color: 'text.primary',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {title}
          {required && (
            <Typography
              component="span"
              sx={{
                color: 'error.main',
                ml: 0.5,
                fontSize: '1.25rem',
              }}
            >
              *
            </Typography>
          )}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 1,
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          width: fullWidth ? '100%' : { xs: '100%', sm: '85%', md: '75%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {children}
        {error && (
          <Typography
            variant="body2"
            color="error"
            sx={{
              mt: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
