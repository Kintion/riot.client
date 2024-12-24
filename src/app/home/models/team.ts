import { Ban } from "./ban";

export interface Team {
    teamId: number;
    win: boolean;
    bans: Ban[];
  }