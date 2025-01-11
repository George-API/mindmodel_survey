import React from 'react';
import { DateQuestion as DateQuestionType } from '../../types/survey.types';
interface DateQuestionProps extends DateQuestionType {
    value: Date | null;
    onChange: (value: Date | null) => void;
    error?: string;
}
export declare const DateQuestion: React.FC<DateQuestionProps>;
export {};
