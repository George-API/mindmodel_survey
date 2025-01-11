export class SurveyRunner {
    survey;
    userId;
    config;
    currentResponse;
    autoSaveInterval;
    constructor(survey, userId, config = {}) {
        this.survey = survey;
        this.userId = userId;
        this.config = config;
        this.currentResponse = {
            surveyId: survey.metadata.id,
            userId,
            answers: {},
            startedAt: new Date().toISOString(),
        };
        if (config.autoSave && config.autoSaveInterval) {
            this.startAutoSave();
        }
    }
    startAutoSave() {
        if (this.config.autoSave && this.config.autoSaveInterval) {
            this.autoSaveInterval = setInterval(async () => {
                await this.saveProgress();
            }, this.config.autoSaveInterval);
        }
    }
    stopAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
    }
    async saveProgress() {
        if (this.config.onSaveProgress) {
            await this.config.onSaveProgress(this.currentResponse);
        }
    }
    async handleQuestionChange(questionId, value) {
        this.currentResponse.answers = {
            ...this.currentResponse.answers,
            [questionId]: value,
        };
        if (this.config.autoSave && !this.config.autoSaveInterval) {
            await this.saveProgress();
        }
    }
    async complete() {
        this.stopAutoSave();
        const finalResponse = {
            ...this.currentResponse,
            completedAt: new Date().toISOString(),
        };
        if (this.config.onComplete) {
            await this.config.onComplete(finalResponse);
        }
    }
    getProgress() {
        const totalQuestions = this.survey.sections.reduce((total, section) => total + section.questions.length, 0);
        const answeredQuestions = Object.keys(this.currentResponse.answers || {}).length;
        return (answeredQuestions / totalQuestions) * 100;
    }
    getCurrentResponse() {
        return { ...this.currentResponse };
    }
}
// Example usage:
/*
import { SurveyRunner } from './surveyRunner';

// Create a survey runner instance
const runner = new SurveyRunner(surveyDefinition, userId, {
  autoSave: true,
  autoSaveInterval: 30000, // Save every 30 seconds
  onSaveProgress: async (response) => {
    await api.saveSurveyProgress(response);
  },
  onComplete: async (response) => {
    await api.submitSurveyResponse(response);
  },
});

// Use in a React component
const SurveyPage: React.FC = () => {
  const handleQuestionChange = async (questionId: string, value: any) => {
    await runner.handleQuestionChange(questionId, value);
  };

  const handleComplete = async () => {
    await runner.complete();
  };

  return (
    <Survey
      questions={surveyDefinition}
      onQuestionChange={handleQuestionChange}
      onComplete={handleComplete}
    />
  );
};
*/
