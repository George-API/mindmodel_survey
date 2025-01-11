import { jsx as _jsx } from "react/jsx-runtime";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { BaseQuestion } from './BaseQuestion';
export const DateQuestion = ({ value, onChange, minDate, maxDate, disablePast, disableFuture, error, ...baseProps }) => {
    return (_jsx(BaseQuestion, { ...baseProps, error: error, children: _jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(DatePicker, { value: value ? dayjs(value) : null, onChange: (newValue) => {
                    onChange(newValue ? newValue.toDate() : null);
                }, minDate: minDate ? dayjs(minDate) : undefined, maxDate: maxDate ? dayjs(maxDate) : undefined, disablePast: disablePast, disableFuture: disableFuture, slotProps: {
                    textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error,
                    },
                } }) }) }));
};
