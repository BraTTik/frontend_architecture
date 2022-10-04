import React from "react";
import cn from "classnames";
import {Button} from "app/components/button";
import { ModalProps } from "./modal.types";
import "./modal.scss";
import {useRefAssign} from "app/shared";

interface LegacyHTMLDialogElement extends HTMLDialogElement {
    showModal:() => void;
    close:() => void;
}

export const Modal: React.FC<ModalProps> = ({ children, className, onClose }) => {
    const modalRef = React.useRef<LegacyHTMLDialogElement>(null);

    React.useLayoutEffect( () => {
        modalRef.current.showModal();
    }, []);

    const handleClose = () => {
        modalRef.current.close();
        onClose();
    }

    return (
        <dialog ref={modalRef} className={cn("modal", className)}>
            <Button className="modal__close-button" onClick={handleClose} content="X" />
            { children }
        </dialog>
    );
}
