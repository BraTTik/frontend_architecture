import React from "react";
import cn from "classnames";
import {Button} from "app/components/button";
import { ModalProps } from "./modal.types";
import "./modal.scss";

export const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    const { children, isOpen, className, onClose } = props;
    const modalRef = React.useRef<HTMLDialogElement>(null)

    const handleClose = React.useCallback(() => {
        if (modalRef.current) {
            modalRef.current.close();
            onClose?.();
        }
    }, [onClose])

    React.useEffect(() =>{
        if (modalRef.current) {
            isOpen && !modalRef.current.open ? modalRef.current.showModal() : handleClose();
        }
    }, [isOpen, handleClose]);

    return (
        <dialog ref={modalRef} className={cn("modal", className)}>
            <Button className="modal__close-button" onClick={handleClose} content="X" />
            { children }
        </dialog>
    );
};
