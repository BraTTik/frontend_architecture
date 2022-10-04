import {ReactNode} from "react";

export type ModalProps = {
    className?: string;
    onClose?: () => void;
    children: ReactNode;
}
