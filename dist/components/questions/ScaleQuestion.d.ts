import React from 'react';
import { ScaleQuestion as ScaleQuestionType } from '../../types/survey.types';
interface ScaleQuestionProps extends ScaleQuestionType {
    value: number | null;
    onChange: (value: number) => void;
    error?: string;
    previewMode?: boolean;
}
export declare const ScaleQuestion: React.FC<ScaleQuestionProps>;
export {};
