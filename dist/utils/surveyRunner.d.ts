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
    autoSaveInterval?: number;
}
export declare class SurveyRunner {
    private survey;
    private userId;
    private config;
    private currentResponse;
    private autoSaveInterval?;
    constructor(survey: SurveyDefinition, userId: string, config?: SurveyRunnerConfig);
    private startAutoSave;
    stopAutoSave(): void;
    saveProgress(): Promise<void>;
    handleQuestionChange(questionId: string, value: QuestionValue): Promise<void>;
    complete(): Promise<void>;
    getProgress(): number;
    getCurrentResponse(): Partial<SurveyResponse>;
}
