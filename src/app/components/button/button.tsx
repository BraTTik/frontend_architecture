import React from "react";
import { IButton } from "interfaces"

export const Button = (props: WithClassName<IButton>) => {
    const { onClick, content, type = "button", className } = props;

    return <button className={className} type={type} onClick={onClick}>{content}</button>
}
