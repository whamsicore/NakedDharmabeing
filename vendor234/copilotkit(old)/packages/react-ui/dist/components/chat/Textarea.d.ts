import React from 'react';

interface AutoResizingTextareaProps {
    maxRows?: number;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    autoFocus?: boolean;
}
declare const AutoResizingTextarea: React.ForwardRefExoticComponent<AutoResizingTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export { AutoResizingTextarea as default };
