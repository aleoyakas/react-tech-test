import { useState } from "react";
import Typography from "../../components/Typography";
import HomePageTabEnum from "../HomePageTabs/models/HomePageTabEnum";
import HomePageTabs from "../HomePageTabs/HomePageTabs";
import Random from "../../pages/Random";
import Breed from "../../pages/Breed";
import classes from "./styles.module.css";

function App() {
  const [activeTabId, setActiveTabId] = useState<HomePageTabEnum>(
    HomePageTabEnum.Random
  );

  return (
    <>
      <div className={classes["header"]}>
        <div className={classes["header--heading"]}>
          <Typography component="h1">Pictures of Dogs!</Typography>
        </div>
      </div>
      <HomePageTabs activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      {activeTabId === HomePageTabEnum.Random && <Random />}
      {activeTabId === HomePageTabEnum.Breed && <Breed />}
    </>
  );
}

export default App;
