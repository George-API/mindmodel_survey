import React, { useState, useEffect } from 'react';
import { defaultTheme } from '../theme/surveyTheme';
import { validateField } from '../utils/validation';
import { useSurvey } from '../hooks/useSurvey';
import { useSurveyRunner } from '../hooks/useSurveyRunner';
import { SurveyRunner } from '../utils/surveyRunner';
import { NavigationButtons } from '../components/navigation/NavigationButtons';
export const createSurvey = (options) => {
    // Create survey definition
    const surveyDefinition = {
        metadata: {
            id: options.id,
            version: '1.0',
            title: options.title || 'Survey',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        sections: [{
                id: 'main',
                title: 'Main Section',
                questions: options.questions
            }]
    };
    const SurveyComponent = () => {
        // Core state management
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [isLoading, setIsLoading] = useState(true);
        const [autoSaveError, setAutoSaveError] = useState(null);
        // Use survey hook for form management
        const { values: answers, errors, handleChange, submit: validateAll, isValid } = useSurvey(surveyDefinition);
        // Use survey runner for progress and auto-save
        const { handleSubmit: runnerSubmit } = useSurveyRunner(surveyDefinition);
        // Create survey runner instance
        const runner = React.useMemo(() => new SurveyRunner(surveyDefinition, 'default-user', {
            autoSave: options.config.autoSave?.enabled,
            autoSaveInterval: options.config.autoSave?.interval,
            onSaveProgress: async (response) => {
                try {
                    await options.config.autoSave?.handler?.(response);
                    setAutoSaveError(null);
                }
                catch (error) {
                    setAutoSaveError('Failed to save progress');
                    console.error('Auto-save failed:', error);
                }
            }
        }), []);
        // Initialize from storage if enabled
        useEffect(() => {
            const init = async () => {
                try {
                    if (options.config.progress?.enabled) {
                        const savedResponse = runner.getCurrentResponse();
                        if (savedResponse.answers) {
                            // Restore answers
                            Object.entries(savedResponse.answers).forEach(([id, value]) => {
                                handleChange(id, value);
                            });
                            // Restore progress
                            const lastAnsweredIndex = options.questions.findIndex(q => !savedResponse.answers[q.id]);
                            setCurrentQuestionIndex(lastAnsweredIndex === -1 ? options.questions.length - 1 : lastAnsweredIndex);
                        }
                    }
                }
                finally {
                    setIsLoading(false);
                }
            };
            init();
            // Cleanup auto-save on unmount
            return () => {
                runner.stopAutoSave();
            };
        }, []);
        // Navigation handlers
        const goToNextQuestion = () => {
            if (currentQuestionIndex < options.questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        };
        const goToPreviousQuestion = () => {
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(prev => prev - 1);
            }
        };
        // Handle question changes
        const handleQuestionChange = async (questionId, value) => {
            const validationError = validateField(value, options.config.validation?.[questionId]);
            if (!validationError) {
                // Update form state
                handleChange(questionId, value);
                // Update runner state
                await runner.handleQuestionChange(questionId, value);
                // Call onChange callback
                options.onChange?.(questionId, value);
                // Auto-advance if valid
                goToNextQuestion();
            }
        };
        // Handle submission
        const handleSubmit = async () => {
            const { isValid } = validateAll();
            if (!isValid)
                return;
            try {
                // Complete survey in runner
                await runner.complete();
                // Call onSubmit callback
                await options.onSubmit?.(answers);
                // Clear storage
                if (options.config.progress?.enabled) {
                    const storageType = options.config.progress.storage || 'local';
                    if (storageType !== 'none') {
                        window[`${storageType}Storage`].removeItem(`survey_${options.id}`);
                    }
                }
            }
            catch (error) {
                console.error('Survey submission failed:', error);
            }
        };
        // Loading state
        if (isLoading) {
            return className;
            "survey-loading" > Loading;
            survey;
            /div>;;
        }
        const currentQuestion = options.questions[currentQuestionIndex];
        const progress = runner.getProgress();
        const isLastQuestion = currentQuestionIndex === options.questions.length - 1;
        return theme = { options, : .theme || defaultTheme } >
            className;
        "survey-container" >
            { /* Progress bar */};
        {
            options.config.progress?.enabled && progress;
            {
                progress;
            }
            currentQuestion = { currentQuestionIndex } + 1;
        }
        totalQuestions = { options, : .questions.length }
            /  >
        ;
    };
};
{ /* Current question */ }
question;
{
    currentQuestion;
}
answer = { answers, [currentQuestion.id]:  };
error = { errors, [currentQuestion.id]:  };
onChange = { handleQuestionChange }
    /  >
    { /* Navigation */}
    < NavigationButtons;
showBack = { currentQuestionIndex } > 0;
showNext = {};
isLastQuestion;
showSubmit = { isLastQuestion };
onBack = { goToPreviousQuestion };
onNext = { goToNextQuestion };
onSubmit = { handleSubmit };
disabled = {};
isValid;
/>;
{ /* Auto-save error */ }
{
    autoSaveError && className;
    "error-message" > { autoSaveError } < /div>;
}
/div>
    < /ThemeProvider>;
;
;
SurveyComponent.displayName = `Survey_${options.id}`;
return {
    Survey: SurveyComponent,
    definition: surveyDefinition
};
;
