import { useEffect, useState } from "react";
import "./App.css";
import heroesData from "./data/heroes.json";
import itemData from "./data/items.json";
import HeroImage from "./components/HeroImage/HeroImage";
import ItemsGrid from "./components/ItemsGrid/ItemsGrid";

function App() {
  const HERO_INFO = heroesData;
  const ITEM_INFO = itemData;
  const NUMBER_OF_ITEMS = 6;

  const [historyOfBuilds, setHistoryOfBuilds] = useState([
    { hero: {}, items: [] },
  ]);
  const [cursor, setCursor] = useState(historyOfBuilds.length - 1);

  useEffect(() => {
    setCursor(historyOfBuilds.length - 1);
  }, [historyOfBuilds]);

  useEffect(() => {
    setHistoryOfBuilds([
      { hero: getRandomHero(HERO_INFO), items: getRandomItem(ITEM_INFO) },
    ]);
  }, []);

  const getRandomHero = (list) => {
    const newRandomHero = list[Math.floor(Math.random() * list.length)];
    return newRandomHero;
  };

  const getRandomItem = (list) => {
    const listOfRandomItems = [];
    for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
      const randomItem = list[Math.floor(Math.random() * list.length)];
      if (listOfRandomItems.find((item) => item.id === randomItem.id)) {
        i--;
      } else {
        listOfRandomItems.push(randomItem);
      }
    }
    return listOfRandomItems;
  };

  const getRandomBuild = (newHero, newItems) => {
    const newBuild = { hero: newHero, items: newItems };
    setHistoryOfBuilds((prev) => [...prev, newBuild]);
  };

  const cursorBack = () => {
    if (cursor - 1 < 0) {
      console.log("Erorr");
    } else {
      setCursor((prev) => prev - 1);
    }
  };

  const cursorNext = () => {
    if (cursor + 1 >= historyOfBuilds.length) {
      console.log("Erorr");
    } else {
      setCursor((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <div className="build">
        <HeroImage hero={historyOfBuilds[cursor].hero} />
        <ItemsGrid items={historyOfBuilds[cursor].items} />
        </div>
        <div className="button-group">
          <button onClick={cursorBack} className={"button-back"}>
            Previos
          </button>
          <button onClick={cursorNext} className={"button-back"}>
            Next
          </button>
          <button
            onClick={() => {
              getRandomBuild(
                getRandomHero(HERO_INFO),
                getRandomItem(ITEM_INFO)
              );
            }}
          >
            Get new build
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
