import React from 'react';
import { BaseQuestion as BaseQuestionType } from '../../types/survey.types';
interface BaseQuestionProps extends BaseQuestionType {
    children: React.ReactNode;
    error?: string;
    fullWidth?: boolean;
}
export declare const BaseQuestion: React.FC<BaseQuestionProps>;
export {};
