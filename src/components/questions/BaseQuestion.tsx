import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { BaseQuestion as BaseQuestionType } from '../../types/survey.types';

interface BaseQuestionProps extends BaseQuestionType {
  children: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
}

export const BaseQuestion: React.FC<BaseQuestionProps> = ({
  label,
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
          mb: description ? 3 : 2,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom={false}
          sx={{
            fontWeight: 500,
            color: error ? 'error.main' : 'text.primary',
            fontSize: '1.25rem',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            transition: theme.transitions.create('color'),
          }}
        >
          {label}
          {required && (
            <Typography
              component="span"
              sx={{
                color: error ? 'error.main' : 'error.light',
                ml: 0.5,
                fontSize: '1.1rem',
                transition: theme.transitions.create('color'),
              }}
            >
              *
            </Typography>
          )}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            color={error ? 'error.main' : 'text.secondary'}
            sx={{
              mt: 1,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              opacity: 0.9,
              transition: theme.transitions.create(['color', 'opacity']),
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
              mt: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            <ErrorOutlineIcon sx={{ fontSize: '1.1rem' }} />
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
