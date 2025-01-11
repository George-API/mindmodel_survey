import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Paper } from '@mui/material';
import { renderQuestion } from './survey/QuestionRegistry';
import { useSurvey } from '../hooks/useSurvey';
export const Survey = ({ questions, config, onSubmit, onQuestionChange, onComplete }) => {
    const { currentQuestion, currentAnswer, handleAnswer, handleNext, handleBack, handleSubmit, isComplete, progress, } = useSurvey(questions, config, { onSubmit, onQuestionChange, onComplete });
    const { theme = {}, navigation = {}, } = config;
    const { containerWidth = '800px', containerHeight = '600px', backgroundColor = '#f5f5f5', } = theme;
    if (isComplete) {
        return (_jsx(Box, { sx: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: backgroundColor,
            }, children: _jsx(Paper, { elevation: 3, sx: {
                    width: containerWidth,
                    height: containerHeight,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, children: _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx("h2", { children: "Survey Complete" }), _jsx("p", { children: "Thank you for completing the survey!" })] }) }) }));
    }
    return (_jsx(Box, { sx: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: backgroundColor,
        }, children: _jsx(Paper, { elevation: 3, sx: {
                width: containerWidth,
                height: containerHeight,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
            }, children: currentQuestion && (_jsxs(_Fragment, { children: [navigation.showProgressBar && (_jsx(Box, { sx: {
                            width: '100%',
                            height: 4,
                            bgcolor: 'grey.200',
                            mb: 3,
                        }, children: _jsx(Box, { sx: {
                                width: `${progress}%`,
                                height: '100%',
                                bgcolor: 'primary.main',
                                transition: 'width 0.3s ease',
                            } }) })), _jsx(Box, { sx: { flex: 1, mb: 3 }, children: renderQuestion({
                            question: currentQuestion,
                            value: currentAnswer,
                            onChange: handleAnswer,
                            previewMode: true,
                        }) }), _jsxs(Box, { sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 'auto',
                        }, children: [navigation.allowBack && (_jsx("button", { onClick: handleBack, children: navigation.backButtonText || 'Back' })), _jsx("button", { onClick: handleNext, children: navigation.nextButtonText || 'Next' })] })] })) }) }));
};
