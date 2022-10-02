import React, {useCallback} from "react";

export const useRefAssign = <T extends HTMLElement>(outerRef: React.ForwardedRef<T>) => {
    const localRef = React.useRef<T>(null);

    const assignRef = useCallback((node: T | null) => {
        if (node) {
            localRef.current = node;
            if (typeof outerRef === "function") {
                outerRef(node);
            } else {
                outerRef.current = node;
            }
        }
    },[]);

    return [localRef, assignRef] as const
}
