import { Perks } from "./perks";

export interface Participant {
    championName: string;
    individualPosition: string;
    riotIdGameName: string;
    riotIdTagline: string;
    teamId: number,
    championIconUrl: string,
    kills: number,
    deaths: number,
    assists: number,
    champLevel: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    largestMultiKill: number,
    totalDamageDealtToChampions: number,
    totalDamageTaken: number,
    wardsPlaced: number,
    perks: Perks,
    summoner1Id: number,
    summoner2Id: number,
  }