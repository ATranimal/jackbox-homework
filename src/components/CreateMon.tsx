import React, { useState } from "react";
import { TextInput } from "./TextInput";
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
      <h1> Youtube-mon Daycare </h1>
      <TextInput text={monName} setText={setMonName} labelText={"Name"} />
      <TextInput
        text={youtubeLink}
        setText={setYoutubeLink}
        labelText={"Youtube Link"}
      />

      <SubmitButton
        link={youtubeLink}
        buttonText={"Create your Youtube-mon!"}
        monName={monName}
        setHasMons={setHasMons}
      />
    </div>
  );
};
