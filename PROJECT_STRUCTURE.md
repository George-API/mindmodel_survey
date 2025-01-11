# MindModel Survey Library Structure

This document outlines the structure and purpose of each component in the MindModel Survey library.

## Core Files

- `index.tsx` - Main entry point for the React application
- `index.ts` - Library entry point, exports all public components and utilities
- `App.tsx` - Root component for development/testing environment
- `setupTests.ts` - Test configuration and global test utilities

## Directory Structure

### `/components`
Main components directory:
- `/survey` - Survey-specific components and layouts
  - `Survey.tsx` - Main survey component
  - `QuestionRegistry.tsx` - Question type registry and rendering
- `/questions` - Question type implementations (see Question Components section)

### `/hooks`
Custom React hooks:
- `useSurvey.ts` - Core survey state management and form handling (validation, answers, errors)
- `useSurveyRunner.ts` - Survey progress and navigation logic (current question, navigation, completion)

### `/types`
TypeScript type definitions:
- `survey.types.ts` - Comprehensive type definitions including:
  - Question interfaces (TextQuestion, ChoiceQuestion, etc.)
  - Survey configuration types
  - Response and validation types
  - Navigation and progress types

### `/utils`
Core utility functions:
- `createSurvey.ts` - Survey creation and configuration utility
- `surveyRunner.ts` - Survey state management and navigation logic
- `validation.ts` - Form validation rules and helpers

### `/theme`
Material-UI theme customization:
- Theme configuration
- Style overrides
- Common styles

### `/pages`
Page components for the survey flow:
- `SurveyStartPage.tsx` - Initial welcome/start screen
- `SurveyEndPage.tsx` - Survey completion screen
- `ComponentPreview.tsx` - Development preview of components

## Key Components

### Survey Components
- `Survey.tsx` - Main survey component that:
  - Renders survey sections and questions
  - Handles form state and validation
  - Manages question rendering through QuestionRegistry
  - Provides submission handling

### Question Components
All located in `/components/questions/`:
- `BaseQuestion.tsx` - Base question component with common functionality
- `TextQuestion.tsx` - Free text input questions
- `MultipleChoiceQuestion.tsx` - Single/multiple choice questions
- `DateQuestion.tsx` - Date picker input
- `ScaleQuestion.tsx` - Numeric scale questions
- `MatrixQuestion.tsx` - Grid/matrix style questions
- `ImageChoiceQuestion.tsx` - Image-based choice questions
- `ChoiceCard.tsx` - Reusable choice option component

## Core Logic Files

### Survey Creation and Management
- `createSurvey.ts` - Creates configured survey instances with:
  - Survey definition setup
  - Theme configuration
  - Event handlers
  - State management integration

### State Management
- `surveyRunner.ts` - Manages survey state including:
  - Question progression
  - Answer storage
  - Navigation state
  - Completion tracking

### Form Management
- `useSurvey.ts` - Hook for form state including:
  - Answer management
  - Validation
  - Error handling
  - Form submission

## Usage

The library is designed to be used through the Survey component:

```typescript
import { Survey } from '@mindmodel/survey';

const MySurvey = () => (
  <Survey
    survey={{
      metadata: {
        id: 'my-survey',
        title: 'My Survey',
        version: '1.0'
      },
      sections: [{
        id: 'main',
        title: 'Survey Questions',
        questions: [
          {
            id: 'q1',
            type: 'text',
            label: 'Your answer',
            validation: { required: true }
          }
          // ... more questions
        ]
      }]
    }}
    onSubmit={async (values) => {
      // Handle survey submission
      console.log(values);
    }}
  />
);
```

## Development

- `npm run dev` - Starts development server (http://localhost:3333)
- `npm run build` - Builds the library
- `npm run type-check` - Runs TypeScript type checking 