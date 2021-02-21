import React, { useState } from "react";
import { YoutubeLink } from "./YoutubeLink";
import { SubmitButton } from "./SubmitButton";

import "./CreateMon.scss";

interface CreateMonProps {
  setHasMons: React.Dispatch<boolean>;
}

export const CreateMon = (props: CreateMonProps) => {
  const { setHasMons } = props;

  const [monName, setMonNameInStorage] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  return (
    <div className="mons-start-container">
      <label htmlFor="">Name</label>
      <input
        value={monName}
        onChange={(e) => {
          setMonNameInStorage(e.target.value);
        }}
      ></input>

      <YoutubeLink link={youtubeLink} setLink={setYoutubeLink} />

      <SubmitButton
        link={youtubeLink}
        buttonText={"Create a mon from a youtube link"}
        monName={monName}
        setHasMons={setHasMons}
      />
    </div>
  );
};
