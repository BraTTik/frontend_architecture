import React from "react";
import "./app-container.scss";

export const AppContainer = ({ children }: React.PropsWithChildren) => {
    return <div className="app-container">{children}</div>
}
