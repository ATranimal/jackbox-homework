import { getStatsFromYoutubeID } from "../api/api";
import { blankMonData, MonData } from "../models/Mon";
import {
  addToMonStatsInStorage,
  checkForExistingDataInStorage,
  getMonStatsAsIntFromStorage,
  setMonNameInStorage,
  setMonStatsInStorage,
} from "../util/Storage";

interface SubmitButtonProps {
  link: string;
  buttonText: string;
  monName: string;
  setHasMons?: React.Dispatch<boolean>;
  setMonData?: React.Dispatch<MonData>;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { link, buttonText, monName, setHasMons, setMonData } = props;

  const initializeMonData = async () => {
    setMonNameInStorage(monName);
    setMonStatsInStorage(blankMonData.stats);
    setHasMons?.(true);
  };

  const getAndAddMonData = async () => {
    const id = parseIDfromYoutubeLink(link);

    try {
      const monStats = await getStatsFromYoutubeID(id);

      // If this is the first run, make sure the
      if (!checkForExistingDataInStorage()) {
        initializeMonData();
      }

      addToMonStatsInStorage(monStats);
      setMonData?.({
        name: monName,
        stats: getMonStatsAsIntFromStorage(),
      });
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
    <button
      onClick={() => {
        getAndAddMonData();
      }}
    >
      {buttonText}
    </button>
  );
};
