import React from "react";
import cn from "classnames";
import {Button} from "app/components/button";
import { ModalProps } from "./modal.types";
import "./modal.scss";

export const Modal = React.forwardRef<HTMLDialogElement, React.PropsWithChildren<ModalProps>>((props, ref) => {
    const { children, isOpen, className } = props;

    React.useEffect(() =>{
        if (typeof ref !== "function" && ref.current && typeof isOpen === "boolean") {
            isOpen ? ref.current.close() : ref.current.showModal();
        }
    }, [isOpen]);

    const handleClose = () => {
        if (typeof ref !== "function" && ref.current) {
            ref.current.close();
        }
    }

    return (
        <dialog ref={ref} className={cn("modal", className)}>
            <Button onClick={handleClose} content="X" />
            { children }
        </dialog>
    );
});
