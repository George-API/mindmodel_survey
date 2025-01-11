import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, Box } from '@mui/material';
import { renderQuestion } from './QuestionRegistry';
import { useSurvey } from '../../hooks/useSurvey';
export const Survey = ({ survey, onSubmit }) => {
    const { values, errors, handleChange, submit } = useSurvey(survey);
    const handleSubmit = () => {
        const result = submit();
        if (result.isValid && onSubmit) {
            onSubmit(result.values);
        }
    };
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: survey.metadata.title }), survey.metadata.description && (_jsx(Typography, { variant: "body1", color: "text.secondary", paragraph: true, children: survey.metadata.description })), survey.sections.map((section) => (_jsxs(Paper, { elevation: 0, sx: {
                    p: 3,
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                }, children: [_jsx(Typography, { variant: "h5", gutterBottom: true, children: section.title }), section.description && (_jsx(Typography, { variant: "body2", color: "text.secondary", paragraph: true, children: section.description })), _jsx(Box, { sx: { mt: 3 }, children: section.questions.map((question) => (_jsx(Box, { sx: { mb: 3 }, children: renderQuestion({
                                question,
                                value: values[question.id],
                                onChange: (value) => handleChange(question.id, value),
                                error: errors[question.id],
                            }) }, question.id))) })] }, section.id)))] }));
};
