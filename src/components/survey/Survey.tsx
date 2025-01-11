import React, { useState, useCallback } from 'react';
import type { FC } from 'react';
import { Paper, Typography, Box, Button, LinearProgress } from '@mui/material';
import type { SurveyDefinition, Question } from '../../types/survey.types';
import { renderQuestion } from './QuestionRegistry';
import { useSurvey } from '../../hooks/useSurvey';

export interface SurveyProps {
  survey: SurveyDefinition;
  onSubmit: (values: Record<string, any>) => void | Promise<void>;
}

export const Survey: FC<SurveyProps> = ({ survey, onSubmit }) => {
  const { values, errors, handleChange, submit } = useSurvey(survey);
  
  // Get flattened questions array
  const questions = survey.sections.flatMap(section => section.questions);
  
  // Track current question index
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  
  // Calculate progress
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  const canGoBack = currentIndex > 0;
  const isLastQuestion = currentIndex === questions.length - 1;
  
  const handleNext = useCallback(() => {
    const currentValue = values[currentQuestion.id];
    const error = errors[currentQuestion.id];
    
    // Don't proceed if required field is empty or has error
    if (currentQuestion.required && (!currentValue || error)) {
      return;
    }
    
    if (isLastQuestion) {
      const result = submit();
      if (result.isValid && onSubmit) {
        onSubmit(result.values);
      }
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [currentQuestion, values, errors, isLastQuestion, submit, onSubmit]);
  
  const handleBack = useCallback(() => {
    if (canGoBack) {
      setCurrentIndex(i => i - 1);
    }
  }, [canGoBack]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {survey.metadata.title}
      </Typography>
      
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ mb: 3, borderRadius: 1 }}
      />
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Question {currentIndex + 1} of {questions.length}
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <Box sx={{ mb: 3 }}>
          {renderQuestion({
            question: currentQuestion,
            value: values[currentQuestion.id],
            onChange: (value) => handleChange(currentQuestion.id, value),
            error: errors[currentQuestion.id],
          })}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={!canGoBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentQuestion.required && !values[currentQuestion.id]}
          >
            {isLastQuestion ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
