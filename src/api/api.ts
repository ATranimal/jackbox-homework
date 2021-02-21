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
    level: 1,
    formality: 1,
    curiousity: 1,
    creativity: 1,
    compassion: 1,
  };

  return stats;
};
