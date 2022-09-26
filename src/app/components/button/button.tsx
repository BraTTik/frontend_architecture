import React from "react";
import { IButton } from "interfaces"

export const Button = (props: IButton) => {
    const { onClick, content, type = "button" } = props;

    return <button type={type} onClick={onClick}>{content}</button>
}
