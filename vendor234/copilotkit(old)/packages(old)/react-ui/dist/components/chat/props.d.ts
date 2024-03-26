import { Message } from '@copilotkit/shared';

interface ButtonProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
interface WindowProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    clickOutsideToClose: boolean;
    hitEscapeToClose: boolean;
    shortcut: string;
    children?: React.ReactNode;
}
interface HeaderProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
interface MessagesProps {
    messages: Message[];
    inProgress: boolean;
}
interface InputProps {
    inProgress: boolean;
    onSend: (text: string) => void;
    children?: React.ReactNode;
}
interface ResponseButtonProps {
    onClick: () => void;
    inProgress: boolean;
}

export { ButtonProps, HeaderProps, InputProps, MessagesProps, ResponseButtonProps, WindowProps };
