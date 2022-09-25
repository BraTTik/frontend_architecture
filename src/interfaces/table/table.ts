import React from "react";

type ColumnConfig = {
    id: string;
    title: string;
    width: number;
}

type TableHeader<T extends object> = Record<keyof T, ColumnConfig>;

export interface Table <T extends object>{
    data: T[];
    header: TableHeader<T>;
    rowRenderer: (props: { element: T, index: number, data: T[], columnConfig: ColumnConfig }) => React.ReactElement;
}
