import { Participante } from "./participante";
import { Rank } from "./rank";

export interface Account {
    puuid:         string;
    gamename:      string;
    tagline:       string;
    id:            string;
    summonerid:    string;
    profileiconid: number;
    revisiondate:  Date;
    summonerlevel: number;
    participantes: Participante[];
    ranks:         Rank[];
}