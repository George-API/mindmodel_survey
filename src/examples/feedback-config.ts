import { SurveyConfig } from '../types/survey.types';

export const feedbackConfig: SurveyConfig = {
  theme: {
    primaryColor: '#1976d2',
    backgroundColor: '#f5f5f5',
    containerWidth: '800px',
    containerHeight: '600px',
    questionSpacing: 32,
    typography: {
      titleFontSize: '1.5rem',
      descriptionFontSize: '1rem',
      questionFontSize: '1.25rem',
    },
  },
  navigation: {
    showProgressBar: true,
    showQuestionCount: true,
    allowBack: true,
    submitButtonText: 'Submit Feedback',
    backButtonText: 'Previous',
    nextButtonText: 'Next',
  },
  onSubmit: async (answers) => {
    console.log('Survey submitted:', answers);
    // Handle survey submission
  },
  onQuestionChange: (questionId, answer) => {
    console.log(`Question ${questionId} changed:`, answer);
    // Handle question change
  },
  onSurveyComplete: (answers) => {
    console.log('Survey completed:', answers);
    // Handle survey completion
  },
};
