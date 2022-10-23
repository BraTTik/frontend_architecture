import React from "react";
import {TabSwitchProps} from "./types";

export const Tab:<T extends (string | number)>(props: TabSwitchProps<T>) => React.ReactElement  = ({children}: {children: React.ReactNode}) => {
    return <>{children}</>
}
