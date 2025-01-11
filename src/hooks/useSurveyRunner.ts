import { useEffect, useMemo, useState, useCallback } from 'react';
import { SurveyRunner } from '../utils/surveyRunner';
import { QuestionValue, SurveyDefinition } from '../types/survey.types';

export interface SurveyRunnerState {
  currentIndex: number;
  isComplete: boolean;
  progress: number;
}

export const useSurveyRunner = (surveyDefinition: SurveyDefinition) => {
  const runner = useMemo(() => 
    new SurveyRunner(surveyDefinition, 'default-user'), 
    [surveyDefinition]
  );

  const [state, setState] = useState<SurveyRunnerState>({
    currentIndex: 0,
    isComplete: false,
    progress: 0
  });

  const questions = useMemo(() => 
    surveyDefinition.sections.flatMap(section => section.questions),
    [surveyDefinition]
  );

  const handleNext = useCallback((currentValue: QuestionValue) => {
    const currentQuestion = questions[state.currentIndex];
    runner.handleQuestionChange(currentQuestion.id, currentValue);

    if (state.currentIndex < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        progress: ((prev.currentIndex + 2) / questions.length) * 100
      }));
      return true;
    }
    return false;
  }, [questions, state.currentIndex, runner]);

  const handleBack = useCallback(() => {
    if (state.currentIndex > 0) {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex - 1,
        progress: ((prev.currentIndex) / questions.length) * 100
      }));
      return true;
    }
    return false;
  }, [state.currentIndex, questions.length]);

  const handleSubmit = useCallback(async (answers: Record<string, QuestionValue>) => {
    await runner.complete();
    setState(prev => ({ ...prev, isComplete: true, progress: 100 }));
  }, [runner]);

  useEffect(() => {
    return () => {
      runner.stopAutoSave();
    };
  }, [runner]);

  return { 
    currentIndex: state.currentIndex,
    currentQuestion: questions[state.currentIndex],
    progress: state.progress,
    isComplete: state.isComplete,
    canGoBack: state.currentIndex > 0,
    isLastQuestion: state.currentIndex === questions.length - 1,
    handleNext,
    handleBack,
    handleSubmit
  };
}; 