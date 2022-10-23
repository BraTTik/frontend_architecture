export type TabsProps = {
    selectedTab: string | number;
    children?: React.ReactNode;
    tabs: Tab[];
    onClick: (id: string | number) => void;
}

export type Tab = {
    id:  string | number;
    title: React.ReactNode;
}

export type TabProps =  {
    isSelected: boolean;
    onClick: (id: string | number) => void;
} & Tab

