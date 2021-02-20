import { getStatsFromYoutubeLink } from "../api/api";
import { blankMonData, MonData } from "../models/Mon";
import {
  addToMonStats,
  checkForExistingData,
  getMonStatsAsInt,
  setMonName,
  setMonStats,
} from "../util/Storage";

interface SubmitButtonProps {
  link: string;
  monName: string;
  setHasMons?: React.Dispatch<boolean>;
  setMonData?: React.Dispatch<MonData>;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { link, monName, setHasMons, setMonData } = props;

  const initializeMonData = async () => {
    const myStorage = window.localStorage;

    setMonName(monName);
    setMonStats(blankMonData.stats);
    setHasMons?.(true);
  };

  const getAndAddMonData = async () => {
    const myStorage = window.localStorage;

    const monStats = await getStatsFromYoutubeLink(link);

    addToMonStats(monStats);
    setMonData?.({
      name: monName,
      stats: getMonStatsAsInt(),
    });
  };

  return (
    <button
      onClick={() => {
        if (!checkForExistingData()) {
          initializeMonData();
        }
        getAndAddMonData();
      }}
    >
      Create a mon from link data
    </button>
  );
};
