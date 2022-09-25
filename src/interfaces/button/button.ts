import React from "react";

export interface IButton {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    content: React.ReactNode;
}
