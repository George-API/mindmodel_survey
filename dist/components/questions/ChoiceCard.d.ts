import React from 'react';
interface ChoiceCardProps {
    label: string;
    selected: boolean;
    onClick: () => void;
    type: 'radio' | 'checkbox';
    index: number;
}
export declare const ChoiceCard: React.FC<ChoiceCardProps>;
export {};
