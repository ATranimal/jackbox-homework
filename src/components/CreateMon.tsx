import { useState } from "react";
import { getStatsFromYoutubeLink } from "../api/api";

import "./CreateMon.scss";

interface CreateMonProps {
  setHasMons: React.Dispatch<boolean>;
}

export const CreateMon = (props: CreateMonProps) => {
  const { setHasMons } = props;

  const [monName, setMonName] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const initiateMonData = async () => {
    const myStorage = window.localStorage;

    const monStats = await getStatsFromYoutubeLink(youtubeLink);

    myStorage.setItem("name", monName);
    myStorage.setItem("formality", monStats.formality.toString());
    myStorage.setItem("curiousity", monStats.curiousity.toString());
    myStorage.setItem("creativity", monStats.creativity.toString());

    setHasMons(true);
  };

  return (
    <div className="mons-start-container">
      <label htmlFor="">Name</label>
      <input
        value={monName}
        onChange={(e) => {
          setMonName(e.target.value);
        }}
      ></input>

      <label>Youtube Link</label>
      <input
        value={youtubeLink}
        onChange={(e) => {
          setYoutubeLink(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          initiateMonData();
        }}
      >
        Create a mon
      </button>
    </div>
  );
};
