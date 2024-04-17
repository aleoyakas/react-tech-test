import { FC } from "react";
import Button from "../Tab";
import ITab from "./models/ITab";
import checkPropertiesUnique from "../../utils/checkPropertiesAreUnique";

type Props = {
  activeTabId: string | number;
  setActiveTabId: (newActiveTabId: string | number) => void;
  tabs: ITab[];
};

const Tabs: FC<Props> = ({ activeTabId: activeTab, setActiveTabId, tabs }) => {
  const areIdsUnique = checkPropertiesUnique(tabs, "id");
  if (!areIdsUnique) {
    throw new Error("Tab Ids are invalid");
  }

  return (
    <div>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => setActiveTabId(tab.id)}
          isActive={activeTab === tab.id}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
