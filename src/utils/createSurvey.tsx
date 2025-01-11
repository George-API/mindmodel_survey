import React, { useState, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { ThemeProvider, Box, CircularProgress, Container } from '@mui/material';
import { Survey } from '../components/survey/Survey';
import { renderQuestion } from '../components/survey/QuestionRegistry';
import { SurveyStartPage } from '../pages/SurveyStartPage';
import { SurveyEndPage } from '../pages/SurveyEndPage';
import theme from '../theme/theme';
import { validateField } from '../utils/validation';
import { useSurvey } from '../hooks/useSurvey';
import { useSurveyRunner } from '../hooks/useSurveyRunner';
import { SurveyRunner } from '../utils/surveyRunner';
import type { 
  SurveyConfig, 
  Question,
  QuestionValue,
  SurveyDefinition,
  ValidationRule,
  SurveyResponse,
  ScreenConfig
} from '../types/survey.types';

export type { Question, QuestionValue, SurveyConfig, ScreenConfig };

export interface CreateSurveyOptions {
  id: string;
  title?: string;
  config: {
    autoSave?: {
      enabled: boolean;
      interval?: number;
      handler?: (response: Partial<SurveyResponse>) => Promise<void>;
    };
    validation?: Record<string, ValidationRule[]>;
    progress?: {
      enabled: boolean;
      storage?: 'local' | 'session' | 'none';
      showProgressBar?: boolean;
      showQuestionCount?: boolean;
    };
    navigation?: {
      allowSkip?: boolean;
      allowBack?: boolean;
      autoAdvance?: boolean;
    };
  };
  questions: Question[];
  theme?: typeof theme;
  startScreen?: ScreenConfig;
  endScreen?: ScreenConfig;
  onSubmit?: (answers: Record<string, QuestionValue>) => Promise<void>;
  onChange?: (questionId: string, value: QuestionValue) => void;
  onStart?: () => void;
  onComplete?: () => void;
  onReturn?: () => void;
}

export interface CreateSurveyResult {
  Survey: FC;
  definition: SurveyDefinition;
  runner: SurveyRunner;
}

export const createSurvey = (options: CreateSurveyOptions): CreateSurveyResult => {
  const surveyDefinition: SurveyDefinition = {
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
    }],
    config: options.config
  };

  const runner = new SurveyRunner(
    surveyDefinition,
    'default-user',
    {
      autoSave: options.config.autoSave?.enabled,
      autoSaveInterval: options.config.autoSave?.interval,
      onSaveProgress: async (response) => {
        try {
          await options.config.autoSave?.handler?.(response);
        } catch (error) {
          console.error('Auto-save failed:', error);
        }
      }
    }
  );

  const WrappedSurveyComponent: FC = () => {
    const [screen, setScreen] = useState<'start' | 'questions' | 'end'>(
      options.startScreen ? 'start' : 'questions'
    );
    
    const [isLoading, setIsLoading] = useState(true);
    const [autoSaveError, setAutoSaveError] = useState<string | null>(null);

    useEffect(() => {
      const init = async () => {
        try {
          if (options.config.progress?.enabled) {
            const savedResponse = runner.getCurrentResponse();
            if (savedResponse.answers) {
              // Restore progress
              const progress = runner.getProgress();
              if (progress === 100) {
                setScreen('end');
              }
            }
          }
        } finally {
          setIsLoading(false);
        }
      };
      init();

      return () => {
        runner.stopAutoSave();
      };
    }, []);

    const handleStart = () => {
      setScreen('questions');
      options.onStart?.();
    };

    const handleComplete = async (values: Record<string, QuestionValue>) => {
      try {
        await options.onSubmit?.(values);
        setScreen('end');
        options.onComplete?.();
        
        if (options.config.progress?.enabled) {
          const storageType = options.config.progress.storage || 'local';
          if (storageType !== 'none') {
            window[`${storageType}Storage`].removeItem(`survey_${options.id}`);
          }
        }
      } catch (error) {
        console.error('Survey submission failed:', error);
      }
    };

    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <CircularProgress />
        </Box>
      );
    }

    if (screen === 'start' && options.startScreen) {
      return (
        <ThemeProvider theme={options.theme || theme}>
          <SurveyStartPage 
            title={options.startScreen.title}
            description={options.startScreen.description}
            startButtonText={options.startScreen.startButtonText}
            onStart={handleStart}
          />
        </ThemeProvider>
      );
    }

    if (screen === 'end' && options.endScreen) {
      return (
        <ThemeProvider theme={options.theme || theme}>
          <SurveyEndPage 
            title={options.endScreen.title}
            description={options.endScreen.description}
            returnButtonText={options.endScreen.returnButtonText}
            onReturn={options.onReturn}
          />
        </ThemeProvider>
      );
    }

    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <ThemeProvider theme={options.theme || theme}>
          <Box sx={{ position: 'relative' }}>
            <Survey
              survey={surveyDefinition}
              onSubmit={handleComplete}
            />
            {autoSaveError && (
              <Box sx={{ 
                position: 'fixed', 
                bottom: 16, 
                right: 16, 
                bgcolor: 'error.main',
                color: 'error.contrastText',
                p: 2,
                borderRadius: 1
              }}>
                {autoSaveError}
              </Box>
            )}
          </Box>
        </ThemeProvider>
      </Container>
    );
  };

  WrappedSurveyComponent.displayName = `Survey_${options.id}`;

  return {
    Survey: WrappedSurveyComponent,
    definition: surveyDefinition,
    runner
  };
};