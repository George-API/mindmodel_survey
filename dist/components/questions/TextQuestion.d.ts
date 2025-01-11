import React from 'react';
import { TextQuestion as TextQuestionType } from '../../types/survey.types';
interface TextQuestionProps extends TextQuestionType {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}
export declare const TextQuestion: React.FC<TextQuestionProps>;
export {};
