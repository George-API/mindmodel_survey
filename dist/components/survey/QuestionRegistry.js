import { jsx as _jsx } from "react/jsx-runtime";
import { ScaleQuestion } from '../questions/ScaleQuestion';
import { MultipleChoiceQuestion } from '../questions/MultipleChoiceQuestion';
import { TextQuestion } from '../questions/TextQuestion';
import { ImageChoiceQuestion } from '../questions/ImageChoiceQuestion';
import { DateQuestion } from '../questions/DateQuestion';
import { MatrixQuestion } from '../questions/MatrixQuestion';
export const renderQuestion = ({ question, value, onChange, error, previewMode = false, }) => {
    switch (question.type) {
        case 'scale':
            return (_jsx(ScaleQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        case 'multipleChoice':
            return (_jsx(MultipleChoiceQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        case 'text':
            return (_jsx(TextQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        case 'imageChoice':
            return (_jsx(ImageChoiceQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        case 'date':
            return (_jsx(DateQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        case 'matrix':
            return (_jsx(MatrixQuestion, { ...question, value: value, onChange: onChange, error: error, previewMode: previewMode }));
        default:
            return null;
    }
};
