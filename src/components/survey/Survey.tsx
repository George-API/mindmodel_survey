import React from 'react';
import type { FC } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import type { SurveyDefinition } from '../../types/survey.types';
import { renderQuestion } from './QuestionRegistry';
import { useSurvey } from '../../hooks/useSurvey';

export interface SurveyProps {
  survey: SurveyDefinition;
  onSubmit: (values: Record<string, any>) => void | Promise<void>;
}

export const Survey: FC<SurveyProps> = ({ survey, onSubmit }) => {
  const { values, errors, handleChange, submit } = useSurvey(survey);

  const handleSubmit = () => {
    const result = submit();
    if (result.isValid && onSubmit) {
      onSubmit(result.values);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {survey.metadata.title}
      </Typography>
      {survey.metadata.description && (
        <Typography variant="body1" color="text.secondary" paragraph>
          {survey.metadata.description}
        </Typography>
      )}
      {survey.sections.map((section) => (
        <Paper
          key={section.id}
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            {section.title}
          </Typography>
          {section.description && (
            <Typography variant="body2" color="text.secondary" paragraph>
              {section.description}
            </Typography>
          )}
          <Box sx={{ mt: 3 }}>
            {section.questions.map((question) => (
              <Box key={question.id} sx={{ mb: 3 }}>
                {renderQuestion({
                  question,
                  value: values[question.id],
                  onChange: (value) => handleChange(question.id, value),
                  error: errors[question.id],
                })}
              </Box>
            ))}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
