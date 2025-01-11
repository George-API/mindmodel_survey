import { jsx as _jsx } from "react/jsx-runtime";
import { Survey } from '../components/Survey';
import { feedbackSurvey } from './feedback-survey';
import { feedbackConfig } from './feedback-config';
export const ExampleApp = () => {
    return (_jsx("div", { style: { width: '100vw', height: '100vh' }, children: _jsx(Survey, { definition: feedbackSurvey, config: feedbackConfig }) }));
};
