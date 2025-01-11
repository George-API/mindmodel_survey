// Core types for question values
export type ScaleValue = number | null;
export type ChoiceValue = string | string[] | null;
export type TextValue = string;
export type ImageChoiceValue = string | string[] | null;
export type DateValue = string | null;
export type BooleanValue = boolean | null;
export type RatingValue = number | null;
export type NumericValue = number | null;
export type FileValue = File | File[] | null;
export type MatrixValue = Record<string, string | string[]> | null;
export type RankingValue = string[] | null;

// Union type for all possible question values
export type QuestionValue = 
  | ScaleValue 
  | ChoiceValue 
  | TextValue 
  | ImageChoiceValue
  | DateValue
  | BooleanValue
  | RatingValue
  | NumericValue
  | FileValue
  | MatrixValue
  | RankingValue;

// Question Types
export type QuestionType = 
  | 'scale'
  | 'multipleChoice'
  | 'text'
  | 'imageChoice'
  | 'date'
  | 'boolean'
  | 'rating'
  | 'numeric'
  | 'file'
  | 'matrix'
  | 'ranking'
  | 'dropdown'
  | 'contact';

// Base interface for all questions
export interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required?: boolean;
  validation?: ValidationRule;
}

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'regex' | 'email' | 'url' | 'custom';
  value?: any;
  message?: string;
  validator?: (value: any) => boolean | string;
}

// Question Definitions
export interface ScaleQuestion extends BaseQuestion {
  type: 'scale';
  scale?: number;
  leftLabel?: string;
  rightLabel?: string;
  step?: number;
}

export interface Choice {
  value: string;
  label: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multipleChoice';
  choices: Choice[];
  allowMultiple?: boolean;
  allowOther?: boolean;
}

export interface TextQuestion extends BaseQuestion {
  type: 'text';
  multiline?: boolean;
  maxLength?: number;
  placeholder?: string;
}

export interface ImageChoice extends Choice {
  imageUrl: string;
  imageAlt?: string;
}

export interface ImageChoiceQuestion extends BaseQuestion {
  type: 'imageChoice';
  choices: ImageChoice[];
  allowMultiple?: boolean;
}

export interface DateQuestion extends BaseQuestion {
  type: 'date';
  includeTime?: boolean;
  minDate?: string;
  maxDate?: string;
  format?: string;
}

export interface BooleanQuestion extends BaseQuestion {
  type: 'boolean';
  trueLabel?: string;
  falseLabel?: string;
}

export interface RatingQuestion extends BaseQuestion {
  type: 'rating';
  maxRating: number;
  icon?: 'star' | 'heart' | 'thumb' | 'emoji';
  allowHalf?: boolean;
}

export interface NumericQuestion extends BaseQuestion {
  type: 'numeric';
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export interface FileQuestion extends BaseQuestion {
  type: 'file';
  acceptedTypes?: string[];
  maxSize?: number;
  multiple?: boolean;
}

export interface MatrixRow {
  id: string;
  label: string;
}

export interface MatrixColumn extends Choice {
  exclusive?: boolean;
}

export interface MatrixQuestion extends BaseQuestion {
  type: 'matrix';
  rows: MatrixRow[];
  columns: MatrixColumn[];
  allowMultiplePerRow?: boolean;
}

export interface RankingQuestion extends BaseQuestion {
  type: 'ranking';
  choices: Choice[];
  maxRanked?: number;
}

export interface DropdownQuestion extends BaseQuestion {
  type: 'dropdown';
  choices: Choice[];
  searchable?: boolean;
  placeholder?: string;
}

export interface ContactQuestion extends BaseQuestion {
  type: 'contact';
  fields: Array<{
    id: string;
    type: 'email' | 'phone' | 'address' | 'name';
    required?: boolean;
    label?: string;
  }>;
}

// Union type for all question types
export type Question =
  | ScaleQuestion
  | MultipleChoiceQuestion
  | TextQuestion
  | ImageChoiceQuestion
  | DateQuestion
  | BooleanQuestion
  | RatingQuestion
  | NumericQuestion
  | FileQuestion
  | MatrixQuestion
  | RankingQuestion
  | DropdownQuestion
  | ContactQuestion;

// Survey Questions Type
export interface SurveyQuestions {
  questions: Question[];
}

// Survey Configuration Types
export interface SurveyTheme {
  primaryColor?: string;
  backgroundColor?: string;
  containerWidth?: string | number;
  containerHeight?: string | number;
  questionSpacing?: number;
  typography?: {
    titleFontSize?: string | number;
    descriptionFontSize?: string | number;
    questionFontSize?: string | number;
  };
}

export interface SurveyNavigation {
  showProgressBar?: boolean;
  showQuestionCount?: boolean;
  allowBack?: boolean;
  submitButtonText?: string;
  backButtonText?: string;
  nextButtonText?: string;
}

export interface SurveyConfig {
  theme?: SurveyTheme;
  navigation?: SurveyNavigation;
  onSubmit?: (answers: Record<string, any>) => void | Promise<void>;
  onQuestionChange?: (questionId: string, answer: any) => void;
  onSurveyComplete?: (answers: Record<string, any>) => void;
}

// Survey State Types
export interface SurveyState {
  answers: Record<string, QuestionValue>;
  currentQuestionIndex: number;
  isComplete: boolean;
}

// Survey Management Types
export interface SurveyQuestionState {
  value?: QuestionValue;
  error?: string;
}

export type SurveyQuestion = Question & SurveyQuestionState;

// Survey Events
export interface SurveyEvents {
  onAnswer: (questionId: string, value: QuestionValue) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

// Component Props Types
export interface QuestionRendererProps {
  question: Question;
  value?: QuestionValue;
  onChange: (value: QuestionValue) => void;
  error?: string;
  previewMode?: boolean;
}

// Survey Component Props
export interface SurveyProps {
  questions: SurveyQuestions;
  config: SurveyConfig;
  onSubmit?: (answers: Record<string, any>) => void | Promise<void>;
  onQuestionChange?: (questionId: string, answer: any) => void;
  onComplete?: (answers: Record<string, any>) => void;
}

// Survey Metadata Types
export interface SurveyMetadata {
  id: string;
  version: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  author?: string;
  tags?: string[];
  language?: string;
  category?: string;
}

// Survey Definition Type
export interface SurveyDefinition {
  metadata: SurveyMetadata;
  config: SurveyConfig;
  sections: Array<{
    id: string;
    title: string;
    description?: string;
    questions: Question[];
  }>;
}
