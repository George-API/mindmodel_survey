import React from 'react';
import { Box, Paper } from '@mui/material';
import { SurveyProps } from '../types/survey.types';
import { renderQuestion } from './survey/QuestionRegistry';
import { useSurvey } from '../hooks/useSurvey';

export const Survey: React.FC<SurveyProps> = ({
  questions,
  config,
  onSubmit,
  onQuestionChange,
  onComplete
}) => {
  const {
    currentQuestion,
    currentAnswer,
    handleAnswer,
    handleNext,
    handleBack,
    handleSubmit,
    isComplete,
    progress,
  } = useSurvey(questions, config, { onSubmit, onQuestionChange, onComplete });

  const {
    theme = {},
    navigation = {},
  } = config;

  const {
    containerWidth = '800px',
    containerHeight = '600px',
    backgroundColor = '#f5f5f5',
  } = theme;

  if (isComplete) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: backgroundColor,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: containerWidth,
            height: containerHeight,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <h2>Survey Complete</h2>
            <p>Thank you for completing the survey!</p>
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: backgroundColor,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: containerWidth,
          height: containerHeight,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {currentQuestion && (
          <>
            {navigation.showProgressBar && (
              <Box
                sx={{
                  width: '100%',
                  height: 4,
                  bgcolor: 'grey.200',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: `${progress}%`,
                    height: '100%',
                    bgcolor: 'primary.main',
                    transition: 'width 0.3s ease',
                  }}
                />
              </Box>
            )}
            <Box sx={{ flex: 1, mb: 3 }}>
              {renderQuestion({
                question: currentQuestion,
                value: currentAnswer,
                onChange: handleAnswer,
                previewMode: true,
              })}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 'auto',
              }}
            >
              {navigation.allowBack && (
                <button onClick={handleBack}>
                  {navigation.backButtonText || 'Back'}
                </button>
              )}
              <button onClick={handleNext}>
                {navigation.nextButtonText || 'Next'}
              </button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};
