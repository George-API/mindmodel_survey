import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Divider, Tab, Tabs, useTheme, Button, LinearProgress, } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { renderQuestion } from '../components/survey/QuestionRegistry';
const previewSections = [
    {
        title: 'Text Questions',
        questions: [
            {
                id: 'simple-text',
                type: 'text',
                title: 'Simple Text Input',
                description: 'A basic single-line text input',
                required: true,
                validation: [
                    { type: 'required', message: 'This field is required' }
                ]
            },
            {
                id: 'multiline-text',
                type: 'text',
                title: 'Multiline Text Input',
                description: 'A text area for longer responses',
                multiline: true,
                maxLength: 500
            }
        ]
    },
    {
        title: 'Choice Questions',
        questions: [
            {
                id: 'single-choice',
                type: 'singleChoice',
                title: 'Single Choice Question',
                description: 'Select one option',
                choices: [
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                ],
                allowOther: true
            },
            {
                id: 'multiple-choice',
                type: 'multipleChoice',
                title: 'Multiple Choice Question',
                description: 'Select multiple options',
                choices: [
                    { value: 'choice1', label: 'Choice 1' },
                    { value: 'choice2', label: 'Choice 2' },
                    { value: 'choice3', label: 'Choice 3' }
                ],
                allowMultiple: true
            }
        ]
    },
    {
        title: 'Image Choice Questions',
        questions: [
            {
                id: 'single-image-choice',
                type: 'imageChoice',
                title: 'Single Image Choice',
                description: 'Select one image',
                choices: [
                    {
                        value: 'image1',
                        label: 'Nature',
                        imageUrl: 'https://source.unsplash.com/400x300/?nature',
                        imageAlt: 'Nature image'
                    },
                    {
                        value: 'image2',
                        label: 'Architecture',
                        imageUrl: 'https://source.unsplash.com/400x300/?architecture',
                        imageAlt: 'Architecture image'
                    },
                    {
                        value: 'image3',
                        label: 'Technology',
                        imageUrl: 'https://source.unsplash.com/400x300/?technology',
                        imageAlt: 'Technology image'
                    }
                ],
                imageSize: { height: 200 }
            },
            {
                id: 'multiple-image-choice',
                type: 'imageChoice',
                title: 'Multiple Image Choice',
                description: 'Select multiple images',
                allowMultiple: true,
                layout: 'horizontal',
                choices: [
                    {
                        value: 'image4',
                        label: 'Food',
                        imageUrl: 'https://source.unsplash.com/400x300/?food',
                        imageAlt: 'Food image'
                    },
                    {
                        value: 'image5',
                        label: 'Travel',
                        imageUrl: 'https://source.unsplash.com/400x300/?travel',
                        imageAlt: 'Travel image'
                    },
                    {
                        value: 'image6',
                        label: 'Sports',
                        imageUrl: 'https://source.unsplash.com/400x300/?sports',
                        imageAlt: 'Sports image'
                    }
                ]
            }
        ]
    },
    {
        title: 'Scale Questions',
        questions: [
            {
                id: 'scale-question',
                type: 'scale',
                title: 'How likely are you to recommend us?',
                description: 'Please rate your likelihood to recommend our service to others',
                scale: 7,
                leftLabel: 'Not at all',
                rightLabel: 'Extremely likely'
            }
        ]
    },
    {
        title: 'Date Questions',
        questions: [
            {
                id: 'simple-date',
                type: 'date',
                title: 'Select a Date',
                description: 'Choose any date'
            },
            {
                id: 'future-date',
                type: 'date',
                title: 'Future Date Only',
                description: 'Choose a date in the future',
                disablePast: true
            }
        ]
    }
];
// Create a flattened list of all questions for the survey preview
const allQuestions = previewSections.flatMap(section => section.questions);
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `tabpanel-${index}`, ...other, children: value === index && _jsx(Box, { children: children }) }));
};
export const ComponentPreview = () => {
    const theme = useTheme();
    const [values, setValues] = useState({});
    const [currentTab, setCurrentTab] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showEndPage, setShowEndPage] = useState(false);
    const handleChange = (questionId, value) => {
        setValues(prev => ({
            ...prev,
            [questionId]: value
        }));
        console.log('Question:', questionId, 'Value:', value);
    };
    const handleNext = () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };
    const handleSubmit = () => {
        // Here you can add logic to process the survey responses
        console.log('Survey submitted:', values);
        setShowEndPage(true);
    };
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && !event.shiftKey && document.activeElement?.tagName !== 'TEXTAREA') {
                event.preventDefault();
                if (currentQuestionIndex === allQuestions.length - 1) {
                    handleSubmit();
                }
                else {
                    handleNext();
                }
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentQuestionIndex]);
    return (_jsxs(Container, { maxWidth: "lg", sx: { py: 4 }, children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Survey Component Preview" }), _jsx(Typography, { variant: "body1", color: "text.secondary", paragraph: true, children: "This page showcases all available question types with different configurations. Try interacting with the components to see how they work." }), _jsx(Box, { sx: { borderBottom: 1, borderColor: 'divider', mb: 3 }, children: _jsxs(Tabs, { value: currentTab, onChange: (_, newValue) => {
                        setCurrentTab(newValue);
                        if (newValue === 1) { // Reset question index when switching to survey preview
                            setCurrentQuestionIndex(0);
                        }
                    }, variant: "scrollable", scrollButtons: "auto", children: [_jsx(Tab, { label: "Component Library" }), _jsx(Tab, { label: "Survey Preview" })] }) }), _jsx(TabPanel, { value: currentTab, index: 0, children: previewSections.map((section, index) => (_jsxs(Paper, { elevation: 0, sx: { p: 3, mb: 3, border: `1px solid ${theme.palette.divider}` }, children: [_jsx(Typography, { variant: "h5", gutterBottom: true, children: section.title }), _jsx(Divider, { sx: { my: 2 } }), section.questions.map(question => (_jsxs(Box, { sx: { mb: 4 }, children: [renderQuestion({
                                    question,
                                    value: values[question.id],
                                    onChange: (value) => handleChange(question.id, value),
                                    previewMode: true,
                                }), _jsxs(Typography, { variant: "caption", sx: {
                                        display: 'block',
                                        mt: 1,
                                        p: 1,
                                        backgroundColor: 'action.hover',
                                        borderRadius: 1,
                                        fontFamily: 'monospace'
                                    }, children: ["Current Value: ", JSON.stringify(values[question.id], null, 2)] })] }, question.id)))] }, section.title))) }), _jsx(TabPanel, { value: currentTab, index: 1, children: _jsxs(Paper, { elevation: 0, sx: {
                        p: 4,
                        maxWidth: 800,
                        mx: 'auto',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        position: 'relative',
                    }, children: [_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(LinearProgress, { variant: "determinate", value: showEndPage ? 100 : (currentQuestionIndex / (allQuestions.length - 1)) * 100, sx: { mb: 2, borderRadius: 1 } }), !showEndPage && (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", children: ["Question ", currentQuestionIndex + 1, " of ", allQuestions.length] }))] }), _jsx(Box, { sx: { minHeight: 300 }, children: !showEndPage ? (renderQuestion({
                                question: allQuestions[currentQuestionIndex],
                                value: values[allQuestions[currentQuestionIndex].id],
                                onChange: (value) => handleChange(allQuestions[currentQuestionIndex].id, value),
                                previewMode: true,
                            })) : (_jsxs(Box, { sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3,
                                    py: 4,
                                }, children: [_jsx(Typography, { variant: "h4", component: "h2", align: "center", gutterBottom: true, children: "Thank You!" }), _jsx(Typography, { variant: "body1", color: "text.secondary", align: "center", children: "Your survey responses have been submitted successfully." }), _jsx(Button, { variant: "contained", onClick: () => {
                                            setShowEndPage(false);
                                            setCurrentQuestionIndex(0);
                                            setValues({});
                                            setCurrentTab(0);
                                        }, sx: {
                                            mt: 2,
                                            bgcolor: theme.palette.primary.main,
                                            boxShadow: `0 4px 14px ${theme.palette.primary.main}40`,
                                            '&:hover': {
                                                bgcolor: theme.palette.primary.dark,
                                                boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                                            }
                                        }, children: "Return to Dashboard" })] })) }), !showEndPage && (_jsxs(Box, { sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 4,
                                pt: 2,
                                borderTop: `1px solid ${theme.palette.divider}`,
                            }, children: [_jsx(Button, { variant: "outlined", onClick: handlePrev, disabled: currentQuestionIndex === 0, children: "Previous" }), currentQuestionIndex === allQuestions.length - 1 ? (_jsx(Button, { variant: "contained", onClick: handleSubmit, sx: {
                                        bgcolor: theme.palette.primary.main,
                                        boxShadow: `0 4px 14px ${theme.palette.primary.main}40`,
                                        '&:hover': {
                                            bgcolor: theme.palette.primary.dark,
                                            boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                                        }
                                    }, children: "Submit" })) : (_jsx(Button, { variant: "contained", onClick: handleNext, endIcon: _jsx(KeyboardReturnIcon, {}), children: "Next" }))] }))] }) })] }));
};
