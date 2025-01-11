# MindModel Survey Guide

## Basic Setup

Import the survey library in your TSX file:
```typescript
import { createSurvey } from '@mindmodel/survey';
```

## Creating a Survey

A survey consists of:
- Configuration options
- Questions array
- Start and end screen settings

Basic structure:
```typescript
const Survey = createSurvey({
  id: 'unique-survey-id',
  title: 'Survey Title',
  config: {
    autoSave: {
      enabled: true,
      interval: 5000, // 5 seconds
    },
    progress: {
      enabled: true,
      storage: 'local',
    },
    navigation: {
      allowBack: true,
      allowSkip: false,
    }
  },
  questions: [], // Your questions array
  startScreen: {
    title: 'Welcome',
    description: 'Please complete this survey.',
    startButtonText: 'Begin',
    logoUrl: '/path/to/logo.png' // Optional
  },
  endScreen: {
    title: 'Thank You',
    description: 'Your responses have been submitted.',
    returnButtonText: 'Return to Dashboard',
    logoUrl: '/path/to/logo.png' // Optional
  }
});
```

## Question Types

### 1. Text Question
```typescript
{
  type: 'text',
  label: 'What is your current occupation?',
  description: 'Please provide your job title',
  required: true,
  placeholder: 'Enter your occupation'
}
```

### 2. Multiple Choice Question
```typescript
{
  type: 'multipleChoice',
  label: 'Select your highest level of education',
  description: 'Choose one option',
  required: true,
  options: [
    { value: 'highschool', label: 'High School' },
    { value: 'bachelors', label: 'Bachelor\'s Degree' },
    { value: 'masters', label: 'Master\'s Degree' },
    { value: 'phd', label: 'Ph.D.' }
  ]
}
```

### 3. Scale Question
```typescript
{
  type: 'scale',
  label: 'How satisfied are you with your current role?',
  description: 'Rate from 1 to 5',
  required: true,
  min: 1,
  max: 5,
  minLabel: 'Not Satisfied',
  maxLabel: 'Very Satisfied'
}
```

### 4. Date Question
```typescript
{
  type: 'date',
  label: 'When did you start your current position?',
  description: 'Select the start date',
  required: true
}
```

## Complete Example

```typescript
const BaselineSurvey = createSurvey({
  id: 'baseline-assessment',
  title: 'Baseline Assessment',
  config: {
    autoSave: { enabled: true, interval: 5000 },
    progress: { enabled: true, storage: 'local' },
    navigation: { allowBack: true, allowSkip: false }
  },
  questions: [
    {
      type: 'text',
      label: 'What is your current occupation?',
      required: true,
      placeholder: 'Enter your job title'
    },
    {
      type: 'scale',
      label: 'How satisfied are you with your current role?',
      required: true,
      min: 1,
      max: 5,
      minLabel: 'Not Satisfied',
      maxLabel: 'Very Satisfied'
    },
    {
      type: 'multipleChoice',
      label: 'Select your highest level of education',
      required: true,
      options: [
        { value: 'highschool', label: 'High School' },
        { value: 'bachelors', label: 'Bachelor\'s Degree' },
        { value: 'masters', label: 'Master\'s Degree' },
        { value: 'phd', label: 'Ph.D.' }
      ]
    }
  ],
  startScreen: {
    title: 'Welcome to the Assessment',
    description: 'Please answer all questions honestly.',
    startButtonText: 'Begin Assessment',
    logoUrl: '/assets/logo.png'
  },
  endScreen: {
    title: 'Assessment Complete',
    description: 'Thank you for your participation.',
    returnButtonText: 'Return to Dashboard',
    logoUrl: '/assets/logo.png'
  }
});

export default BaselineSurvey;
```

## Key Features

1. **One Question Per Page**: Questions are automatically displayed one at a time.
2. **Progress Tracking**: Shows progress bar and current question number.
3. **Auto-save**: Automatically saves responses at specified intervals.
4. **Navigation**: Back/Next buttons with optional skip functionality.
5. **Validation**: Built-in validation for required fields and specific question types.
6. **Theming**: Uses MindModel theme for consistent styling.
7. **Logo Support**: Optional logo display on start and end screens.

## Notes for AI Assistant

1. Always use `createSurvey` from '@mindmodel/survey' for new surveys.
2. Question types must match exactly: 'text', 'multipleChoice', 'scale', 'date'.
3. Use `label` instead of `title` for question text.
4. Multiple choice options must include both `value` and `label`.
5. Scale questions require `min`, `max`, and optional `minLabel`/`maxLabel`.
6. The return button on the end screen appears when both `returnButtonText` and `onReturn` are provided.
7. Logo URLs should be relative to the public assets directory. 