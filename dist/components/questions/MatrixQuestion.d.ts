import React from 'react';
import { MatrixQuestion as MatrixQuestionType } from '../../types/survey.types';
interface MatrixQuestionProps extends MatrixQuestionType {
    value: Record<string, number>;
    onChange: (value: Record<string, number>) => void;
    error?: string;
}
export declare const MatrixQuestion: React.FC<MatrixQuestionProps>;
export {};
