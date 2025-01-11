import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Tab,
  Tabs,
  useTheme,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Question } from '../types/survey.types';
import { renderQuestion } from '../components/survey/QuestionRegistry';

interface PreviewSection {
  title: string;
  questions: Question[];
}

const previewSections: PreviewSection[] = [
  {
    title: 'Text Questions',
    questions: [
      {
        id: 'simple-text',
        type: 'text',
        title: 'Simple Text Input',
        description: 'A basic single-line text input',
        required: true,
        validation: [
          { type: 'required', message: 'This field is required' }
        ]
      },
      {
        id: 'multiline-text',
        type: 'text',
        title: 'Multiline Text Input',
        description: 'A text area for longer responses',
        multiline: true,
        maxLength: 500
      }
    ]
  },
  {
    title: 'Choice Questions',
    questions: [
      {
        id: 'single-choice',
        type: 'singleChoice',
        title: 'Single Choice Question',
        description: 'Select one option',
        choices: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ],
        allowOther: true
      },
      {
        id: 'multiple-choice',
        type: 'multipleChoice',
        title: 'Multiple Choice Question',
        description: 'Select multiple options',
        choices: [
          { value: 'choice1', label: 'Choice 1' },
          { value: 'choice2', label: 'Choice 2' },
          { value: 'choice3', label: 'Choice 3' }
        ],
        allowMultiple: true
      }
    ]
  },
  {
    title: 'Image Choice Questions',
    questions: [
      {
        id: 'single-image-choice',
        type: 'imageChoice',
        title: 'Single Image Choice',
        description: 'Select one image',
        choices: [
          {
            value: 'image1',
            label: 'Nature',
            imageUrl: 'https://source.unsplash.com/400x300/?nature',
            imageAlt: 'Nature image'
          },
          {
            value: 'image2',
            label: 'Architecture',
            imageUrl: 'https://source.unsplash.com/400x300/?architecture',
            imageAlt: 'Architecture image'
          },
          {
            value: 'image3',
            label: 'Technology',
            imageUrl: 'https://source.unsplash.com/400x300/?technology',
            imageAlt: 'Technology image'
          }
        ],
        imageSize: { height: 200 }
      },
      {
        id: 'multiple-image-choice',
        type: 'imageChoice',
        title: 'Multiple Image Choice',
        description: 'Select multiple images',
        allowMultiple: true,
        layout: 'horizontal',
        choices: [
          {
            value: 'image4',
            label: 'Food',
            imageUrl: 'https://source.unsplash.com/400x300/?food',
            imageAlt: 'Food image'
          },
          {
            value: 'image5',
            label: 'Travel',
            imageUrl: 'https://source.unsplash.com/400x300/?travel',
            imageAlt: 'Travel image'
          },
          {
            value: 'image6',
            label: 'Sports',
            imageUrl: 'https://source.unsplash.com/400x300/?sports',
            imageAlt: 'Sports image'
          }
        ]
      }
    ]
  },
  {
    title: 'Scale Questions',
    questions: [
      {
        id: 'scale-question',
        type: 'scale',
        title: 'How likely are you to recommend us?',
        description: 'Please rate your likelihood to recommend our service to others',
        scale: 7,
        leftLabel: 'Not at all',
        rightLabel: 'Extremely likely'
      }
    ]
  },
  {
    title: 'Date Questions',
    questions: [
      {
        id: 'simple-date',
        type: 'date',
        title: 'Select a Date',
        description: 'Choose any date'
      },
      {
        id: 'future-date',
        type: 'date',
        title: 'Future Date Only',
        description: 'Choose a date in the future',
        disablePast: true
      }
    ]
  }
];

// Create a flattened list of all questions for the survey preview
const allQuestions = previewSections.flatMap(section => section.questions);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const ComponentPreview: React.FC = () => {
  const theme = useTheme();
  const [values, setValues] = useState<Record<string, any>>({});
  const [currentTab, setCurrentTab] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showEndPage, setShowEndPage] = useState(false);

  const handleChange = (questionId: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [questionId]: value
    }));
    console.log('Question:', questionId, 'Value:', value);
  };

  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Here you can add logic to process the survey responses
    console.log('Survey submitted:', values);
    setShowEndPage(true);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey && document.activeElement?.tagName !== 'TEXTAREA') {
        event.preventDefault();
        if (currentQuestionIndex === allQuestions.length - 1) {
          handleSubmit();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestionIndex]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Survey Component Preview
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        This page showcases all available question types with different configurations.
        Try interacting with the components to see how they work.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={currentTab}
          onChange={(_, newValue) => {
            setCurrentTab(newValue);
            if (newValue === 1) { // Reset question index when switching to survey preview
              setCurrentQuestionIndex(0);
            }
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Component Library" />
          <Tab label="Survey Preview" />
        </Tabs>
      </Box>

      <TabPanel value={currentTab} index={0}>
        {previewSections.map((section, index) => (
          <Paper
            key={section.title}
            elevation={0}
            sx={{ p: 3, mb: 3, border: `1px solid ${theme.palette.divider}` }}
          >
            <Typography variant="h5" gutterBottom>
              {section.title}
            </Typography>
            <Divider sx={{ my: 2 }} />
            {section.questions.map(question => (
              <Box key={question.id} sx={{ mb: 4 }}>
                {renderQuestion({
                  question,
                  value: values[question.id],
                  onChange: (value) => handleChange(question.id, value),
                  previewMode: true,
                })}
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 1,
                    p: 1,
                    backgroundColor: 'action.hover',
                    borderRadius: 1,
                    fontFamily: 'monospace'
                  }}
                >
                  Current Value: {JSON.stringify(values[question.id], null, 2)}
                </Typography>
              </Box>
            ))}
          </Paper>
        ))}
      </TabPanel>

      <TabPanel value={currentTab} index={1}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            maxWidth: 800,
            mx: 'auto',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <Box sx={{ mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={showEndPage ? 100 : (currentQuestionIndex / (allQuestions.length - 1)) * 100}
              sx={{ mb: 2, borderRadius: 1 }}
            />
            {!showEndPage && (
              <Typography variant="body2" color="text.secondary" align="center">
                Question {currentQuestionIndex + 1} of {allQuestions.length}
              </Typography>
            )}
          </Box>

          <Box sx={{ minHeight: 300 }}>
            {!showEndPage ? (
              renderQuestion({
                question: allQuestions[currentQuestionIndex],
                value: values[allQuestions[currentQuestionIndex].id],
                onChange: (value) => handleChange(allQuestions[currentQuestionIndex].id, value),
                previewMode: true,
              })
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  py: 4,
                }}
              >
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                  Thank You!
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                  Your survey responses have been submitted successfully.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    setShowEndPage(false);
                    setCurrentQuestionIndex(0);
                    setValues({});
                    setCurrentTab(0);
                  }}
                  sx={{
                    mt: 2,
                    bgcolor: theme.palette.primary.main,
                    boxShadow: `0 4px 14px ${theme.palette.primary.main}40`,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                      boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                    }
                  }}
                >
                  Return to Dashboard
                </Button>
              </Box>
            )}
          </Box>

          {!showEndPage && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
                pt: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Button
                variant="outlined"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              {currentQuestionIndex === allQuestions.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    boxShadow: `0 4px 14px ${theme.palette.primary.main}40`,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                      boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                    }
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<KeyboardReturnIcon />}
                >
                  Next
                </Button>
              )}
            </Box>
          )}
        </Paper>
      </TabPanel>
    </Container>
  );
};
