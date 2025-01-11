# Mind Model Survey Library

A powerful, type-safe React survey library that handles form management, validation, progress tracking, and auto-save capabilities through a single import.

## Features

- 🎯 Type-safe survey creation with single import
- 📝 Built-in form state management
- 💾 Progress tracking & auto-save
- ✅ Validation system
- 🎨 Customizable theming
- 📱 Responsive UI
- 📊 One question per page with progress tracking

## Quick Start

```bash
npm install @mindmodel/survey
# or
yarn add @mindmodel/survey
```

## Usage

The library is designed for simplicity - you only need to import `createSurvey` and define your survey:

```typescript
import { createSurvey } from '@mindmodel/survey';

const { Survey } = createSurvey({
  id: 'feedback-survey',
  title: 'Customer Feedback',
  config: {
    // Auto-save configuration
    autoSave: {
      enabled: true,
      interval: 30000, // Save every 30 seconds
      handler: async (response) => {
        await saveToDB(response);
      }
    },
    // Validation rules
    validation: {
      'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Invalid email format' }
      ]
    },
    // Progress tracking
    progress: {
      enabled: true,
      storage: 'local'
    }
  },
  questions: [
    {
      id: 'email',
      type: 'text',
      title: 'Your Email',
      description: 'We\'ll use this to follow up',
      required: true
    },
    {
      id: 'satisfaction',
      type: 'scale',
      title: 'How satisfied are you?',
      min: 1,
      max: 5,
      required: true
    }
  ],
  onSubmit: async (answers) => {
    await submitSurvey(answers);
  }
});

// Use in your app
export default Survey;
```

## How It Works

The `createSurvey` function handles everything internally:

1. **Form Management**
   - Automatic state management
   - Answer validation
   - Progress tracking
   - Auto-save functionality

2. **Navigation**
   - One question per page
   - Progress bar
   - Back/Next navigation
   - Submit handling

3. **Data Handling**
   - Local storage for progress
   - Validation on each step
   - Auto-save to server
   - Final submission

## Configuration Options

```typescript
interface CreateSurveyOptions {
  // Required
  id: string;
  questions: Question[];
  
  // Optional
  title?: string;
  config?: {
    autoSave?: {
      enabled: boolean;
      interval?: number;
      handler?: (response: SurveyResponse) => Promise<void>;
    };
    validation?: Record<string, ValidationRule[]>;
    progress?: {
      enabled: boolean;
      storage?: 'local' | 'session' | 'none';
    };
  };
  theme?: Theme;
  onSubmit?: (answers: Record<string, any>) => Promise<void>;
  onChange?: (questionId: string, value: any) => void;
}
```

## Question Types

Supported question types:
- `text` - Text input
- `multipleChoice` - Single/multiple selection
- `scale` - Numeric scale
- `boolean` - Yes/No questions
- `rating` - Star rating
- `matrix` - Grid questions

## Best Practices

1. **Survey Organization**
   - Create one file per survey
   - Keep questions in a separate constant
   - Use TypeScript for type safety

2. **Validation**
   - Define validation rules in the config
   - Use built-in rules when possible
   - Add custom validation when needed

3. **Auto-save**
   - Enable for longer surveys
   - Implement robust save handler
   - Choose appropriate storage strategy

## Example Survey File

```typescript
// surveys/feedbackSurvey.tsx
import { createSurvey } from '@mindmodel/survey';

const questions = [
  {
    id: 'name',
    type: 'text',
    title: 'Your Name',
    required: true
  },
  {
    id: 'feedback',
    type: 'text',
    title: 'Your Feedback',
    multiline: true,
    required: true
  }
];

const { Survey } = createSurvey({
  id: 'feedback',
  title: 'Feedback Form',
  questions,
  config: {
    autoSave: { enabled: true },
    validation: {
      name: [{ type: 'required', message: 'Name is required' }]
    }
  },
  onSubmit: async (answers) => {
    await api.submitFeedback(answers);
  }
});

export default Survey;
```

## License

MIT