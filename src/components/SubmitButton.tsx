import { getStatsFromYoutubeID } from "../api/api";
import { blankMonData, MonData } from "../models/Mon";
import {
  addToMonStatsInStorage,
  checkForExistingDataInStorage,
  getMonStatsAsIntFromStorage,
  setMonNameInStorage,
  setMonStatsInStorage,
} from "../util/Storage";

import "./SubmitButton.scss";

interface SubmitButtonProps {
  link: string;
  buttonText: string;
  monName: string;
  setHasMons?: React.Dispatch<boolean>;
  setMonData?: React.Dispatch<MonData>;
  setYoutubeLink?: React.Dispatch<string>;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const {
    link,
    buttonText,
    monName,
    setHasMons,
    setMonData,
    setYoutubeLink,
  } = props;

  const initializeMonData = async () => {
    setMonNameInStorage(monName);
    setMonStatsInStorage(blankMonData.stats);
    setHasMons?.(true);
  };

  const getAndAddMonData = async () => {
    const id = parseIDfromYoutubeLink(link);

    try {
      const monStats = await getStatsFromYoutubeID(id);

      // If this is the first run, make sure the local storage variables exist
      if (!checkForExistingDataInStorage()) {
        initializeMonData();
      }

      addToMonStatsInStorage(monStats);
      setMonData?.({
        name: monName,
        stats: getMonStatsAsIntFromStorage(),
      });
      setYoutubeLink?.("");
    } catch (e) {
      alert(e);
    }
  };

  const parseIDfromYoutubeLink = (link: string): string => {
    const rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    const id = link.match(rx);

    if (id?.[1]?.length === 11) {
      return id[1];
    } else {
      return "";
    }
  };

  return (
    <div className="submit-button">
      <button
        onClick={() => {
          getAndAddMonData();
        }}
        disabled={monName.length === 0 && link.length === 0}
      >
        {buttonText}
      </button>
    </div>
  );
};
