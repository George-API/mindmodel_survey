import { SurveyDefinition, QuestionValue } from '../types/survey.types';

export interface SurveyResponse {
  surveyId: string;
  userId: string;
  answers: Record<string, QuestionValue>;
  startedAt: string;
  completedAt: string;
  metadata?: Record<string, any>;
}

export interface SurveyRunnerConfig {
  onSaveProgress?: (response: Partial<SurveyResponse>) => Promise<void>;
  onComplete?: (response: SurveyResponse) => Promise<void>;
  autoSave?: boolean;
  autoSaveInterval?: number; // in milliseconds
}

export class SurveyRunner {
  private currentResponse: Partial<SurveyResponse>;
  private autoSaveInterval?: NodeJS.Timeout;

  constructor(
    private survey: SurveyDefinition,
    private userId: string,
    private config: SurveyRunnerConfig = {}
  ) {
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

  private startAutoSave(): void {
    if (this.config.autoSave && this.config.autoSaveInterval) {
      this.autoSaveInterval = setInterval(async () => {
        await this.saveProgress();
      }, this.config.autoSaveInterval);
    }
  }

  stopAutoSave(): void {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  }

  async saveProgress(): Promise<void> {
    if (this.config.onSaveProgress) {
      await this.config.onSaveProgress(this.currentResponse);
    }
  }

  async handleQuestionChange(questionId: string, value: QuestionValue): Promise<void> {
    this.currentResponse.answers = {
      ...this.currentResponse.answers,
      [questionId]: value,
    };

    if (this.config.autoSave && !this.config.autoSaveInterval) {
      await this.saveProgress();
    }
  }

  async complete(): Promise<void> {
    this.stopAutoSave();
    
    const finalResponse: SurveyResponse = {
      ...this.currentResponse as Omit<SurveyResponse, 'completedAt'>,
      completedAt: new Date().toISOString(),
    };

    if (this.config.onComplete) {
      await this.config.onComplete(finalResponse);
    }
  }

  getProgress(): number {
    const totalQuestions = this.survey.sections.reduce(
      (total, section) => total + section.questions.length,
      0
    );
    const answeredQuestions = Object.keys(this.currentResponse.answers || {}).length;
    return (answeredQuestions / totalQuestions) * 100;
  }

  getCurrentResponse(): Partial<SurveyResponse> {
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
