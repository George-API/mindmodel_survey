import { QuestionValue, SurveyDefinition } from '../types/survey.types';
export declare const useSurveyRunner: (surveyDefinition: SurveyDefinition) => {
    handleSubmit: (answers: Record<string, QuestionValue>) => Promise<void>;
};
