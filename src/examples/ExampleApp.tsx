import React from 'react';
import { Survey } from '../components/Survey';
import { feedbackSurvey } from './feedback-survey';
import { feedbackConfig } from './feedback-config';

export const ExampleApp: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Survey
        definition={feedbackSurvey}
        config={feedbackConfig}
      />
    </div>
  );
};
