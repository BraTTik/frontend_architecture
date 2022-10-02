import React from "react";
import cn from "classnames";
import {Button} from "app/components/button";
import { ModalProps } from "./modal.types";
import "./modal.scss";
import {useRefAssign} from "app/shared";

export const Modal = React.forwardRef<HTMLDialogElement, React.PropsWithChildren<ModalProps>>((props, ref) => {
    const { children, isOpen, className, onClose } = props;
    const [modalRef, assignRef] = useRefAssign(ref);

    React.useEffect(() =>{
        if (modalRef.current && typeof isOpen === "boolean") {
            isOpen && !modalRef.current.open ? modalRef.current.showModal() : modalRef.current.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        if (typeof ref !== "function" && modalRef.current) {
            modalRef.current.close();
            onClose();
        }
    }

    return (
        <dialog ref={assignRef} className={cn("modal", className)}>
            <Button className="modal__close-button" onClick={handleClose} content="X" />
            { children }
        </dialog>
    );
});
