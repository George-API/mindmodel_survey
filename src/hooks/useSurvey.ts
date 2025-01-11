import { useState, useCallback } from 'react';
import { Survey, Question, QuestionValue, SurveyState as SurveyStateType } from '../types/survey.types';
import { validateField } from '../utils/validation';

export interface SurveyState {
  values: Record<string, QuestionValue>;
  errors: Record<string, string | undefined>;
  isValid: boolean;
}

export const useSurvey = (survey: Survey) => {
  const [state, setState] = useState<SurveyState>({
    values: {},
    errors: {},
    isValid: false,
  });

  const validateQuestion = useCallback((question: Question, value: QuestionValue): string | undefined => {
    if (!question.required) return undefined;
    if (value === null || value === undefined || value === '') {
      return 'This field is required';
    }
    if (question.validation) {
      return validateField(value, question.validation);
    }
    return undefined;
  }, []);

  const validateAllQuestions = useCallback(() => {
    const errors: Record<string, string | undefined> = {};
    let isValid = true;

    const questions = survey.sections.flatMap(section => section.questions);
    questions.forEach(question => {
      const error = validateQuestion(question, state.values[question.id]);
      if (error) {
        isValid = false;
        errors[question.id] = error;
      }
    });

    return { errors, isValid };
  }, [survey, state.values, validateQuestion]);

  const handleChange = useCallback((questionId: string, value: QuestionValue) => {
    setState(prev => {
      const question = survey.sections
        .flatMap(s => s.questions)
        .find(q => q.id === questionId);
      
      if (!question) return prev;

      const newValues = { ...prev.values, [questionId]: value };
      const error = validateQuestion(question, value);
      const newErrors = { ...prev.errors, [questionId]: error };
      
      return {
        values: newValues,
        errors: newErrors,
        isValid: !Object.values(newErrors).some(Boolean),
      };
    });
  }, [survey, validateQuestion]);

  const submit = useCallback(() => {
    const { errors, isValid } = validateAllQuestions();
    setState(prev => ({
      ...prev,
      errors,
      isValid,
    }));
    return { values: state.values, isValid };
  }, [state.values, validateAllQuestions]);

  return {
    values: state.values,
    errors: state.errors,
    isValid: state.isValid,
    handleChange,
    submit,
  };
};
