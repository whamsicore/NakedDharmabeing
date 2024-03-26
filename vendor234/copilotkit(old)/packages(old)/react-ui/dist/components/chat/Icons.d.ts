import React from 'react';

declare const OpenIcon: JSX.Element;
declare const CloseIcon: JSX.Element;
declare const HeaderCloseIcon: JSX.Element;
declare const SendIcon: JSX.Element;
declare const SpinnerIcon: JSX.Element;
declare const ActivityIcon: JSX.Element;
declare function CheckIcon({ className, ...props }: React.ComponentProps<"svg">): JSX.Element;
declare function DownloadIcon({ className, ...props }: React.ComponentProps<"svg">): JSX.Element;
declare function CopyIcon({ className, ...props }: React.ComponentProps<"svg">): JSX.Element;
declare const StopIcon: JSX.Element;
declare const RegenerateIcon: JSX.Element;

export { ActivityIcon, CheckIcon, CloseIcon, CopyIcon, DownloadIcon, HeaderCloseIcon, OpenIcon, RegenerateIcon, SendIcon, SpinnerIcon, StopIcon };
