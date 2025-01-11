import { Theme } from '@mui/material';

export type QuestionType = 
  | 'text'
  | 'number'
  | 'date'
  | 'scale'
  | 'multipleChoice'
  | 'imageChoice'
  | 'matrix';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  label: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextQuestion extends BaseQuestion {
  type: 'text' | 'number';
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  validation?: ValidationRule[];
}

export interface DateQuestion extends BaseQuestion {
  type: 'date';
  minDate?: Date;
  maxDate?: Date;
}

export interface ScaleQuestion extends BaseQuestion {
  type: 'scale';
  min: number;
  max: number;
  step?: number;
  labels?: Record<number, string>;
}

export interface Choice {
  value: string;
  label: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multipleChoice';
  options?: Choice[];
  choices?: Choice[];
  multiple?: boolean;
}

export interface ImageChoiceQuestion extends BaseQuestion {
  type: 'imageChoice';
  options: Choice[];
  multiple?: boolean;
}

export interface MatrixQuestion extends BaseQuestion {
  type: 'matrix';
  rows: Choice[];
  columns: Choice[];
}

export type Question =
  | TextQuestion
  | DateQuestion
  | ScaleQuestion
  | MultipleChoiceQuestion
  | ImageChoiceQuestion
  | MatrixQuestion;

export type QuestionValue = string | number | boolean | Date | string[] | Record<string, any>;

export interface ValidationRule {
  type: 'required' | 'email' | 'min' | 'max' | 'pattern';
  value?: any;
  message: string;
}

export interface ScreenConfig {
  title: string;
  description?: string;
  startButtonText?: string;
  returnButtonText?: string;
}

export interface SurveyConfig {
  autoSave?: {
    enabled: boolean;
    interval?: number;
    handler?: (response: Partial<SurveyResponse>) => Promise<void>;
  };
  validation?: Record<string, ValidationRule[]>;
  progress?: {
    enabled: boolean;
    storage?: 'local' | 'session' | 'none';
    showProgressBar?: boolean;
    showQuestionCount?: boolean;
  };
  navigation?: {
    allowSkip?: boolean;
    allowBack?: boolean;
    autoAdvance?: boolean;
  };
  theme?: Theme;
}

export interface SurveyMetadata {
  id: string;
  version: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SurveySection {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface SurveyDefinition {
  metadata: SurveyMetadata;
  sections: SurveySection[];
  config: SurveyConfig;
}

export interface SurveyResponse {
  surveyId: string;
  answers: Record<string, QuestionValue>;
  completed?: boolean;
  startedAt?: string;
  completedAt?: string;
}
