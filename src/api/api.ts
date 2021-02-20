import { MonStats } from "../models/Mon";

export const getStatsFromYoutubeLink = async (
  youtubeLink: string
): Promise<MonStats> => {
  // const response = await fetch("api/url", {
  //   body: JSON.stringify({
  //     link: youtubeLink,
  //   }),
  // });

  // const body = await response.json();

  // return body;
  const stats: MonStats = {
    formality: 0,
    curiousity: 0,
    creativity: 0,
  };

  return stats;
};
