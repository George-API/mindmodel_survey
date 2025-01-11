import React from 'react';
import { ImageChoiceQuestion as ImageChoiceQuestionType } from '../../types/survey.types';
interface ImageChoiceQuestionProps extends ImageChoiceQuestionType {
    value: string | string[];
    onChange: (value: string | string[]) => void;
    error?: string;
}
export declare const ImageChoiceQuestion: React.FC<ImageChoiceQuestionProps>;
export {};
