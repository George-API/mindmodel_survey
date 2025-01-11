import { useEffect, useMemo } from 'react';
import { SurveyRunner } from '../utils/surveyRunner';
import { QuestionValue, SurveyDefinition } from '../types/survey.types';

export const useSurveyRunner = (surveyDefinition: SurveyDefinition) => {
  const runner = useMemo(() => 
    new SurveyRunner(surveyDefinition, 'default-user'), 
    [surveyDefinition]
  );

  useEffect(() => {
    return () => {
      runner.stopAutoSave();
    };
  }, [runner]);

  const handleSubmit = async (answers: Record<string, QuestionValue>) => {
    await runner.complete();
  };

  return { handleSubmit };
}; 