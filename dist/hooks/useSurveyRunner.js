import { useEffect, useMemo } from 'react';
import { SurveyRunner } from '../utils/surveyRunner';
export const useSurveyRunner = (surveyDefinition) => {
    const runner = useMemo(() => new SurveyRunner(surveyDefinition, 'default-user'), [surveyDefinition]);
    useEffect(() => {
        return () => {
            runner.stopAutoSave();
        };
    }, [runner]);
    const handleSubmit = async (answers) => {
        await runner.complete();
    };
    return { handleSubmit };
};
