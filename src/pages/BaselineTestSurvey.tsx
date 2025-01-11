import React from 'react';
import { createSurvey, Question } from '../utils/createSurvey';

const questions: Question[] = [
  {
    id: 'baseline_1',
    type: 'text',
    label: 'What is your current occupation?',
    required: true,
    description: 'Please provide your current job title or role'
  },
  {
    id: 'baseline_2',
    type: 'text',
    label: 'How many years of work experience do you have?',
    required: true,
    placeholder: 'Enter number of years'
  },
  {
    id: 'baseline_3',
    type: 'multipleChoice',
    label: 'What is your highest level of education?',
    required: true,
    options: [
      { value: 'highschool', label: 'High School' },
      { value: 'bachelors', label: "Bachelor's Degree" },
      { value: 'masters', label: "Master's Degree" },
      { value: 'doctorate', label: 'Doctorate' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'baseline_4',
    type: 'scale',
    label: 'How would you rate your current job satisfaction?',
    required: true,
    min: 1,
    max: 5,
    labels: {
      1: 'Very Dissatisfied',
      3: 'Neutral',
      5: 'Very Satisfied'
    }
  },
  {
    id: 'baseline_5',
    type: 'multipleChoice',
    label: 'Which areas would you like to improve in your career?',
    description: 'Select all that apply',
    required: true,
    multiple: true,
    options: [
      { value: 'technical', label: 'Technical Skills' },
      { value: 'leadership', label: 'Leadership' },
      { value: 'communication', label: 'Communication' },
      { value: 'project_management', label: 'Project Management' },
      { value: 'other', label: 'Other' }
    ]
  }
] as const;

const { Survey } = createSurvey({
  id: 'baseline-test',
  title: 'Baseline Assessment Survey',
  config: {
    autoSave: {
      enabled: true,
      interval: 5000,
      handler: async (response) => {
        console.log('Auto-saving...', response);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    progress: {
      enabled: true,
      storage: 'local',
      showProgressBar: true,
      showQuestionCount: true
    },
    navigation: {
      allowSkip: false,
      allowBack: true,
      autoAdvance: false
    }
  },
  questions,
  startScreen: {
    title: 'Welcome to the Baseline Assessment',
    description: 'This survey will help us understand your professional background and career goals.',
    startButtonText: 'Begin Assessment'
  },
  endScreen: {
    title: 'Assessment Complete',
    description: 'Thank you for completing the baseline assessment.',
    returnButtonText: 'Return to Dashboard'
  },
  onStart: () => console.log('Survey started'),
  onSubmit: async (answers) => {
    console.log('Survey submitted:', answers);
    await new Promise(resolve => setTimeout(resolve, 2000));
  },
  onReturn: () => console.log('Return to dashboard clicked'),
  onChange: (questionId, value) => console.log(`Question ${questionId} changed:`, value),
  onComplete: () => console.log('Survey completed')
});

export const BaselineTestSurvey = () => (
  <Survey />
); 