export const feedbackSurvey = {
    metadata: {
        id: 'feedback-survey',
        version: '1.0.0',
        title: 'Product Feedback Survey',
        description: 'Help us improve our product by providing your feedback',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    questions: [
        {
            id: 'satisfaction',
            type: 'scale',
            title: 'How satisfied are you with our product?',
            description: 'Rate your overall satisfaction',
            required: true,
            scale: 5,
            leftLabel: 'Not satisfied',
            rightLabel: 'Very satisfied',
        },
        {
            id: 'features',
            type: 'multipleChoice',
            title: 'Which features do you use most?',
            description: 'Select all that apply',
            required: true,
            allowMultiple: true,
            choices: [
                { value: 'feature1', label: 'Feature 1' },
                { value: 'feature2', label: 'Feature 2' },
                { value: 'feature3', label: 'Feature 3' },
            ],
        },
        {
            id: 'improvements',
            type: 'text',
            title: 'What improvements would you suggest?',
            description: 'Please provide your feedback',
            multiline: true,
            maxLength: 500,
        },
    ],
};
