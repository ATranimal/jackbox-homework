import { useState, useEffect } from "react";

import { blankMonData, MonData } from "../models/Mon";
import { SubmitButton } from "./SubmitButton";
import { YoutubeLink } from "./YoutubeLink";

export const Mons = () => {
  const [monData, setMonData] = useState<MonData>(blankMonData);
  const [youtubeLink, setYoutubeLink] = useState("");

  useEffect(() => {
    const myStorage = window.localStorage;

    const storageMonData: MonData = {
      name: myStorage.getItem("name") as string,
      stats: {
        formality: parseInt(myStorage.getItem("formality") as string),
        curiousity: parseInt(myStorage.getItem("curiousity") as string),
        creativity: parseInt(myStorage.getItem("creativity") as string),
      },
    };

    setMonData(storageMonData);
  }, []);

  return (
    <div className="mons-container">
      <div className="mons-data">
        <div className="name">{monData.name}</div>
        <div className="formality">{monData.stats.formality}</div>
        <div className="curiousity">{monData.stats.curiousity}</div>
        <div className="creativity">{monData.stats.creativity}</div>
      </div>

      <YoutubeLink link={youtubeLink} setLink={setYoutubeLink} />

      <SubmitButton
        link={youtubeLink}
        monName={monData.name}
        setMonData={setMonData}
      />
    </div>
  );
};
