import { QuestionValue } from '../types/survey.types';
export interface SurveyState {
    values: Record<string, QuestionValue>;
    errors: Record<string, string | undefined>;
    isValid: boolean;
}
export declare const useSurvey: (survey: Survey) => {
    values: Record<string, QuestionValue>;
    errors: Record<string, string>;
    isValid: boolean;
    handleChange: (questionId: string, value: QuestionValue) => void;
    submit: () => {
        values: Record<string, QuestionValue>;
        isValid: boolean;
    };
};
