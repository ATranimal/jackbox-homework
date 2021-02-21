import { MonStats } from "../models/Mon";

export const getStatsFromYoutubeID = async (
  youtubeID: string
): Promise<MonStats> => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/stats/" + youtubeID
  );

  if (!response.ok) {
    throw new Error(
      "Error parsing the youtube URL. Make sure it's the simplest format if possible!"
    );
  } else {
    // TODO: Add type validation on response here
    const body = await response.json();

    return body;
  }
};
