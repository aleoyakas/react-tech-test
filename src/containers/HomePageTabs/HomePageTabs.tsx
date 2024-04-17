import { FC } from "react";
import Tabs from "../../components/Tabs";
import HomePageTabEnum from "./models/HomePageTabEnum";

const TABS = [
  { id: HomePageTabEnum.Random, label: "Random" },
  { id: HomePageTabEnum.Breed, label: "Breed" },
];

type Props = {
  activeTabId: HomePageTabEnum;
  setActiveTabId: (newActiveTabId: HomePageTabEnum) => void;
};

const HomePageTabs: FC<Props> = ({ activeTabId, setActiveTabId }) => {
  const onTabClick = (tabId: string | number) => {
    if (!(tabId in HomePageTabEnum)) {
      throw new Error("Cannot set HomePageTab. TabId provided: " + tabId);
    }

    setActiveTabId(tabId as HomePageTabEnum);
  };

  return (
    <Tabs tabs={TABS} activeTabId={activeTabId} setActiveTabId={onTabClick} />
  );
};

export default HomePageTabs;
