import { blankMonData, MonStats } from "../models/Mon";

export const checkForExistingDataInStorage = (): boolean => {
  const myStorage = window.localStorage;

  let validStorage = true;

  // TODO: Abstract these keys
  const localStorageKeys = [
    "name",
    "level",
    "formality",
    "curiousity",
    "creativity",
    "compassion",
  ];

  localStorageKeys.forEach((key: string) => {
    // TODO: Validation on local storage values
    if (myStorage.getItem(key) === null) {
      validStorage = false;
    }
  });

  return validStorage;
};

export const setMonNameInStorage = (name: string) => {
  const myStorage = window.localStorage;

  myStorage.setItem("name", name);
};

export const setMonStatsInStorage = (stats: MonStats) => {
  const myStorage = window.localStorage;

  myStorage.setItem("level", stats.level.toString());
  myStorage.setItem("formality", stats.formality.toString());
  myStorage.setItem("curiousity", stats.curiousity.toString());
  myStorage.setItem("creativity", stats.creativity.toString());
  myStorage.setItem("compassion", stats.compassion.toString());
};

export const addToMonStatsInStorage = (stats: MonStats) => {
  const myStorage = window.localStorage;

  const storageMonData = getMonStatsAsIntFromStorage();

  myStorage.setItem("level", (storageMonData.level + stats.level).toString());
  myStorage.setItem(
    "formality",
    (storageMonData.formality + stats.formality).toString()
  );
  myStorage.setItem(
    "curiousity",
    (storageMonData.curiousity + stats.curiousity).toString()
  );
  myStorage.setItem(
    "creativity",
    (storageMonData.creativity + stats.creativity).toString()
  );
  myStorage.setItem(
    "compassion",
    (storageMonData.compassion + stats.compassion).toString()
  );
};

export const getMonStatsAsIntFromStorage = (): MonStats => {
  const myStorage = window.localStorage;

  let monStats: MonStats = blankMonData.stats;

  try {
    monStats = {
      level: parseInt(myStorage.getItem("level") as string),
      formality: parseInt(myStorage.getItem("formality") as string),
      curiousity: parseInt(myStorage.getItem("curiousity") as string),
      creativity: parseInt(myStorage.getItem("creativity") as string),
      compassion: parseInt(myStorage.getItem("compassion") as string),
    };
  } catch (e) {
    console.log(e);
    alert("Error with local storage");
  }

  return monStats;
};
