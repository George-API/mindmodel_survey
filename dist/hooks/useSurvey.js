import { useState, useCallback } from 'react';
import { validateField } from '../utils/validation';
export const useSurvey = (survey) => {
    const [state, setState] = useState({
        values: {},
        errors: {},
        isValid: false,
    });
    const validateQuestion = useCallback((question, value) => {
        if (!question.required)
            return undefined;
        if (value === null || value === undefined || value === '') {
            return 'This field is required';
        }
        if (question.validation) {
            return validateField(value, question.validation);
        }
        return undefined;
    }, []);
    const validateAllQuestions = useCallback(() => {
        const errors = {};
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
    const handleChange = useCallback((questionId, value) => {
        setState(prev => {
            const question = survey.sections
                .flatMap(s => s.questions)
                .find(q => q.id === questionId);
            if (!question)
                return prev;
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
