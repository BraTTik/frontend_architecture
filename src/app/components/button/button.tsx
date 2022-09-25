import React from "react";
import { IButton } from "interfaces"

export const Button = (props: IButton) => {
    const { onClick, content } = props;

    return <button onClick={onClick}>{content}</button>
}
