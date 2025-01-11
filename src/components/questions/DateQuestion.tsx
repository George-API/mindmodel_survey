import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { BaseQuestion } from './BaseQuestion';
import { DateQuestion as DateQuestionType } from '../../types/survey.types';

interface DateQuestionProps extends DateQuestionType {
  value: Date | null;
  onChange: (value: Date | null) => void;
  error?: string;
}

export const DateQuestion: React.FC<DateQuestionProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disablePast,
  disableFuture,
  error,
  ...baseProps
}) => {
  return (
    <BaseQuestion {...baseProps} error={error}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={(newValue) => {
            onChange(newValue ? newValue.toDate() : null);
          }}
          minDate={minDate ? dayjs(minDate) : undefined}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
          disablePast={disablePast}
          disableFuture={disableFuture}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!error,
              helperText: error,
            },
          }}
        />
      </LocalizationProvider>
    </BaseQuestion>
  );
};
