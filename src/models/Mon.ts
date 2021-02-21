import { type } from "os";

export interface MonData {
  name: string;
  stats: MonStats;
}

export interface MonStats {
  level: number;
  formality: number;
  curiousity: number;
  creativity: number;
  compassion: number;
}

export const blankMonData: MonData = {
  name: "",
  stats: {
    level: 0,
    formality: 0,
    curiousity: 0,
    creativity: 0,
    compassion: 0,
  },
};
