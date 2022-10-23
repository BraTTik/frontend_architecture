import React from "react";
import { TabsProps } from "app/components/tabs/types";
import { Tab } from "./components";

export const Tabs: React.FC<TabsProps> = (props) => {
    const { tabs, onClick, selectedTab } = props;

    return <div>
        {
            tabs.map(item => (
                <Tab
                    key={`${item.id}--tab`}
                    id={item.id}
                    isSelected={selectedTab === item.id}
                    onClick={onClick}
                    title={item.title}
                />
            ))}
    </div>
}
