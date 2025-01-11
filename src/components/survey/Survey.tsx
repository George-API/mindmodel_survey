import React, { useState, useCallback } from 'react';
import type { FC } from 'react';
import { Paper, Typography, Box, Button, LinearProgress } from '@mui/material';
import type { SurveyDefinition, Question, QuestionValue } from '../../types/survey.types';
import { renderQuestion } from './QuestionRegistry';
import { validateField } from '../../utils/validation';

export interface SurveyProps {
  survey: SurveyDefinition;
  onSubmit: (values: Record<string, QuestionValue>) => void | Promise<void>;
}

export const Survey: FC<SurveyProps> = ({ survey, onSubmit }) => {
  // Get flattened questions array
  const questions = survey.sections.flatMap(section => section.questions);
  
  // Track current question index and form state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [values, setValues] = useState<Record<string, QuestionValue>>({});
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleChange = useCallback((questionId: string, value: QuestionValue) => {
    setValues(prev => ({ ...prev, [questionId]: value }));
    
    // Validate field
    const question = questions.find(q => q.id === questionId);
    if (question && survey.config.validation?.[questionId]) {
      const fieldErrors = validateField(value, survey.config.validation[questionId]) || [];
      setErrors(prev => ({ ...prev, [questionId]: Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors] }));
    }
  }, [questions, survey.config.validation]);

  const submit = useCallback(async () => {
    // Validate all fields
    const newErrors: Record<string, string[]> = {};
    let hasErrors = false;

    questions.forEach(question => {
      if (survey.config.validation?.[question.id]) {
        const fieldErrors = validateField(values[question.id], survey.config.validation[question.id]) || [];
        const errorArray = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        if (errorArray.length > 0) {
          newErrors[question.id] = errorArray;
          hasErrors = true;
        }
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      await onSubmit(values);
    }
    
    return !hasErrors;
  }, [questions, values, survey.config.validation, onSubmit]);

  const currentQuestion = questions[currentIndex];
  
  // Calculate progress
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  const canGoBack = currentIndex > 0;
  const isLastQuestion = currentIndex === questions.length - 1;
  
  const handleNext = useCallback(async () => {
    const currentValue = values[currentQuestion.id];
    const error = errors[currentQuestion.id];
    
    // Don't proceed if required field is empty or has error
    if (currentQuestion.required && (!currentValue || error?.length)) {
      return;
    }
    
    if (isLastQuestion) {
      const isValid = await submit();
      if (isValid) {
        // Submit already called onSubmit if valid
        return;
      }
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [currentQuestion, values, errors, isLastQuestion, submit]);
  
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

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        {renderQuestion({
          question: currentQuestion,
          value: values[currentQuestion.id],
          onChange: (value) => handleChange(currentQuestion.id, value),
          error: errors[currentQuestion.id]?.[0]
        })}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button 
          onClick={handleBack}
          disabled={!canGoBack}
          variant="outlined"
        >
          Back
        </Button>
        <Button 
          onClick={handleNext}
          variant="contained"
          color={isLastQuestion ? 'primary' : 'primary'}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};
