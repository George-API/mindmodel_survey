import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  Typography,
  useTheme,
} from '@mui/material';
import { BaseQuestion } from './BaseQuestion';
import { MatrixQuestion as MatrixQuestionType } from '../../types/survey.types';

interface MatrixQuestionProps extends MatrixQuestionType {
  value: Record<string, number>;
  onChange: (value: Record<string, number>) => void;
  error?: string;
}

export const MatrixQuestion: React.FC<MatrixQuestionProps> = ({
  value = {},
  onChange,
  statements = [],
  scale = 5,
  scaleLabels,
  error,
  ...baseProps
}) => {
  const theme = useTheme();

  const handleChange = (statement: string, rating: number) => {
    onChange({ ...value, [statement]: rating });
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return;
      
      const keyNumber = parseInt(event.key);
      if (keyNumber > 0 && keyNumber <= scale) {
        const focusedRow = document.querySelector('tr:hover');
        if (focusedRow) {
          const statement = focusedRow.getAttribute('data-statement');
          if (statement) {
            handleChange(statement, keyNumber);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [scale, handleChange]);

  if (!statements || statements.length === 0) {
    return (
      <BaseQuestion {...baseProps} error={error || 'No statements provided'}>
        <Typography color="error">No statements available for this matrix.</Typography>
      </BaseQuestion>
    );
  }

  return (
    <BaseQuestion {...baseProps} error={error}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell 
                sx={{ 
                  width: '40%',
                  backgroundColor: theme.palette.background.default,
                  fontWeight: 500,
                }}
              >
                Statement
              </TableCell>
              {Array.from({ length: scale }, (_, i) => i + 1).map((rating) => (
                <TableCell 
                  key={rating} 
                  align="center"
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    fontWeight: 500,
                    minWidth: '80px',
                  }}
                >
                  {rating === 1 && scaleLabels?.start && (
                    <Typography 
                      variant="caption" 
                      display="block"
                      sx={{ mb: 0.5, color: 'text.secondary' }}
                    >
                      {scaleLabels.start}
                    </Typography>
                  )}
                  {rating}
                  {rating === scale && scaleLabels?.end && (
                    <Typography 
                      variant="caption" 
                      display="block"
                      sx={{ mt: 0.5, color: 'text.secondary' }}
                    >
                      {scaleLabels.end}
                    </Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {statements.map((statement, index) => (
              <TableRow
                key={index}
                data-statement={statement}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.selected,
                  },
                }}
              >
                <TableCell 
                  component="th" 
                  scope="row"
                  sx={{ 
                    verticalAlign: 'middle',
                    lineHeight: 1.5,
                  }}
                >
                  {statement}
                </TableCell>
                {Array.from({ length: scale }, (_, i) => i + 1).map((rating) => (
                  <TableCell 
                    key={rating} 
                    align="center" 
                    padding="none"
                    sx={{
                      transition: theme.transitions.create('background-color'),
                    }}
                  >
                    <Radio
                      checked={value[statement] === rating}
                      onChange={() => handleChange(statement, rating)}
                      value={rating}
                      name={`matrix-${index}`}
                      size="small"
                      sx={{
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseQuestion>
  );
};
