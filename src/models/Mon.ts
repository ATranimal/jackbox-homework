import { type } from "os";

export interface MonData {
  name: string;
  stats: MonStats;
}

export interface MonStats {
  formality: number;
  curiousity: number;
  creativity: number;
}

export const blankMonData: MonData = {
  name: "",
  stats: {
    formality: 0,
    curiousity: 0,
    creativity: 0,
  },
};
