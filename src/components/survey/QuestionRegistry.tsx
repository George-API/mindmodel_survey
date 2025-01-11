import React from 'react';
import { Question, QuestionRendererProps } from '../../types/survey.types';
import { ScaleQuestion } from '../questions/ScaleQuestion';
import { MultipleChoiceQuestion } from '../questions/MultipleChoiceQuestion';
import { TextQuestion } from '../questions/TextQuestion';
import { ImageChoiceQuestion } from '../questions/ImageChoiceQuestion';
import { DateQuestion } from '../questions/DateQuestion';
import { MatrixQuestion } from '../questions/MatrixQuestion';

export const renderQuestion = ({
  question,
  value,
  onChange,
  error,
  previewMode = false,
}: QuestionRendererProps) => {
  switch (question.type) {
    case 'scale':
      return (
        <ScaleQuestion
          {...question}
          value={value as number | null}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    case 'multipleChoice':
      return (
        <MultipleChoiceQuestion
          {...question}
          value={value as string | string[] | null}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    case 'text':
      return (
        <TextQuestion
          {...question}
          value={value as string}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    case 'imageChoice':
      return (
        <ImageChoiceQuestion
          {...question}
          value={value as string | string[] | null}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    case 'date':
      return (
        <DateQuestion
          {...question}
          value={value as Date | null}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    case 'matrix':
      return (
        <MatrixQuestion
          {...question}
          value={value as Record<string, number> | null}
          onChange={onChange}
          error={error}
          previewMode={previewMode}
        />
      );
    default:
      return null;
  }
};
