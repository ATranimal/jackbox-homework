import { getStatsFromYoutubeLink } from "../api/api";

interface SubmitButtonProps {
  link: string;
  monName: string;
  setHasMons?: React.Dispatch<boolean>;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { link, monName, setHasMons } = props;

  const initiateMonData = async () => {
    const myStorage = window.localStorage;

    const monStats = await getStatsFromYoutubeLink(link);

    myStorage.setItem("name", monName);
    myStorage.setItem("formality", monStats.formality.toString());
    myStorage.setItem("curiousity", monStats.curiousity.toString());
    myStorage.setItem("creativity", monStats.creativity.toString());

    setHasMons?.(true);
  };

  return (
    <button
      onClick={() => {
        initiateMonData();
      }}
    >
      Create a mon from link data
    </button>
  );
};
