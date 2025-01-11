import { createSurvey } from '@mindmodel/survey';

const questions = [
  {
    id: 'baseline_1',
    type: 'text',
    label: 'What is your current occupation?',
    description: 'Please provide your current job title or role',
    required: true
  },
  {
    id: 'baseline_2',
    type: 'text',
    label: 'How many years of work experience do you have?',
    placeholder: 'Enter number of years',
    required: true,
    validation: [
      { type: 'required', message: 'This field is required' },
      { type: 'min', value: 0, message: 'Years must be 0 or greater' },
      { type: 'max', value: 100, message: 'Years must be less than 100' }
    ]
  },
  {
    id: 'baseline_3',
    type: 'multipleChoice',
    label: 'What is your highest level of education?',
    options: [
      { value: 'highschool', label: 'High School' },
      { value: 'bachelors', label: "Bachelor's Degree" },
      { value: 'masters', label: "Master's Degree" },
      { value: 'doctorate', label: 'Doctorate' },
      { value: 'other', label: 'Other' }
    ],
    required: true
  }
];

const { Survey } = createSurvey({
  id: 'baseline-assessment',
  title: 'Baseline Assessment',
  config: {
    autoSave: {
      enabled: true,
      interval: 5000
    },
    progress: {
      enabled: true,
      storage: 'local'
    },
    navigation: {
      allowBack: true,
      allowSkip: false
    }
  },
  questions,
  startScreen: {
    title: 'Welcome to the Baseline Assessment',
    description: 'This assessment will help us understand your professional background and experience.',
    startButtonText: 'Begin Assessment'
  },
  endScreen: {
    title: 'Assessment Complete',
    description: 'Thank you for completing the baseline assessment.',
    returnButtonText: 'Return to Dashboard'
  },
  onReturn: () => window.location.href = '/dashboard'
});

export function BaselineSurveyPage() {
  return <Survey />;
}

export default BaselineSurveyPage; 