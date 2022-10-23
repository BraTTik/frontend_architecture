import React from "react";
import { IButton } from "interfaces"

interface IButtonProps extends IButton {
    className?: string
}

const defaultButtonType = "button" as const;

export const Button = (props: IButtonProps) => {
    const { onClick, content, type = defaultButtonType, className } = props;

    return <button className={className} type={type} onClick={onClick}>{content}</button>
}
