import React from 'react';
import { Box, Typography, Paper, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface SurveyEndPageProps {
  title?: string;
  description?: string;
  returnButtonText?: string;
  onReturn?: () => void;
}

export const SurveyEndPage: React.FC<SurveyEndPageProps> = ({
  title = 'Thank You!',
  description = 'Your survey responses have been submitted successfully.',
  returnButtonText = 'Return',
  onReturn
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
                color: theme.palette.success.main,
                filter: `drop-shadow(0 4px 8px ${theme.palette.success.main}40)`,
              }}
            />
            <Typography 
              variant="h3" 
              component="h1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.h3.fontWeight,
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '80%',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
            {returnButtonText && onReturn && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onReturn}
                startIcon={<KeyboardReturnIcon />}
                sx={{
                  minWidth: 200,
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  boxShadow: theme.shadows[2],
                  '&:hover': {
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                {returnButtonText}
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
