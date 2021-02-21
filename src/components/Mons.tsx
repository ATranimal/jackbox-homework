import { useState, useEffect } from "react";

import { blankMonData, MonData } from "../models/Mon";
import { getMonStatsAsIntFromStorage } from "../util/Storage";
import { SubmitButton } from "./SubmitButton";
import { YoutubeLink } from "./YoutubeLink";

export const Mons = () => {
  const [monData, setMonData] = useState<MonData>(blankMonData);
  const [youtubeLink, setYoutubeLink] = useState("");

  useEffect(() => {
    const myStorage = window.localStorage;

    const storageMonData: MonData = {
      name: myStorage.getItem("name") as string,
      stats: getMonStatsAsIntFromStorage(),
    };

    setMonData(storageMonData);
  }, []);

  return (
    <div className="mons-container">
      <div className="mons-data">
        <div className="name">{monData.name}</div>
        <div className="level">Level: {monData.stats.level}</div>
        <div className="formality">Formality: {monData.stats.formality}</div>
        <div className="curiousity">Curiousity: {monData.stats.curiousity}</div>
        <div className="creativity">Creativity: {monData.stats.creativity}</div>
        <div className="compassion">Compassion: {monData.stats.compassion}</div>
      </div>

      <YoutubeLink link={youtubeLink} setLink={setYoutubeLink} />

      <SubmitButton
        link={youtubeLink}
        buttonText={"Level up your mon with a youtube link"}
        monName={monData.name}
        setMonData={setMonData}
      />
    </div>
  );
};
