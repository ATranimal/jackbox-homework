import React, { useState } from "react";
import { getStatsFromYoutubeLink } from "../api/api";
import { YoutubeLink } from "./YoutubeLink";
import { SubmitButton } from "./SubmitButton";

import "./CreateMon.scss";

interface CreateMonProps {
  setHasMons: React.Dispatch<boolean>;
}

export const CreateMon = (props: CreateMonProps) => {
  const { setHasMons } = props;

  const [monName, setMonName] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  return (
    <div className="mons-start-container">
      <label htmlFor="">Name</label>
      <input
        value={monName}
        onChange={(e) => {
          setMonName(e.target.value);
        }}
      ></input>

      <YoutubeLink link={youtubeLink} setLink={setYoutubeLink} />

      <SubmitButton
        link={youtubeLink}
        monName={monName}
        setHasMons={setHasMons}
      />
    </div>
  );
};
