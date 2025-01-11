import type { FC } from 'react';
import type { SurveyDefinition } from '../../types/survey.types';
export interface SurveyProps {
    survey: SurveyDefinition;
    onSubmit: (values: Record<string, any>) => void | Promise<void>;
}
export declare const Survey: FC<SurveyProps>;
