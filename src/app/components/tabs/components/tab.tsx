import React from "react";
import cn from "classnames";
import { TabProps } from "../types";

export const Tab: React.FC<TabProps> = (props) => {
    const { isSelected, id, onClick, title } = props

    const handleClick = () => {
        onClick(id);
    }

    return <button type="button" className={cn("tab", isSelected && "tab__selected")} onClick={handleClick}>{title}</button>
}
