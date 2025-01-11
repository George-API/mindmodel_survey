import React from 'react';
import { MultipleChoiceQuestion as MultipleChoiceQuestionType } from '../../types/survey.types';
interface MultipleChoiceQuestionProps extends MultipleChoiceQuestionType {
    value: string | string[];
    onChange: (value: string | string[]) => void;
    error?: string;
}
export declare const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps>;
export {};
