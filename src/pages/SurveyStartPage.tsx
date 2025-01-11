import React from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface SurveyStartPageProps {
  title?: string;
  description?: string;
  startButtonText?: string;
  onStart: () => void;
  logoUrl?: string;
}

export const SurveyStartPage: React.FC<SurveyStartPageProps> = ({
  title = 'Welcome to the Survey',
  description = 'Please click the button below to begin.',
  startButtonText = 'Start Survey',
  onStart,
  logoUrl
}) => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: '100%',
            textAlign: 'center',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {logoUrl && (
            <Box
              component="img"
              src={logoUrl}
              alt="Survey Logo"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                opacity: 0.9,
              }}
            />
          )}
          <Typography 
            component="h1" 
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              mb: 3,
              fontWeight: theme.typography.h3.fontWeight,
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              maxWidth: '80%',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onStart}
            startIcon={<PlayArrowIcon />}
            sx={{
              minWidth: 200,
              py: 1.5,
              px: 4,
              borderRadius: 2,
              boxShadow: theme.shadows[2],
              '&:hover': {
                boxShadow: theme.shadows[4],
              },
            }}
          >
            {startButtonText}
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default SurveyStartPage; 