import React from "react";

export interface IInput {
    onChange: (event: React.MouseEvent<HTMLInputElement>) => void;
    value: string;
}

export interface LabeledInput extends IInput {
    id: string;
    label: string;
}
