import { MonStats } from "../models/Mon";

export const getStatsFromYoutubeID = async (
  youtubeID: string
): Promise<MonStats> => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/stats/" + youtubeID
  );

  // TODO: Add type validation on response here
  const body = await response.json();

  return body;
};
