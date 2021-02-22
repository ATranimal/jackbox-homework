import { useState, useEffect } from "react";

import { blankMonData, MonData } from "../models/Mon";
import { clearStorage, getMonStatsAsIntFromStorage } from "../util/Storage";
import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";

import "./Mons.scss";

export const Mons = () => {
  const [monData, setMonData] = useState<MonData>(blankMonData);
  const [youtubeLink, setYoutubeLink] = useState("");

  const MAX_LEVEL = 8;

  useEffect(() => {
    const myStorage = window.localStorage;

    const storageMonData: MonData = {
      name: myStorage.getItem("name") as string,
      stats: getMonStatsAsIntFromStorage(),
    };

    setMonData(storageMonData);
  }, []);

  const clearStorageAndRefresh = () => {
    clearStorage();
    window.location.reload();
  };

  return (
    <div className="mons-container">
      <div className="mons-data">
        <div className="name">
          <h1>{monData.name}</h1>
        </div>
        <p>
          Level: {monData.stats.level}
          <br />
          Formality: {monData.stats.formality}
          <br />
          Curiousity: {monData.stats.curiousity}
          <br />
          Creativity: {monData.stats.creativity}
          <br />
          Compassion: {monData.stats.compassion}
        </p>
      </div>
      <br />

      {monData.stats.level < MAX_LEVEL ? (
        <>
          <TextInput
            text={youtubeLink}
            setText={setYoutubeLink}
            labelText={"Youtube Link"}
          />
          <SubmitButton
            link={youtubeLink}
            setYoutubeLink={setYoutubeLink}
            buttonText={"Level up your mon with a youtube link"}
            monName={monData.name}
            setMonData={setMonData}
          />
        </>
      ) : (
        <div className="max-level">
          <div className="max-level-text">Your mon is at max level!</div>
        </div>
      )}

      <button
        onClick={() => {
          clearStorageAndRefresh();
        }}
      >
        Start again?
      </button>
    </div>
  );
};
