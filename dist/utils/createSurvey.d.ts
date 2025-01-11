import { defaultTheme } from '../theme/surveyTheme';
import type { Question, QuestionValue, ValidationRule, SurveyResponse } from '../types/survey.types';
export interface CreateSurveyOptions {
    id: string;
    title?: string;
    config: {
        autoSave?: {
            enabled: boolean;
            interval?: number;
            handler?: (response: Partial<SurveyResponse>) => Promise<void>;
        };
        validation?: Record<string, ValidationRule[]>;
        progress?: {
            enabled: boolean;
            storage?: 'local' | 'session' | 'none';
        };
    };
    questions: Question[];
    theme?: typeof defaultTheme;
    onSubmit?: (answers: Record<string, QuestionValue>) => Promise<void>;
    onChange?: (questionId: string, value: QuestionValue) => void;
}
export declare const createSurvey: (options: CreateSurveyOptions) => void;
