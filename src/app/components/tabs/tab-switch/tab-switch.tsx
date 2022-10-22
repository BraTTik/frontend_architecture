import React from "react";
import { TabSwitchProps } from "./types";
import { Tab } from "./tab";

export const TabSwitch: React.FC<TabSwitchProps> = (props ) => {
    const child: React.ReactNode = React.Children.toArray(props.children).find((child) => {
        if (React.isValidElement(child) && child.type === Tab && child.props.value === props.value) {
            return child;
        }
    })
    return <>{child ? child : null}</>;
}

