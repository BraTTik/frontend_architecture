import {ReactNode} from "react";

export type TabSwitchProps<T extends string | number> = {
    value: T;
    children: ReactNode;
}
