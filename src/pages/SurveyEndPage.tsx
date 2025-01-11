import React from 'react';
import { Box, Typography, Paper, Container, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const SurveyEndPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: 'center',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 64,
              color: theme.palette.primary.main,
              filter: `drop-shadow(0 4px 8px ${theme.palette.primary.main}40)`,
            }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Your survey responses have been submitted successfully.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
