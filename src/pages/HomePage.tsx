import React from 'react';
import { Box, Card, CardContent, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          MindModel Survey Library
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Development & Testing Environment
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        <Card sx={{ minWidth: 275, flex: 1 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Component Preview
            </Typography>
            <Typography color="text.secondary" paragraph>
              Preview and test individual survey components. View the component library and test survey configurations.
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => navigate('/preview')}
              fullWidth
            >
              Open Preview
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, flex: 1 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Baseline Test Survey
            </Typography>
            <Typography color="text.secondary" paragraph>
              Complete test implementation of a survey using createSurvey. Tests all features and configurations.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => navigate('/test-survey')}
              fullWidth
            >
              Start Test Survey
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}; 