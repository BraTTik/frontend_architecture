import React from "react";

type ColumnId = string;

type ColumnConfig = {
    title: string;
    width: number;
}

type TableHeader = Record<ColumnId, ColumnConfig>;

export interface Table <T extends object>{
    data: T[];
    header: TableHeader;
    rowRenderer: (props: { item: T, index: number, data: T[], headerConfig: TableHeader }) => React.ReactElement;
}
